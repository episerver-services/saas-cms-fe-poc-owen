import { NextRequest, NextResponse } from 'next/server'

const VISITOR_ID_COOKIE = 'opti_visitor_id'

export function getOrCreateVisitorId(req: NextRequest): string {
  const raw = req.cookies.get(VISITOR_ID_COOKIE)?.value
  if (raw) {
    const [value] = raw.split('.')
    if (value) return value
  }
  return generateVisitorId()
}

export function addVisitorIdCookie(res: NextResponse, id: string) {
  const value = `${id}.nosig` // Plain ID with dummy signature
  res.cookies.set(VISITOR_ID_COOKIE, value, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  })
}

function generateVisitorId(): string {
  return crypto.randomUUID()
}
