import { print, type DocumentNode, type OperationDefinitionNode } from 'graphql'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import {
  mockHomepageResponse,
  mockLayoutResponse,
} from '@/mocks/optimizelyResponses'

/**
 * Safely extracts the name of the GraphQL operation from a document.
 *
 * @param doc - A GraphQL document node.
 * @returns The name of the operation if present, otherwise undefined.
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
 * - Running in `test` or during static build (`NEXT_PHASE=phase-production-build`).
 *
 * Uses a local proxy in development to avoid CORS issues and Cloudflare blocks.
 *
 * @template TQuery - The result type of the query.
 * @template TVariables - The variables shape expected by the query.
 * @param document - A TypedDocumentNode representing the GraphQL query.
 * @param variables - The input variables for the query.
 * @param options - Optional settings for fetch behavior.
 * @param options.skipProxy - If true, skips using the local dev proxy (default: false).
 * @returns The full data object from the GraphQL response or a mock.
 * @throws If the fetch fails with a non-OK response.
 */
export async function fetchFromOptimizely<TQuery, TVariables>(
  document: TypedDocumentNode<TQuery, TVariables>,
  variables: TVariables,
  options?: { skipProxy?: boolean }
): Promise<TQuery> {
  const query = print(document)
  const token = process.env.OPTIMIZELY_BEARER_TOKEN
  const isDev =
    process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
  const isBuildTime =
    typeof window === 'undefined' &&
    process.env.NEXT_PHASE === 'phase-production-build'

  // Fall back to mock data if missing token or running in unsupported environments
  if (!token || isBuildTime) {
    console.warn(
      '[Optimizely] Skipping fetch and returning mock query response'
    )
    const opName = getOperationName(document)

    switch (opName) {
      case 'GetHomepage':
        return mockHomepageResponse as TQuery
      case 'GetLayout':
        return mockLayoutResponse as TQuery
      default:
        return {
          viewerAnyAuth: {
            contentItem: null,
          },
        } as unknown as TQuery
    }
  }

  const useProxy = isDev && !options?.skipProxy

  const endpoint = useProxy
    ? 'http://localhost:3000/api/optimizely-proxy'
    : 'https://cg.optimizely.com/content/v3/graphql'

  const headers: Record<string, string> = useProxy
    ? {
        'Content-Type': 'application/json',
      }
    : {
        'Content-Type': 'application/json',
        Accept: '*/*',
        Authorization: `Bearer ${token}`,
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      }

  console.log('[Optimizely Fetch] Endpoint:', endpoint)
  console.log('[Optimizely Fetch] Variables:', variables)

  const res = await fetch(endpoint, {
    method: 'POST',
    headers,
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
