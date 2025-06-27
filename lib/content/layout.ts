import { fetchFromOptimizely } from './fetchFromOptimizely'
import { GetContentByGuidDocument } from '@/lib/optimizely/types/generated'
// import type { LayoutBlockFragment } from '@/lib/optimizely/types/generated' // Not used yet
import { logger } from '../utils/logger'
import { ensureExists } from '../utils/assert'

/**
 * Fetches layout content from the Optimizely Delivery API.
 *
 * Falls back to mock data if running in development or missing an API token.
 *
 * @returns A promise that resolves to layout content.
 * @throws If required environment variables are missing or no content is returned.
 */
export async function getLayoutContent(): Promise<any> {
  const isDev = process.env.NODE_ENV === 'development'
  const token = process.env.OPTIMIZELY_SINGLE_KEY

  if (isDev || !token) {
    logger.warn('Using mock layout content (no token or dev environment)')
    return {
      __typename: 'LayoutBlock',
      _metadata: {
        displayName: 'Mock Layout',
        version: 'mock',
        key: 'mock-layout',
        url: {
          base: '/',
          internal: '/',
          hierarchical: '/',
          default: '/',
          type: 'Mock',
        },
      },
      menuLinks: [
        { text: 'Home', href: '/' },
        { text: 'Products', href: '/products' },
        { text: 'About', href: '/about' },
      ],
      footerText: '© Mock Company 2025',
    }
  }

  const contentId = process.env.OPTIMIZELY_LAYOUT_ID
  const contentVersion = process.env.OPTIMIZELY_LAYOUT_VERSION ?? 'published'

  if (!contentId) {
    logger.error('Missing OPTIMIZELY_LAYOUT_ID in environment')
    throw new Error('OPTIMIZELY_LAYOUT_ID is not defined in environment.')
  }

  const { _Content } = await fetchFromOptimizely(GetContentByGuidDocument, {
    guid: contentId,
  })

  const layout = ensureExists(
    _Content?.items?.[0],
    'No layout content returned from CMS.'
  )

  return layout
}
