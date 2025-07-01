import { getSdk } from '@/lib/optimizely/sdk'
import { GraphQLClient } from 'graphql-request'
import { logger } from '../utils/logger'
import { ensureExists } from '../utils/assert'

/**
 * Structure of layout content returned from the CMS.
 */
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

/**
 * Fallback mock layout content used if CMS content is unavailable.
 */
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

/**
 * Fetches layout content from the Optimizely CMS GraphQL API.
 *
 * Depending on the mode, this function uses either:
 * - a public delivery API key (for published content),
 * - basic auth (for preview in dev),
 * - or a Bearer preview token (for live previewing).
 *
 * Falls back to mock content if the CMS is unavailable or misconfigured.
 *
 * @param preview - If true, uses preview mode for draft/unpublished content.
 * @param previewToken - Optional Bearer token for authenticated preview requests.
 * @returns A layout content object or mock content if fetch fails.
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
      // Use Bearer token for authenticated preview
      headers.Authorization = `Bearer ${previewToken}`
    } else if (preview) {
      // Use Basic auth in development preview fallback
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
      // Public delivery access using ?auth=...
      const singleKey = process.env.OPTIMIZELY_SINGLE_KEY
      if (!singleKey) {
        throw new Error('Missing OPTIMIZELY_SINGLE_KEY')
      }
      endpoint = `${endpoint}?auth=${singleKey}`
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
