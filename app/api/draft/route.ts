import { draftMode } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'
import { optimizely } from '@/lib/optimizely/fetch'

/**
 * Handles Optimizely preview requests by enabling draft mode and redirecting to the appropriate draft route.
 * This is used when a user clicks "Preview" in the Optimizely CMS UI.
 *
 * Expected query parameters:
 * - `preview_token`: Auth token to validate preview request.
 * - `key`: Unique content key (GUID).
 * - `ver`: Content version number.
 * - `loc`: Current locale (e.g., "en", "fr").
 *
 * The route structure depends on the type of content:
 * - `_Experience`: redirected to `/[locale]/draft/[version]/experience/[key]`
 * - `_Component`: redirected to `/[locale]/draft/[version]/block/[key]`
 * - Others (e.g. `CMSPage`): redirected to a hierarchical URL.
 *
 * @param {NextRequest} request - The incoming request containing preview parameters.
 * @returns {Promise<Response>} Redirects to the appropriate draft preview route, or returns 404/400 if invalid.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)

  const token = searchParams.get('preview_token')
  const key = searchParams.get('key')
  const ver = searchParams.get('ver')
  const loc = searchParams.get('loc')

  // Missing required params: treat as 404
  if (!ver || !token || !key) {
    return notFound()
  }

  // Look up the content in preview mode by key/version
  const { _Content } = await optimizely.GetContentByKeyAndVersion(
    { key, ver },
    { preview: true }
  )

  const content = _Content?.item

  // If content doesn't exist, return a 400 error
  if (!content) {
    return new NextResponse('Bad Request', { status: 400 })
  }

  // Enable Next.js draft mode (sets cookies)
  ;(await draftMode()).enable()

  let newUrl = ''

  // Build the correct redirect URL based on content type
  if (content.__typename === '_Experience') {
    newUrl = `/${loc}/draft/${ver}/experience/${key}`
  } else if (content.__typename === '_Component') {
    newUrl = `/${loc}/draft/${ver}/block/${key}`
  } else {
    // Fallback to using the hierarchical URL from metadata
    const startPageBase = process.env.OPTIMIZELY_START_PAGE_URL ?? ''
    const hierarchicalUrl = content?._metadata?.url?.hierarchical?.replace(
      startPageBase,
      ''
    )

    // Strip the locale from the hierarchical path, then build draft URL
    const hierarchicalUrlWithoutLocale = hierarchicalUrl?.replace(
      `/${loc}/`,
      ''
    )

    newUrl = `/${loc}/draft/${ver}/${hierarchicalUrlWithoutLocale}`
  }

  // Redirect to the appropriate draft content URL
  redirect(`${newUrl}`)
}
