import { fetchFromOptimizely } from './fetchFromOptimizely'
import { GetLayoutDocument } from '@/app/gql/graphql'
import type { LayoutContent } from '@/types/cms'
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
export async function getLayoutContent(): Promise<LayoutContent> {
  const isDev = process.env.NODE_ENV === 'development'
  const token = process.env.OPTIMIZELY_BEARER_TOKEN

  if (isDev || !token) {
    logger.warn('Using mock layout content (no token or dev environment)')
    return {
      id: 'mock-layout',
      contentType: 'Layout',
      properties: {
        menuLinks: [
          { text: 'Home', href: '/' },
          { text: 'Products', href: '/products' },
          { text: 'About', href: '/about' },
        ],
        footerText: '© Mock Company 2025',
      },
    }
  }

  const contentId = process.env.OPTIMIZELY_LAYOUT_ID
  const contentVersion = process.env.OPTIMIZELY_LAYOUT_VERSION || 'published'

  if (!contentId) {
    logger.error('Missing OPTIMIZELY_LAYOUT_ID in environment')
    throw new Error('OPTIMIZELY_LAYOUT_ID is not defined in environment.')
  }

  const data = await fetchFromOptimizely(GetLayoutDocument, {
    id: contentId,
    version: contentVersion,
  })

  const contentItem = ensureExists(
    data?.viewerAnyAuth?.contentItem,
    'No layout content returned from CMS.'
  )

  if (!contentItem.contentType) {
    throw new Error('CMS layout content is missing a contentType.')
  }

  return contentItem as LayoutContent
}
