import { getSdk } from '@/lib/optimizely/sdk'
import { GraphQLClient } from 'graphql-request'
import { logger } from '../utils/logger'
import { ensureExists } from '../utils/assert'

/**
 * Structure of layout content returned from the CMS.
 */
interface LayoutContent {
  __typename: 'LayoutBlock'
  _id: string
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

/**
 * Fallback mock layout content used if CMS content is unavailable.
 */
const mockLayout: LayoutContent = {
  __typename: 'LayoutBlock',
  _id: 'mock-id',
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

/**
 * Runtime type guard for LayoutContent
 */
function isLayoutContent(item: any, contentId: string): item is LayoutContent {
  return (
    item?.__typename === 'LayoutBlock' &&
    item?._id === contentId &&
    typeof item.footerText === 'string'
  )
}

/**
 * Fetches layout content from the Optimizely CMS GraphQL API.
 */
export async function getLayoutContent(
  preview = false,
  previewToken?: string
): Promise<LayoutContent> {
  const env = process.env.NODE_ENV
  const contentId = process.env.OPTIMIZELY_LAYOUT_ID

  if (!contentId) {
    logger.error('Missing OPTIMIZELY_LAYOUT_ID in environment')
    if (env !== 'production') {
      throw new Error('OPTIMIZELY_LAYOUT_ID is not defined.')
    }
    return mockLayout
  }

  try {
    let endpoint = process.env.OPTIMIZELY_API_URL ?? ''
    const headers: Record<string, string> = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }

    if (preview && previewToken) {
      headers.Authorization = `Bearer ${previewToken}`
    } else if (preview) {
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
      endpoint = `${endpoint}?auth=${singleKey}`
    }

    const client = new GraphQLClient(endpoint, { headers })
    const sdk = getSdk(client)

    const { _Content } = await sdk.GetContentById()

    const layout = ensureExists(
      _Content?.items?.find((item) => isLayoutContent(item, contentId)),
      'No valid layout content returned from CMS.'
    )

    return layout
  } catch (err) {
    logger.warn(
      `⚠️ Failed to load layout content (${env}). Using fallback.`,
      err
    )
    return mockLayout
  }
}
