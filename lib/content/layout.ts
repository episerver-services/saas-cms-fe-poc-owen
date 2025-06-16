import { fetchContent } from '../cms'
import { GetLayoutDocument } from '@/app/gql/graphql'
import type { LayoutContent } from '@/types/cms'
import { logger } from '../utils/logger'

type LayoutResponse = {
  viewerAnyAuth: {
    contentItem: LayoutContent
  }
}

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

  const data = await fetchContent<LayoutResponse>({
    query: GetLayoutDocument,
    variables: {
      id: contentId,
      version: contentVersion,
    },
  })

  const contentItem = data.viewerAnyAuth?.contentItem
  if (!contentItem) {
    throw new Error('No layout content returned from CMS.')
  }

  return contentItem
}
