import { getSdk } from '@/lib/optimizely/sdk'
import { GraphQLClient } from 'graphql-request'
import ContentAreaMapper from './components/content-area/mapper'

/**
 * HomePage is the root route of the site. It renders CMS-driven blocks
 * using the content fetched from Optimizely by GUID.
 *
 * Required ENV vars:
 * - `OPTIMIZELY_CONTENT_ID`: The GUID of the homepage content.
 */
export default async function HomePage() {
  const contentId = process.env.OPTIMIZELY_CONTENT_ID

  if (!contentId) {
    console.warn('[BUILD] Missing OPTIMIZELY_CONTENT_ID')
    return <p>Homepage content is temporarily unavailable (missing config).</p>
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
    const { _Content } = await sdk.GetContentByGuid({ guid: contentId })

    const homepage = _Content?.items?.[0]

    const blocks = Array.isArray((homepage as any)?.blocks)
      ? (homepage as any).blocks
      : []

    if (!blocks.length) {
      return <p>Homepage content not found or empty.</p>
    }

    return <ContentAreaMapper blocks={blocks} />
  } catch (error) {
    console.error('[BUILD] Optimizely fetch failed:', error)
    return <p>Homepage content could not be loaded (fetch error).</p>
  }
}
