import { fetchFromOptimizely } from '@/lib/content/fetchFromOptimizely'
import { GetContentByGuidDocument } from '@/lib/optimizely/types/generated'
import { BlockRenderer } from './components/BlockRenderer'

/**
 * HomePage is the main route for the site. It loads and renders content blocks
 * from the Optimizely CMS using a strongly typed GraphQL query.
 */
export default async function HomePage() {
  const contentId = process.env.OPTIMIZELY_CONTENT_ID
  const version = process.env.OPTIMIZELY_CONTENT_VERSION ?? 'published'

  if (!contentId) {
    console.warn(
      '[BUILD] Missing OPTIMIZELY_CONTENT_ID or OPTIMIZELY_CONTENT_VERSION'
    )
    return <p>Homepage content is temporarily unavailable (missing config).</p>
  }

  let blocks: any[] = []

  try {
    const { _Content } = await fetchFromOptimizely(GetContentByGuidDocument, {
      guid: contentId,
    })

    const homepage = _Content?.items?.[0]

    if (Array.isArray(homepage?.blocks)) {
      blocks = homepage.blocks
    }
  } catch (error) {
    console.error('[BUILD] Optimizely fetch failed:', error)
    return <p>Homepage content could not be loaded (fetch error).</p>
  }

  if (!blocks.length) {
    return <p>Homepage content not found or empty.</p>
  }

  return (
    <main>
      {blocks.map((block, index) => (
        <BlockRenderer key={block?.id ?? index} block={block} />
      ))}
    </main>
  )
}
