/**
 * Middleware for handling preview mode and experimental cookies.
 *
 * - Extracts and passes through Optimizely preview tokens via headers
 * - Forwards experimental cookies for A/B testing continuity
 * - Can support Supabase sessions or other custom auth if required
 */
import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Optimizely Graph Preview cookie passthrough
  const previewToken = request.cookies.get('__optly-preview')?.value
  if (previewToken) {
    response.headers.set('Authorization', `Bearer ${previewToken}`)
    console.log('[middleware] Preview token set in Authorization header')
  }

  // Experimentation: forward cookie if present
  const experimentCookie = request.cookies.get('optly.experiment')?.value
  if (experimentCookie) {
    response.cookies.set('optly.experiment', experimentCookie)
    console.log('[middleware] optly.experiment cookie preserved')
  }

  // Placeholder for session logic, e.g. Supabase integration
  // const supabaseSession = request.cookies.get('sb-access-token')?.value
  // if (supabaseSession) {
  //   request.headers.set('sb-access-token', supabaseSession)
  // }

  return response
}
