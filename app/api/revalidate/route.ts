import { optimizely } from '@/lib/optimizely/fetch'
import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

const OPTIMIZELY_REVALIDATE_SECRET = process.env.OPTIMIZELY_REVALIDATE_SECRET

/**
 * Handles Optimizely webhook POST requests for content publishing.
 * Validates the webhook, resolves the content by GUID, determines its URL,
 * and triggers revalidation for the corresponding Next.js page or cache tag.
 *
 * @param {NextRequest} request - The incoming webhook POST request.
 * @returns {Promise<NextResponse>} A JSON response indicating success or failure.
 */
export async function POST(request: NextRequest) {
  try {
    validateWebhookSecret(request)
    const docId = await extractDocId(request)

    if (!docId || !docId.includes('Published')) {
      return NextResponse.json({ message: 'No action taken' })
    }

    const [guid, locale] = docId.split('_')
    const formattedGuid = guid.replaceAll('-', '')

    const content = await fetchContentByGuid(formattedGuid)
    const urlType = content?._metadata?.url?.type

    // Normalize the CMS URL to be relative to the site root
    const url =
      urlType === 'SIMPLE'
        ? content?._metadata?.url?.default
        : content?._metadata?.url?.hierarchical?.replace(
            process.env.OPTIMIZELY_START_PAGE_URL ?? '',
            ''
          )

    if (!url) {
      return NextResponse.json({ message: 'Page Not Found' }, { status: 400 })
    }

    const urlWithLocale = normalizeUrl(url, locale)

    await handleRevalidation(urlWithLocale)

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    return handleError(error)
  }
}

/**
 * Validates the Optimizely webhook secret in the request query string.
 * Throws an error if the secret is missing or invalid.
 *
 * @param {NextRequest} request
 */
function validateWebhookSecret(request: NextRequest) {
  const webhookSecret = request.nextUrl.searchParams.get('cg_webhook_secret')
  if (webhookSecret !== OPTIMIZELY_REVALIDATE_SECRET) {
    throw new Error('Invalid credentials')
  }
}

/**
 * Extracts the document ID from the webhook request JSON body.
 *
 * @param {NextRequest} request
 * @returns {Promise<string>} The document ID (e.g., "guid_locale_Published")
 */
async function extractDocId(request: NextRequest): Promise<string> {
  const requestJson = await request.json()
  return requestJson?.data?.docId || ''
}

/**
 * Fetches Optimizely content by GUID.
 *
 * @param {string} guid - The cleaned GUID (without dashes).
 * @returns {Promise<any>} The resolved content item from the CMS.
 * @throws {Error} If content is not found.
 */
async function fetchContentByGuid(guid: string) {
  const { _Content } = await optimizely.GetContentByGuid({ guid })

  const item = _Content?.items?.[0]
  if (!item) {
    throw new Error('Content not found')
  }

  return item
}

/**
 * Ensures the URL is locale-prefixed and cleaned of trailing slashes.
 *
 * @param {string} url - The CMS-provided relative URL.
 * @param {string} locale - Locale to prefix (e.g., "en").
 * @returns {string} The locale-prefixed normalized path.
 */
function normalizeUrl(url: string, locale: string): string {
  let normalizedUrl = url.startsWith('/') ? url : `/${url}`
  if (normalizedUrl.endsWith('/')) {
    normalizedUrl = normalizedUrl.slice(0, -1)
  }

  return normalizedUrl.startsWith(`/${locale}`)
    ? normalizedUrl
    : `/${locale}${normalizedUrl}`
}

/**
 * Revalidates either a cache tag or a specific page path.
 *
 * @param {string} urlWithLocale - The normalized URL to revalidate.
 */
async function handleRevalidation(urlWithLocale: string) {
  if (urlWithLocale.includes('footer')) {
    console.log(`Revalidating tag: optimizely-footer`)
    await revalidateTag('optimizely-footer')
  } else if (urlWithLocale.includes('header')) {
    console.log(`Revalidating tag: optimizely-header`)
    await revalidateTag('optimizely-header')
  } else {
    console.log(`Revalidating path: ${urlWithLocale}`)
    await revalidatePath(urlWithLocale)
  }
}

/**
 * Handles and formats errors into a JSON response.
 *
 * @param {unknown} error
 * @returns {NextResponse}
 */
function handleError(error: unknown) {
  console.error('Error processing webhook:', error)
  if (error instanceof Error) {
    if (error.message === 'Invalid credentials') {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      )
    }
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
  return NextResponse.json(
    { message: 'Internal Server Error' },
    { status: 500 }
  )
}
