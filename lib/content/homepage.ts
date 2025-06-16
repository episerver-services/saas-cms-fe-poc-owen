import { fetchContent } from '../cms'
import { GetHomepageDocument } from '@/app/gql/graphql'
import type { HomepageContent } from '@/types/cms'
import { logger } from '../utils/logger'

type HomepageResponse = {
  viewerAnyAuth: {
    contentItem: HomepageContent
  }
}

export async function getHomepageContent(): Promise<HomepageContent> {
  const isDev = process.env.NODE_ENV === 'development'
  const token = process.env.OPTIMIZELY_BEARER_TOKEN

  if (isDev || !token) {
    logger.warn('Using mock homepage content (no token or dev environment)')
    return {
      id: 'mock-id',
      contentType: 'Homepage',
      properties: {
        title: 'Mock Homepage',
        description: 'This is local mock content for development use only.',
        callToAction: 'Replace this with live CMS data once ready.',
      },
    }
  }

  const contentId = process.env.OPTIMIZELY_CONTENT_ID
  const contentVersion = process.env.OPTIMIZELY_CONTENT_VERSION || 'published'

  if (!contentId) {
    logger.error('Missing OPTIMIZELY_CONTENT_ID in environment')
    throw new Error('OPTIMIZELY_CONTENT_ID is not defined in environment.')
  }

  const data = await fetchContent<HomepageResponse>({
    query: GetHomepageDocument,
    variables: {
      id: contentId,
      version: contentVersion,
    },
  })

  const contentItem = data.viewerAnyAuth?.contentItem
  if (!contentItem) {
    throw new Error('No homepage content returned from CMS.')
  }

  return contentItem
}
