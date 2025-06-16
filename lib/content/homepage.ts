import { fetchContent } from '../cms'
import { GetHomepageDocument } from '@/app/gql/graphql'

export type HomepageProperties = {
  title: string
  description: string
  callToAction?: string
}

export type HomepageContent = {
  id: string
  contentType: string
  properties: HomepageProperties
}

type HomepageResponse = {
  viewerAnyAuth: {
    contentItem: HomepageContent
  }
}

export async function getHomepageContent(): Promise<HomepageContent> {
  const isDev = process.env.NODE_ENV === 'development'

  if (isDev || !process.env.OPTIMIZELY_BEARER_TOKEN) {
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
