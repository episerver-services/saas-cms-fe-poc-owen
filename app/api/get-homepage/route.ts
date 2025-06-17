import { GetHomepageDocument } from '@/app/gql/graphql'
import { logger } from '@/lib/utils/logger'
import { fetchFromOptimizely } from '@/app/utils/fetchFromOptimizely'

export async function POST(): Promise<Response> {
  try {
    const contentItem = await fetchFromOptimizely(GetHomepageDocument, {
      id: 'contentreference:/content/optimizely.com/en/homepage/',
      version: 'published',
    })

    if (!contentItem) {
      logger?.warn?.('Homepage content not found in CMS response')
      return new Response('Homepage content not found', { status: 500 })
    }

    logger?.info?.('Homepage content fetched successfully')
    return new Response(JSON.stringify(contentItem), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Internal Server Error'
    logger?.error?.('Homepage fetch failed', error)
    return new Response(message, {
      status: 500,
    })
  }
}
