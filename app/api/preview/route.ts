import { NextRequest, NextResponse } from 'next/server'
import { validatePreviewAuth } from '@/app/preview/validateSignature'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const key = searchParams.get('key') ?? ''
  const version = searchParams.get('ver') ?? ''
  const locale = searchParams.get('loc') ?? ''
  const auth = searchParams.get('auth') ?? ''
  const psk = process.env.OPTIMIZELY_PREVIEW_PSK!

  const isValid = validatePreviewAuth({
    key,
    version,
    locale,
    providedAuth: auth,
    psk,
  })

  if (!isValid) {
    return NextResponse.json(
      { error: 'Invalid preview signature' },
      { status: 403 }
    )
  }

  // optionally store previewToken or set cookies here

  return NextResponse.redirect(`/preview`)
}
