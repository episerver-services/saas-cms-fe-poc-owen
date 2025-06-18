import { print, type DocumentNode, type OperationDefinitionNode } from 'graphql'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

/**
 * Safely extracts the name of the GraphQL operation from a document.
 */
function getOperationName(doc: DocumentNode): string | undefined {
  return doc.definitions
    .filter(
      (def): def is OperationDefinitionNode =>
        def.kind === 'OperationDefinition'
    )
    .map((def) => def.name?.value)
    .find(Boolean)
}

/**
 * Executes a typed GraphQL query against the Optimizely Delivery API.
 *
 * Falls back to a mock response if:
 * - No `OPTIMIZELY_BEARER_TOKEN` is present.
 * - Running in `development`, `test`, or during static build (`NEXT_PHASE=phase-production-build`).
 *
 * @template TQuery - The result type of the query.
 * @template TVariables - The variables shape expected by the query.
 * @param document - A TypedDocumentNode representing the GraphQL query.
 * @param variables - The input variables for the query.
 * @returns The full data object from the GraphQL response or a mock.
 */
export async function fetchFromOptimizely<TQuery, TVariables>(
  document: TypedDocumentNode<TQuery, TVariables>,
  variables: TVariables
): Promise<TQuery> {
  const query = print(document)
  const token = process.env.OPTIMIZELY_BEARER_TOKEN
  const isDev =
    process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'

  const isBuildTime =
    typeof window === 'undefined' &&
    process.env.NEXT_PHASE === 'phase-production-build'

  if (!token || isDev || isBuildTime) {
    console.warn(
      '[Optimizely] Skipping fetch and returning mock query response'
    )

    const opName = getOperationName(document)

    if (opName === 'GetHomepage') {
      return {
        viewerAnyAuth: {
          contentItem: {
            __typename: 'Homepage',
            id: 'mock-homepage',
            contentType: 'Homepage',
            properties: {
              title: 'Mock Homepage',
              description:
                'This is local mock content for development use only.',
              callToAction: 'Replace this with live CMS data once ready.',
              blocks: [],
            },
          },
        },
      } as TQuery
    }

    if (opName === 'GetLayout') {
      return {
        viewerAnyAuth: {
          contentItem: {
            __typename: 'Layout',
            id: 'mock-layout',
            contentType: 'Layout',
            properties: {
              menuLinks: [
                { text: 'Home', href: '/' },
                { text: 'Products', href: '/products' },
                { text: 'About', href: '/about' },
              ],
              footerText: '© Mock Company 2025',
            },
          },
        },
      } as TQuery
    }

    return {
      viewerAnyAuth: {
        contentItem: null,
      },
    } as unknown as TQuery
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
