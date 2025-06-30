import { fetchFromOptimizely } from '@/lib/content/fetchFromOptimizely'
import {
  GetContentByGuidDocument,
  type GetContentByGuidQuery,
  type GetContentByGuidQueryVariables,
  type LayoutBlock,
} from '@/lib/optimizely/types/generated'
import ContentAreaMapper from '../components/content-area/mapper'

/**
 * Type guard to check if an item has `properties` (LayoutBlock or similar).
 */
function hasProperties(
  item: GetContentByGuidQuery['_Content']['items'][number]
): item is LayoutBlock {
  return '__typename' in item && 'properties' in item
}

export default async function DynamicPage({
  params,
}: {
  params: { slug?: string[] }
}) {
  const guid = params.slug?.[0]

  if (!guid) {
    return <p>Missing content GUID in URL.</p>
  }

  try {
    const result = await fetchFromOptimizely<
      GetContentByGuidQuery,
      GetContentByGuidQueryVariables
    >(GetContentByGuidDocument, { guid }, { cacheTag: `content-${guid}` })

    const item = result._Content?.items?.find(hasProperties)
    const blocks = item?.properties?.blocks ?? []

    if (!Array.isArray(blocks) || blocks.length === 0) {
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
