import { DEFAULT_LOCALE, LOCALES } from '@/lib/optimizely/utils/language'
import { createUrl, leadingSlashUrlPath } from '@/lib/utils'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'

const COOKIE_NAME_LOCALE = '__LOCALE_NAME'
const HEADER_KEY_LOCALE = 'X-Locale'

/**
 * Determines if a path should be excluded from locale handling.
 *
 * @param {string} path - The request pathname
 * @returns {boolean} Whether the path should be excluded
 */
function shouldExclude(path: string): boolean {
  return (
    path.startsWith('/static') || path.includes('/api/') || path.includes('.')
  )
}

/**
 * Parses the Accept-Language header to find a matching locale.
 *
 * @param {NextRequest} request - The incoming request
 * @param {string[]} locales - Supported locales
 * @returns {string | undefined} The matched locale, if any
 */
function getBrowserLanguage(
  request: NextRequest,
  locales: string[]
): string | undefined {
  const headerLanguage = request.headers.get('Accept-Language')
  if (!headerLanguage) {
    return undefined
  }

  const languages = new Negotiator({
    headers: { 'accept-language': headerLanguage },
  }).languages()

  for (const lang of languages) {
    if (locales.includes(lang)) return lang
    const langPrefix = lang.split('-')[0]
    if (locales.includes(langPrefix)) return langPrefix
  }

  return undefined
}

/**
 * Resolves the user's locale via cookie, browser language, or fallback.
 *
 * @param {NextRequest} request - The incoming request
 * @param {string[]} locales - Supported locales
 * @returns {string} The resolved locale
 */
function getLocale(request: NextRequest, locales: string[]): string {
  const cookieLocale = request.cookies.get(COOKIE_NAME_LOCALE)?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  const browserLang = getBrowserLanguage(request, locales)
  if (browserLang && locales.includes(browserLang)) {
    return browserLang
  }

  return DEFAULT_LOCALE
}

/**
 * Updates response cookies and headers based on resolved locale.
 *
 * @param {NextRequest} request - The original request
 * @param {NextResponse} response - The response object to mutate
 * @param {string} [locale] - The resolved or selected locale
 */
function updateLocaleCookies(
  request: NextRequest,
  response: NextResponse,
  locale?: string
): void {
  const cookieLocale = request.cookies.get(COOKIE_NAME_LOCALE)?.value
  const newLocale = locale || null

  if (newLocale !== cookieLocale) {
    if (newLocale) {
      response.cookies.set(COOKIE_NAME_LOCALE, newLocale)
    } else {
      response.cookies.delete(COOKIE_NAME_LOCALE)
    }
  }

  if (newLocale) {
    response.headers.append(HEADER_KEY_LOCALE, newLocale)
  } else {
    response.headers.delete(HEADER_KEY_LOCALE)
  }
}

/**
 * Middleware entry point to handle locale routing and redirection.
 *
 * @param {NextRequest} request - The incoming request
 * @returns {Promise<NextResponse>} A rewritten or redirected response
 */
export async function middleware(request: NextRequest): Promise<NextResponse> {
  const pathname = request.nextUrl.pathname
  let response = NextResponse.next()

  if (shouldExclude(pathname)) {
    return response
  }

  const localeInPathname = LOCALES.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (localeInPathname) {
    const pathnameWithoutLocale = pathname.replace(`/${localeInPathname}`, '')
    const newUrl = createUrl(
      `/${localeInPathname}${leadingSlashUrlPath(pathnameWithoutLocale)}`,
      request.nextUrl.searchParams
    )

    response = NextResponse.rewrite(new URL(newUrl, request.url))
    updateLocaleCookies(request, response, localeInPathname)
    return response
  }

  const locale = getLocale(request, LOCALES)
  const newUrl = createUrl(
    `/${locale}${leadingSlashUrlPath(pathname)}`,
    request.nextUrl.searchParams
  )
  response =
    locale === DEFAULT_LOCALE
      ? NextResponse.rewrite(new URL(newUrl, request.url))
      : NextResponse.redirect(new URL(newUrl, request.url))

  updateLocaleCookies(request, response, locale)

  return response
}

/**
 * Next.js middleware config: Exclude API routes and static files.
 */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
