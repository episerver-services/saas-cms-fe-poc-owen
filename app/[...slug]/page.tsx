import { fetchFromOptimizely } from '@/lib/content/fetchFromOptimizely'
import {
  GetContentByGuidDocument,
  type GetContentByGuidQuery,
  type GetContentByGuidQueryVariables,
} from '@/lib/optimizely/types/generated'
import ContentAreaMapper from '../components/content-area/mapper'

/**
 * Props passed by Next.js to dynamic route components.
 * In Next.js 15, params is now a Promise.
 */
type PageProps = {
  params: Promise<{
    slug?: string[]
  }>
}

/**
 * Loose shape of a content item with content blocks.
 */
interface BlockItem {
  properties: {
    blocks?: unknown[]
  }
}

/**
 * Type guard to check if an object has `properties.blocks`.
 */
function isBlockItem(item: unknown): item is BlockItem {
  return (
    typeof item === 'object' &&
    item !== null &&
    'properties' in item &&
    typeof (item as any).properties === 'object' &&
    Array.isArray((item as any).properties.blocks)
  )
}

export default async function DynamicPage({ params }: PageProps) {
  // Await the params promise
  const resolvedParams = await params
  const guid = resolvedParams.slug?.[0]

  if (!guid) {
    return <p>Missing content GUID in URL.</p>
  }

  try {
    const result = await fetchFromOptimizely<
      GetContentByGuidQuery,
      GetContentByGuidQueryVariables
    >(GetContentByGuidDocument, { guid }, { cacheTag: `content-${guid}` })

    const items = result._Content?.items ?? []

    // Cast to unknown for type guard usage
    const item = (items as unknown[]).find(isBlockItem)

    const blocks = item?.properties.blocks ?? []

    if (blocks.length === 0) {
      return <p>No content blocks found for this GUID.</p>
    }

    return <ContentAreaMapper blocks={blocks} />
  } catch (error) {
    console.error(
      `[DynamicPage] Error loading content for GUID: ${guid}`,
      error
    )
    return <p>There was a problem loading this page.</p>
  }
}
