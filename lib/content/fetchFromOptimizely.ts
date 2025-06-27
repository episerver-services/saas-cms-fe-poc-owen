import { print } from 'graphql'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

interface GraphqlResponse<T> {
  data: T
  errors?: unknown[]
}

/**
 * Executes a typed GraphQL query against the Optimizely Content Graph v2 API.
 *
 * @template TQuery - The result type of the query.
 * @template TVariables - The variables shape expected by the query.
 * @param document - A TypedDocumentNode representing the GraphQL query.
 * @param variables - The input variables for the query.
 * @param options - Optional preview or cache settings.
 * @returns The full data object from the GraphQL response.
 * @throws If the fetch fails or returns a non-OK response.
 */
export async function fetchFromOptimizely<TQuery, TVariables>(
  document: TypedDocumentNode<TQuery, TVariables>,
  variables?: TVariables,
  options: { preview?: boolean; cacheTag?: string } = {}
): Promise<TQuery> {
  const query = print(document)
  const endpoint = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (options.preview && process.env.OPTIMIZELY_PREVIEW_SECRET) {
    headers.Authorization = `Basic ${process.env.OPTIMIZELY_PREVIEW_SECRET}`
  }

  const cacheTags = ['optimizely-content']
  if (options.cacheTag) cacheTags.push(options.cacheTag)

  const response = await fetch(endpoint, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
    cache: options.preview ? 'no-store' : 'force-cache',
    next: { tags: cacheTags },
  })

  if (!response.ok) {
    const errorText = await response.text()
    console.error('[Optimizely Fetch Error]', response.status, errorText)
    throw new Error(`Optimizely fetch failed: ${response.status} ${errorText}`)
  }

  const json = (await response.json()) as GraphqlResponse<TQuery>
  return json.data
}
