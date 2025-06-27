import { fetchFromOptimizely } from '@/lib/content/fetchFromOptimizely'
import { BlockRenderer } from '../components/BlockRenderer'
import {
  GetContentByGuidDocument,
  GetContentByGuidQuery,
  GetContentByGuidQueryVariables,
  LayoutBlock, // or another content type that has `properties`
} from '@/lib/optimizely/types/generated'

/**
 * Type guard to check if item is a LayoutBlock (has `properties`)
 */
function hasProperties(
  item: GetContentByGuidQuery['_Content']['items'][number]
): item is LayoutBlock {
  return '__typename' in item && item.__typename === 'LayoutBlock'
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
    const data = await fetchFromOptimizely<
      GetContentByGuidQuery,
      GetContentByGuidQueryVariables
    >(GetContentByGuidDocument, { guid }, { cacheTag: `content-${guid}` })

    const item = data._Content?.items?.find(hasProperties)

    const blocks = item?.properties?.blocks ?? []

    if (!Array.isArray(blocks) || blocks.length === 0) {
      return <p>No content blocks found for this GUID.</p>
    }

    return (
      <main>
        {blocks.map((block, index) => (
          <BlockRenderer key={block?.id ?? index} block={block} />
        ))}
      </main>
    )
  } catch (err) {
    console.error(
      `[DynamicPage] Failed to fetch content for GUID: ${guid}`,
      err
    )
    return <p>There was a problem loading this page.</p>
  }
}
