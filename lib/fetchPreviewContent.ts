/**
 * Fetches preview content from Optimizely Graph using a preview token.
 *
 * @param {Object} params - Parameters for the GraphQL query
 * @param {string} params.key - Unique content key
 * @param {string} [params.version] - Optional content version
 * @param {string} [params.locale='en'] - Locale code (e.g., 'en', 'sv')
 * @param {string} params.previewToken - Bearer token for authentication
 * @returns {Promise<PreviewContent | null>} Preview content data
 */
type PreviewContent = {
  _id: string
  _name: string
  _path: string
  heading?: string
}

export async function fetchPreviewContent({
  key,
  version,
  locale = 'en',
  previewToken,
}: {
  key: string
  version?: string
  locale?: string
  previewToken: string
}): Promise<PreviewContent | null> {
  if (!key || !previewToken) {
    throw new Error('Missing required preview parameters: key or previewToken')
  }

  const query = `
    query GetPreviewContent($key: String!, $version: String, $locale: String!) {
      _content(key: $key, version: $version, locale: $locale) {
        _id
        _name
        _path
        ... on ExamplePage {
          heading
        }
      }
    }
  `.trim()

  const response = await fetch('https://cg.optimizely.com/content/v2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${previewToken}`,
    },
    body: JSON.stringify({
      query,
      variables: { key, version, locale },
    }),
  })

  if (!response.ok) {
    const errorBody = await response.text()
    throw new Error(
      `Failed to fetch preview content: ${response.status} ${response.statusText}\n${errorBody}`
    )
  }

  const json = await response.json()

  if (json.errors) {
    console.error('GraphQL Errors:', json.errors)
    throw new Error('GraphQL error fetching preview content')
  }

  return json.data?._content ?? null
}
