import { fetchContent } from '../cms'
import { GetLayoutDocument } from '@/app/gql/graphql'

export type LayoutProperties = {
  menuLinks: { text: string; href: string }[]
  footerText: string
}

export type LayoutContent = {
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
