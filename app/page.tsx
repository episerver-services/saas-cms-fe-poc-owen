import { fetchFromOptimizely } from '@/lib/content/fetchFromOptimizely'
import {
  GetHomepageDocument,
  GetHomepageQuery,
  GetHomepageQueryVariables,
} from '@/app/gql/graphql'
import { BlockRenderer } from './components/BlockRenderer'

/**
 * HomePage is the main route for the site. It loads and renders content blocks
 * from the Optimizely CMS using a strongly typed GraphQL query.
 *
 * Environment variables required:
 * - `OPTIMIZELY_CONTENT_ID`: Content reference for the homepage.
 * - `OPTIMIZELY_CONTENT_VERSION`: The version to fetch (e.g., 'published').
 *
 * Behaviours:
 * - If required env vars are missing, logs a warning and renders fallback markup.
 * - If the Optimizely fetch fails (e.g. blocked by Cloudflare), logs the error and
 *   renders fallback markup.
 * - If no content blocks are returned, renders a default message.
 *
 * @returns A server-rendered React component containing homepage blocks or fallback UI.
 */
export default async function HomePage() {
  const contentId = process.env.OPTIMIZELY_CONTENT_ID
  const version = process.env.OPTIMIZELY_CONTENT_VERSION

  if (!contentId || !version) {
    console.warn(
      '[BUILD] Missing OPTIMIZELY_CONTENT_ID or OPTIMIZELY_CONTENT_VERSION'
    )
    return <p>Homepage content is temporarily unavailable (missing config).</p>
  }

  let homepage: GetHomepageQuery | null = null

  try {
    homepage = await fetchFromOptimizely<
      GetHomepageQuery,
      GetHomepageQueryVariables
    >(GetHomepageDocument, {
      id: contentId,
      version,
    })
  } catch (error) {
    console.error('[BUILD] Optimizely fetch failed:', error)
    return <p>Homepage content could not be loaded (fetch error).</p>
  }

  const blocks = homepage?.viewerAnyAuth?.contentItem?.properties?.blocks

  if (!Array.isArray(blocks) || blocks.length === 0) {
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
