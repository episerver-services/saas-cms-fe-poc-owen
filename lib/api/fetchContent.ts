import { print } from 'graphql'
import { GetHomepageDocument } from '@/app/gql/graphql'

type Options = {
  id: string
  version?: 'published' | 'latest'
  token?: string
}

export async function fetchHomepage({
  id,
  version = 'published',
  token,
}: Options) {
  const query = print(GetHomepageDocument)
  const variables = { id, version }

  const viewerField = token ? 'viewerBearerAuth' : 'viewerAnyAuth'

  const graphqlQuery = {
    query: `
      query GetHomepage($id: String!, $version: String!) {
        ${viewerField}${token ? `(token: "${token}")` : ''} {
          contentItem(key: $id, version: $version) {
            id: key
            contentType
            properties
          }
        }
      }
    `,
    variables,
  }

  const res = await fetch('https://cg.optimizely.com/content/v3/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token ?? process.env.OPTIMIZELY_BEARER_TOKEN}`,
    },
    body: JSON.stringify(graphqlQuery),
    next: { revalidate: 10 },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch content: ${res.statusText}`)
  }

  const json = await res.json()
  return json.data?.[viewerField]?.contentItem
}
