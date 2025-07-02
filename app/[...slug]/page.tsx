import { getSdk } from '@/lib/optimizely/sdk'
import { GraphQLClient } from 'graphql-request'
import ContentAreaMapper from '../components/content-area/mapper'

type PageProps = {
  /**
   * Route parameters passed to the page, e.g. from dynamic segment `[...slug]`.
   */
  params: Promise<{
    slug?: string[]
  }>
}

/**
 * Renders a dynamic CMS-driven page by fetching content from Optimizely SaaS CMS.
 *
 * Uses a GraphQL query to fetch all content, then filters by internal `_id` from the URL.
 * Falls back gracefully if the ID is missing or no valid blocks are returned.
 *
 * @param {PageProps} props - Props containing URL params, including the content `_id`.
 * @returns {JSX.Element} The page content or an error/fallback message.
 */
export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params
  const id = resolvedParams.slug?.[0]

  if (!id) {
    return <p>Missing content ID in URL.</p>
  }

  try {
    const endpoint = process.env.OPTIMIZELY_API_URL ?? ''
    const singleKey = process.env.OPTIMIZELY_SINGLE_KEY

    if (!singleKey) {
      throw new Error('Missing OPTIMIZELY_SINGLE_KEY')
    }

    const client = new GraphQLClient(`${endpoint}?auth=${singleKey}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    const sdk = getSdk(client)
    const { _Content } = await sdk.GetContentById()

    // Filter for a content item with matching _id and a content area
    const item = (_Content?.items ?? []).find((entry) => {
      return (
        typeof entry === 'object' &&
        entry !== null &&
        '_id' in entry &&
        (entry as any)._id === id &&
        'properties' in entry &&
        typeof (entry as any).properties === 'object' &&
        Array.isArray((entry as any).properties.blocks)
      )
    }) as { properties: { blocks: unknown[] } } | undefined

    const blocks = item?.properties?.blocks ?? []

    if (blocks.length === 0) {
      return <p>No content blocks found for this ID.</p>
    }

    return <ContentAreaMapper blocks={blocks} />
  } catch (error) {
    console.error(`[DynamicPage] Error loading content for ID: ${id}`, error)
    return <p>There was a problem loading this page.</p>
  }
}
