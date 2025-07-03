import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { Suspense } from 'react'
import ContentAreaMapper from '../content-area/mapper'

export default async function DraftModeHomePage({
  locales,
}: {
  locales: string
}) {
  const validLocale = getValidLocale(locales)

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
}
