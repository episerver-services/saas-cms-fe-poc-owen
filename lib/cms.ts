import { print, DocumentNode } from 'graphql'

type FetchContentArgs = {
  query: string | DocumentNode // Accept either a parsed query or raw string
  variables?: Record<string, unknown>
  token?: string
}

export async function fetchContent<T = unknown>({
  query,
  variables = {},
  token = process.env.OPTIMIZELY_BEARER_TOKEN,
}: FetchContentArgs): Promise<T> {
  const res = await fetch('https://cg.optimizely.com/content/v3/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: typeof query === 'string' ? query : print(query),
      variables,
    }),
    next: { revalidate: 10 },
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Fetch failed: ${res.status} – ${text}`)
  }

  const json = await res.json()

  if (json.errors) {
    throw new Error(`GraphQL error: ${JSON.stringify(json.errors, null, 2)}`)
  }

  return json.data
}
