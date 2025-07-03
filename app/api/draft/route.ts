import { draftMode } from 'next/headers'
import { notFound, redirect } from 'next/navigation'
import { NextRequest, NextResponse } from 'next/server'

import { optimizely } from '@/lib/optimizely/fetch'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const token = searchParams.get('preview_token')
  const key = searchParams.get('key')
  const ver = searchParams.get('ver')
  const loc = searchParams.get('loc')

  if (!ver || !token || !key) {
    return notFound()
  }

  const { _Content } = await optimizely.GetContentByKeyAndVersion(
    { key, ver },
    { preview: true }
  )

  const content = _Content?.item
  if (!content) {
    return new NextResponse('Bad Request', { status: 400 })
  }

  ;(await draftMode()).enable()

  let newUrl = ''
  if (content.__typename === '_Experience') {
    newUrl = `/${loc}/draft/${ver}/experience/${key}`
  } else if (content.__typename === '_Component') {
    newUrl = `/${loc}/draft/${ver}/block/${key}`
  } else {
    const hierarchicalUrl = content?._metadata?.url?.hierarchical?.replace(
      process.env.OPTIMIZELY_START_PAGE_URL ?? '',
      ''
    )

    const hierarchicalUrlWithoutLocale = hierarchicalUrl?.replace(
      `/${loc}/`,
      ''
    )

    newUrl = `/${loc}/draft/${ver}/${hierarchicalUrlWithoutLocale}`
  }

  redirect(`${newUrl}`)
}
