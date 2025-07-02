/**
 * Fetches preview content from Optimizely CMS using the GraphQL API and JWT or Basic Auth.
 * Retrieves unpublished, draft, or versioned content based on the internal _id.
 *
 * Authentication uses either a JWT (editor preview) or Basic Auth (fallback).
 *
 * @module fetchPreviewContent
 */

import { GraphQLClient } from 'graphql-request'
import { getSdk } from '@/lib/optimizely/sdk'
import { logger } from '../utils/logger'

/**
 * Parameters required to fetch preview content.
 */
interface PreviewParams {
  /**
   * Internal Optimizely content ID (_id)
   */
  id: string

  /**
   * Optional preview token (JWT) passed from editor preview mode.
   */
  previewToken?: string
}

/**
 * Fetches preview content from Optimizely GraphQL using either JWT or Basic Auth.
 *
 * @param {PreviewParams} params - Parameters to identify the content item.
 * @returns {Promise<any>} - The preview content, or throws an error if not found.
 * @throws {Error} - If content is not found or config is missing.
 */
export async function fetchPreviewContent({
  id,
  previewToken,
}: PreviewParams): Promise<any> {
  const endpoint = process.env.OPTIMIZELY_API_URL
  const appKey = process.env.OPTIMIZELY_APP_KEY
  const appSecret = process.env.OPTIMIZELY_APP_SECRET

  if (!endpoint) {
    throw new Error('Missing OPTIMIZELY_API_URL')
  }

  const headers: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

  if (previewToken) {
    headers.Authorization = `Bearer ${previewToken}`
  } else {
    if (!appKey || !appSecret) {
      throw new Error('Missing AppKey/AppSecret for preview fallback')
    }
    const basicToken = Buffer.from(`${appKey}:${appSecret}`).toString('base64')
    headers.Authorization = `Basic ${basicToken}`
  }

  const client = new GraphQLClient(endpoint, { headers })
  const sdk = getSdk(client)

  try {
    const { _Content } = await sdk.GetContentById()

    const foundItem = _Content?.items?.find(
      (item): item is typeof item & { _id: string } =>
        typeof item?._id === 'string' && item._id === id
    )

    if (!foundItem) {
      throw new Error(`Preview content with ID "${id}" not found`)
    }

    return foundItem
  } catch (err) {
    logger.error('❌ Failed to fetch preview content', err)
    throw err
  }
}
