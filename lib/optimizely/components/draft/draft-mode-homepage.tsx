import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { Suspense } from 'react'
import ContentAreaMapper from '../content-area/mapper'

export default async function DraftModeHomePage({
  locales,
}: {
  locales: string
}) {
  if (process.env.IS_BUILD === 'true') {
    console.warn('IS_BUILD is true, skipping DraftModeHomePage render')
    return null
  }

  const validLocale = getValidLocale(locales)

  try {
    const { StartPage } = await optimizely.GetAllStartPageVersions(
      { locales: [validLocale] },
      { preview: true }
    )

    const startPageItems = StartPage?.items ?? []

    const maxStartPageVersion = Math.max(
      ...startPageItems.map((item) =>
        parseInt(item?._metadata?.version || '0', 10)
      )
    )

    const page = startPageItems.find(
      (p) => parseInt(p?._metadata?.version || '0', 10) === maxStartPageVersion
    )

    const blocks = (page?.blocks ?? []).filter(Boolean)

    return (
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    )
  } catch (e) {
    console.error('DraftModeHomePage fallback:', e)
    return null
  }
}
