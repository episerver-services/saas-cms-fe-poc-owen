import { print } from 'graphql'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

/**
 * Executes a typed GraphQL query against the Optimizely Delivery API.
 *
 * Falls back to an empty mock response if:
 * - No `OPTIMIZELY_BEARER_TOKEN` is present.
 * - Running in `development` or `test` environments.
 *
 * @template TQuery - The result type of the query.
 * @template TVariables - The variables shape expected by the query.
 * @param document - A TypedDocumentNode representing the GraphQL query.
 * @param variables - The input variables for the query.
 * @returns The full data object from the GraphQL response or mock.
 */
export async function fetchFromOptimizely<TQuery, TVariables>(
  document: TypedDocumentNode<TQuery, TVariables>,
  variables: TVariables
): Promise<TQuery> {
  const query = print(document)
  const token = process.env.OPTIMIZELY_BEARER_TOKEN
  const isDev =
    process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'

  if (!token || isDev) {
    console.warn(
      '[Optimizely] Skipping fetch and returning mock query response'
    )
    // @ts-expect-error - mocking empty shape is acceptable in dev
    return { viewerAnyAuth: { contentItem: null } }
  }

  const res = await fetch('https://cg.optimizely.com/content/v3/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: `Bearer ${token}`,
      'User-Agent': 'Mozilla/5.0',
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    const text = await res.text()
    console.error('[Optimizely Fetch Error]', res.status, text)
    throw new Error(`Optimizely fetch failed: ${res.status} ${text}`)
  }

  const json = await res.json()
  return json.data as TQuery
}
