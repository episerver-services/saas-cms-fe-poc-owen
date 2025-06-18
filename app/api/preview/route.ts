import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams
  const contentId = searchParams.get('id')
  const version = searchParams.get('version') ?? 'draft'
  const token = searchParams.get('token')

  if (!contentId) {
    return new NextResponse('Missing content ID', { status: 400 })
  }

  // Optional: check token
  const expectedToken = process.env.OPTIMIZELY_PREVIEW_TOKEN
  if (expectedToken && token !== expectedToken) {
    return new NextResponse('Invalid preview token', { status: 401 })
  }

  const redirectUrl = `/${contentId.replace('contentreference:/content/optimizely.com/en/', '').replace(/\/$/, '')}?preview=true&version=${version}`

  const response = NextResponse.redirect(new URL(redirectUrl, req.url))
  response.cookies.set('__prerender_bypass', '1')
  response.cookies.set('__next_preview_data', '1')
  return response
}
