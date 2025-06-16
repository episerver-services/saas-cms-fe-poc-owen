import { print } from 'graphql'
import { logger } from '../utils/logger'

type Options = {
  query: any
  variables: Record<string, any>
  token?: string
}

export async function fetchContent<T>({
  query,
  variables,
  token,
}: Options): Promise<T> {
  const body = {
    query: print(query),
    variables,
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token ?? process.env.OPTIMIZELY_BEARER_TOKEN}`,
  }

  const endpoint = 'https://cg.optimizely.com/content/v3/graphql'

  logger.info('Fetching content from Optimizely CMS', {
    endpoint,
    variables,
    headers: {
      Authorization: '[REDACTED]',
    },
  })

  const res = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
    next: { revalidate: 10 },
  })

  if (!res.ok) {
    logger.error(`Optimizely CMS fetch failed`, res.status, res.statusText)
    throw new Error(`Failed to fetch content: ${res.statusText}`)
  }

  const json = await res.json()
  return json.data
}
