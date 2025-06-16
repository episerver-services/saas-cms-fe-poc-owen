import { print } from 'graphql'

interface GraphQLFetchOptions {
  query: any
  variables?: Record<string, any>
  token?: string // optional for viewerBearerAuth if needed
  nextOptions?: RequestInit['next']
}

export async function fetchGraphQL<T = unknown>({
  query,
  variables,
  token,
  nextOptions,
}: GraphQLFetchOptions): Promise<T> {
  const response = await fetch('https://cg.optimizely.com/content/v3/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token ?? process.env.OPTIMIZELY_BEARER_TOKEN}`,
    },
    body: JSON.stringify({
      query: typeof query === 'string' ? query : print(query),
      variables,
    }),
    next: nextOptions,
  })

  if (!response.ok) {
    const text = await response.text()
    console.error('GraphQL error:', text)
    throw new Error(`GraphQL request failed with ${response.status}`)
  }

  const json = await response.json()

  if (json.errors) {
    console.error('GraphQL response errors:', json.errors)
    throw new Error(`GraphQL errors occurred: ${JSON.stringify(json.errors)}`)
  }

  return json.data
}
