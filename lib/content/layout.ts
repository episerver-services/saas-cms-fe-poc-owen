import { fetchFromOptimizely } from './fetchFromOptimizely'
import {
  GetContentByGuidDocument,
  type GetContentByGuidQuery,
  type GetContentByGuidQueryVariables,
} from '@/lib/optimizely/types/generated'
import { logger } from '../utils/logger'
import { ensureExists } from '../utils/assert'

/**
 * Mock layout fallback used in development or when no API key is provided.
 */
const mockLayout = {
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

/**
 * Fetches layout content from the Optimizely Delivery API using a GUID.
 *
 * - If no API key is present, returns mock layout content.
 * - If CMS fetch fails in dev mode, returns mock layout as fallback.
 * - Uses the `OPTIMIZELY_LAYOUT_ID` environment variable to target the layout content item.
 *
 * Required environment variables:
 * - `OPTIMIZELY_SINGLE_KEY`: Delivery API auth key.
 * - `OPTIMIZELY_LAYOUT_ID`: Content GUID to query.
 */
export async function getLayoutContent(): Promise<any> {
  const isDev = process.env.NODE_ENV === 'development'
  const token = process.env.OPTIMIZELY_SINGLE_KEY
  const contentId = process.env.OPTIMIZELY_LAYOUT_ID

  if (!token) {
    logger.warn('Using mock layout content (no token provided)')
    return mockLayout
  }

  if (!contentId) {
    logger.error('Missing OPTIMIZELY_LAYOUT_ID in environment')
    throw new Error('OPTIMIZELY_LAYOUT_ID is not defined in environment.')
  }

  if (isDev) {
    logger.info('Running in development mode using real layout content.')
  }

  try {
    const result = await fetchFromOptimizely<
      GetContentByGuidQuery,
      GetContentByGuidQueryVariables
    >(GetContentByGuidDocument, { guid: contentId })

    return ensureExists(
      result._Content?.items?.[0],
      'No layout content returned from CMS.'
    )
  } catch (err) {
    if (isDev) {
      logger.warn(
        '⚠️ Layout fetch failed in dev. Falling back to mock layout.',
        err
      )
      return mockLayout
    }

    logger.error('❌ Failed to load layout content from CMS.', err)
    throw err
  }
}
