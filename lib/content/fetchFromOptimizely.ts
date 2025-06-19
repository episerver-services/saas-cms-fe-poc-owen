import { print } from 'graphql'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

/**
 * Executes a typed GraphQL query against the Optimizely Delivery API.
 *
 * @template TQuery - The result type of the query.
 * @template TVariables - The variables shape expected by the query.
 * @param document - A TypedDocumentNode representing the GraphQL query.
 * @param variables - The input variables for the query.
 * @returns The full data object from the GraphQL response.
 * @throws If the fetch fails with a non-OK response.
 */
export async function fetchFromOptimizely<TQuery, TVariables>(
  document: TypedDocumentNode<TQuery, TVariables>,
  variables: TVariables
): Promise<TQuery> {
  const query = print(document)
  const token = process.env.OPTIMIZELY_BEARER_TOKEN

  if (!token) {
    throw new Error(
      '❌ OPTIMIZELY_BEARER_TOKEN is not defined in your .env.local'
    )
  }

  const res = await fetch('https://cg.optimizely.com/content/v3/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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
