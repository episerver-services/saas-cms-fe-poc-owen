import { NextResponse, type NextRequest } from 'next/server'
import { getOrCreateVisitorId, addVisitorIdCookie } from '@/lib/session'

export const middleware = (request: NextRequest) => {
  const visitorId = getOrCreateVisitorId(request)
  const requestHeaders = new Headers(request.headers)

  requestHeaders.set('x-visitorid', visitorId)
  requestHeaders.set('x-search', request.nextUrl.search)

  const response = NextResponse.next({ request: { headers: requestHeaders } })

  if (!request.cookies.get('opti_visitor_id')) {
    addVisitorIdCookie(response, visitorId)
  }

  return response
}

export const config = {
  matcher: [
    '/((?!.*\\.|api|assets|preview|_next\\/static|_next\\/image|_vercel).*)',
  ],
}
