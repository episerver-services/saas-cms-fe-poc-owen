import { fetchFromOptimizely } from '@/lib/content/fetchFromOptimizely'
import {
  GetContentByGuidDocument,
  type GetContentByGuidQuery,
} from '@/lib/optimizely/types/generated'
import ContentAreaMapper from './components/content-area/mapper'

/**
 * HomePage is the root route of the site. It renders CMS-driven blocks
 * using the content fetched from Optimizely by GUID.
 *
 * Required ENV vars:
 * - `OPTIMIZELY_CONTENT_ID`: The GUID of the homepage content.
 *
 * @returns A server-rendered React component containing homepage content.
 */
export default async function HomePage() {
  const contentId = process.env.OPTIMIZELY_CONTENT_ID

  if (!contentId) {
    console.warn('[BUILD] Missing OPTIMIZELY_CONTENT_ID')
    return <p>Homepage content is temporarily unavailable (missing config).</p>
  }

  let blocks: any[] = []

  try {
    const result: GetContentByGuidQuery = await fetchFromOptimizely(
      GetContentByGuidDocument,
      { guid: contentId }
    )

    const homepage = result._Content?.items?.[0]

    // Prefer properties.blocks if typed later
    if (Array.isArray((homepage as any)?.blocks)) {
      blocks = (homepage as any).blocks
    }
  } catch (error) {
    console.error('[BUILD] Optimizely fetch failed:', error)
    return <p>Homepage content could not be loaded (fetch error).</p>
  }

  if (!blocks.length) {
    return <p>Homepage content not found or empty.</p>
  }

  return <ContentAreaMapper blocks={blocks} />
}
