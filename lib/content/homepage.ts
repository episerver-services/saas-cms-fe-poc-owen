import { fetchFromOptimizely } from './fetchFromOptimizely'
import { GetHomepageDocument, type GetHomepageQuery } from '@/app/gql/graphql'
import type { HomepageContent } from '@/types/cms'
import { logger } from '../utils/logger'
import { ensureExists } from '../utils/assert'

/**
 * Retrieves homepage content from the Optimizely Delivery API using a GraphQL query.
 *
 * Falls back to a mock object if:
 * - `NODE_ENV` is 'development'
 * - `OPTIMIZELY_BEARER_TOKEN` is not set
 *
 * Environment variables required:
 * - `OPTIMIZELY_CONTENT_ID`: The content reference ID of the homepage
 * - `OPTIMIZELY_CONTENT_VERSION`: The content version to fetch (e.g., 'published')
 *
 * @returns A `HomepageContent` object containing the page data
 * @throws If the content ID is missing or if the CMS returns no content
 */
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

  const data = await fetchFromOptimizely<
    GetHomepageQuery,
    { id: string; version: string }
  >(GetHomepageDocument, {
    id: contentId,
    version: contentVersion,
  })

  return ensureExists(
    data?.viewerAnyAuth?.contentItem,
    'No homepage content returned from CMS.'
  )
}
