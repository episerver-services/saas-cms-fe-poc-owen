import { print } from 'graphql'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

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
    throw new Error(`Optimizely fetch failed: ${res.status} ${text}`)
  }

  const json = await res.json()

  const contentItem = json?.data?.viewerAnyAuth?.contentItem as
    | TReturn
    | undefined
  return contentItem ?? null
}
