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

  const data = await fetchContent<HomepageResponse>({
    query: GetHomepageDocument,
    variables: {
      id: 'contentreference:/content/optimizely.com/en/homepage/',
      version: 'published',
    },
  })

  const contentItem = data.viewerAnyAuth?.contentItem
  if (!contentItem) {
    throw new Error('No homepage content returned from CMS.')
  }

  return contentItem
}
