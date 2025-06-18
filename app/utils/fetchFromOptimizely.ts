import { print } from 'graphql'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

/**
 * Fetches content from the Optimizely GraphQL Delivery API.
 *
 * @template TQuery - The shape of the GraphQL query result.
 * @template TVariables - The shape of the variables required by the query.
 * @template TReturn - Inferred return type extracted from viewerAnyAuth.contentItem.
 * @param document - A typed GraphQL query document.
 * @param variables - Variables required by the query.
 * @returns The fetched content item or null if not found.
 */
export async function fetchFromOptimizely<
  TQuery,
  TVariables,
  TReturn = TQuery extends { viewerAnyAuth?: { contentItem?: infer T } }
    ? T
    : never,
>(
  document: TypedDocumentNode<TQuery, TVariables>,
  variables: TVariables
): Promise<TReturn | null> {
  const query = print(document)

  const res = await fetch('https://cg.optimizely.com/content/v3/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: `Bearer ${process.env.OPTIMIZELY_BEARER_TOKEN}`,
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

  const contentItem = json?.data?.viewerAnyAuth?.contentItem as
    | TReturn
    | undefined

  if (!contentItem) {
    console.warn('[Optimizely] contentItem is null or undefined')
  }

  return contentItem ?? null
}
