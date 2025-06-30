import { fetchFromOptimizely } from './fetchFromOptimizely'
import {
  GetContentByGuidDocument,
  type GetContentByGuidQuery,
} from '@/lib/optimizely/types/generated'
import { logger } from '../utils/logger'
import { ensureExists } from '../utils/assert'

/**
 * Fetches layout content from the Optimizely Delivery API using a GUID.
 *
 * - If no API key is present, returns mock layout content.
 * - Uses the `OPTIMIZELY_LAYOUT_ID` environment variable to target the layout content item.
 *
 * @returns A promise resolving to the layout content object from the CMS.
 * @throws If the content ID is missing or no layout content is returned.
 *
 * Required environment variables:
 * - `OPTIMIZELY_SINGLE_KEY`: Delivery API auth key.
 * - `OPTIMIZELY_LAYOUT_ID`: Content GUID to query.
 */
export async function getLayoutContent(): Promise<any> {
  const isDev = process.env.NODE_ENV === 'development'
  const token = process.env.OPTIMIZELY_SINGLE_KEY

  if (!token) {
    logger.warn('Using mock layout content (no token provided)')
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

  if (isDev) {
    logger.info('Running in development mode using real layout content.')
  }

  const contentId = process.env.OPTIMIZELY_LAYOUT_ID

  if (!contentId) {
    logger.error('Missing OPTIMIZELY_LAYOUT_ID in environment')
    throw new Error('OPTIMIZELY_LAYOUT_ID is not defined in environment.')
  }

  const result: GetContentByGuidQuery = await fetchFromOptimizely(
    GetContentByGuidDocument,
    { guid: contentId }
  )

  const layout = ensureExists(
    result._Content?.items?.[0],
    'No layout content returned from CMS.'
  )

  return layout
}
