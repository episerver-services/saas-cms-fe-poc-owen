import { getSdk } from '@/lib/optimizely/sdk'
import { GraphQLClient } from 'graphql-request'
import { logger } from '../utils/logger'
import { ensureExists } from '../utils/assert'

interface LayoutContent {
  __typename: string
  _metadata: {
    displayName: string
    version: string
    key: string
    url: {
      base: string
      internal: string
      hierarchical: string
      default: string
      type: string
    }
  }
  footerText: string
  mainMenu?: Array<{
    NavigationLinks: Array<{ text: string; href: string }>
  }>
}

const mockLayout: LayoutContent = {
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
  footerText: '© Mock Company 2025',
  mainMenu: [
    {
      NavigationLinks: [
        { text: 'Home', href: '/' },
        { text: 'Products', href: '/products' },
        { text: 'About', href: '/about' },
      ],
    },
  ],
}

export async function getLayoutContent(
  preview = false
): Promise<LayoutContent> {
  const env = process.env.NODE_ENV
  const contentId = process.env.OPTIMIZELY_LAYOUT_ID

  if (!contentId) {
    logger.error('Missing OPTIMIZELY_LAYOUT_ID in environment')
    if (env !== 'production')
      throw new Error('OPTIMIZELY_LAYOUT_ID is not defined.')
    return mockLayout // fallback in prod too
  }

  try {
    const endpoint = process.env.OPTIMIZELY_API_URL ?? ''
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    if (preview) {
      const appKey = process.env.OPTIMIZELY_APP_KEY
      const appSecret = process.env.OPTIMIZELY_APP_SECRET
      if (!appKey || !appSecret) {
        throw new Error('Missing OPTIMIZELY_APP_KEY or OPTIMIZELY_APP_SECRET')
      }
      const basicToken = Buffer.from(`${appKey}:${appSecret}`).toString(
        'base64'
      )
      headers.Authorization = `Basic ${basicToken}`
    } else {
      const singleKey = process.env.OPTIMIZELY_SINGLE_KEY
      if (!singleKey) {
        throw new Error('Missing OPTIMIZELY_SINGLE_KEY')
      }
      endpoint.concat(`?auth=${singleKey}`)
    }

    const client = new GraphQLClient(endpoint, { headers })
    const sdk = getSdk(client)

    const { _Content } = await sdk.GetContentByGuid({ guid: contentId })
    const layout = ensureExists(
      _Content?.items?.[0],
      'No layout content returned from CMS.'
    ) as LayoutContent

    return layout
  } catch (err) {
    logger.warn(
      `⚠️ Failed to load layout content (${env}). Using fallback.`,
      err
    )
    return mockLayout
  }
}
