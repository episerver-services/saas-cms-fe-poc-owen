import { optimizely } from '@/lib/optimizely/fetch'

/**
 * API route for generating a list of published URLs for robots/sitemap.
 *
 * Pulls content from Optimizely CMS and extracts valid route paths from `_metadata.url.default`.
 *
 * @returns A JSON array of locale-prefixed slugs
 */
export async function GET() {
  const result = await optimizely.AllPages()
  const pages = result._Content?.items ?? []

  const urls = pages
    .map((item) => item?._metadata?.url?.default)
    .filter((url): url is string => typeof url === 'string')

  return Response.json(urls)
}
