import { DocumentNode, print } from 'graphql'

/**
 * Options for fetching content from the Optimizely Delivery API.
 */
interface FetchFromOptimizelyOptions {
  /**
   * Whether to use preview mode (Basic Auth + no caching).
   */
  preview?: boolean

  /**
   * Cache strategy for the request (default: 'force-cache').
   */
  cache?: RequestCache

  /**
   * Optional Next.js cache tag to associate with the request.
   */
  cacheTag?: string

  /**
   * Additional headers to include in the fetch request.
   */
  headers?: Record<string, string>
}

/**
 * Fetches content from the Optimizely Delivery API using GraphQL.
 *
 * @template TData - The expected shape of the response data.
 * @template TVariables - The expected shape of the query variables.
 *
 * @param query - A typed GraphQL DocumentNode.
 * @param variables - Variables to include with the query.
 * @param options - Additional options for auth, caching, and headers.
 *
 * @returns A promise resolving to the parsed GraphQL response data.
 *
 * @throws If the fetch fails or the response contains errors.
 */
export async function fetchFromOptimizely<TData, TVariables = object>(
  query: DocumentNode,
  variables?: TVariables,
  {
    preview = false,
    cache = 'force-cache',
    cacheTag,
    headers = {},
  }: FetchFromOptimizelyOptions = {}
): Promise<TData> {
  const endpoint = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`

  // Preview mode disables caching and switches to Basic Auth
  if (preview) {
    headers.Authorization = `Basic ${process.env.OPTIMIZELY_PREVIEW_SECRET}`
    cache = 'no-store'
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify({
      query: print(query),
      ...(variables && { variables }),
    }),
    cache,
    next: {
      tags: ['optimizely-content', ...(cacheTag ? [cacheTag] : [])],
    },
  })

  const result = await response.json()

  if (result.errors) {
    throw new Error(
      `Optimizely Delivery API returned errors: ${JSON.stringify(result.errors)}`
    )
  }

  return result.data
}
