import ContentAreaMapper from '@/app/components/content-area/mapper'
import DraftModeHomePage from '@/app/components/draft/draft-mode-homepage'
import { DraftModeLoader } from '@/app/components/draft/draft-mode-loader'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

export const dynamic = 'force-dynamic'

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await props.params
  const locales = getValidLocale(locale)

  if (process.env.IS_BUILD === 'true') {
    return {
      title: 'Optimizely Page',
      description: '',
    }
  }

  try {
    const pageResp = await optimizely.GetStartPage({ locales })
    const page = pageResp?.StartPage?.item

    if (!page) return {}

    return {
      title: page.title,
      description: page.shortDescription || '',
      keywords: page.keywords ?? '',
      alternates: generateAlternates(locale, '/'),
    }
  } catch (e) {
    console.error('generateMetadata (HomePage) fallback:', e)
    return {
      title: 'Optimizely Page',
    }
  }
}

export default async function HomePage(props: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await props.params
  const locales = getValidLocale(locale)

  const { isEnabled: isDraftModeEnabled } = await draftMode()
  if (isDraftModeEnabled) {
    return (
      <Suspense fallback={<DraftModeLoader />}>
        <DraftModeHomePage locales={locales} />
      </Suspense>
    )
  }

  if (process.env.IS_BUILD === 'true') {
    console.warn('IS_BUILD is true, skipping live StartPage render')
    return null
  }

  try {
    const pageResponse = await optimizely.GetStartPage({ locales })
    const startPage = pageResponse?.StartPage?.item

    if (!startPage) return null

    const blocks = (startPage.blocks ?? []).filter(
      (block) => block !== null && block !== undefined
    )

    return (
      <>
        <Suspense>
          <ContentAreaMapper blocks={blocks} />
        </Suspense>
      </>
    )
  } catch (e) {
    console.error('HomePage render fallback:', e)
    return null
  }
}
