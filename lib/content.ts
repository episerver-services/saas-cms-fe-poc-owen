import { GetLayoutDocument } from '@/app/gql/graphql'
import { GetHomepageDocument } from '@/app/gql/graphql'
import { fetchContent } from './cms'

type LayoutProperties = {
  menuLinks: { text: string; href: string }[]
  footerText: string
}

type LayoutContent = {
  id: string
  contentType: string
  properties: LayoutProperties
}

type LayoutResponse = {
  viewerAnyAuth: {
    contentItem: LayoutContent
  }
}

export async function getLayoutContent(): Promise<LayoutContent> {
  const isDev = process.env.NODE_ENV === 'development'

  if (isDev || !process.env.OPTIMIZELY_BEARER_TOKEN) {
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

  const data = await fetchContent<LayoutResponse>({
    query: GetLayoutDocument,
    variables: {
      id: 'contentreference:/content/optimizely.com/en/layout/',
      version: 'published',
    },
  })

  const contentItem = data.viewerAnyAuth?.contentItem

  if (!contentItem) {
    throw new Error('No layout content returned from CMS.')
  }

  return contentItem
}

type HomepageProperties = {
  title: string
  description: string
  callToAction?: string
}

type HomepageContent = {
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
    // ⛑️ fallback: mock homepage content
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
    throw new Error('No content returned from CMS.')
  }

  return contentItem
}
