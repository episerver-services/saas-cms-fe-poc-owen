import ContentAreaMapper from '@/app/components/content-area/mapper'
import DraftModeCmsPage from '@/app/components/draft/draft-mode-cms-page'
import { DraftModeLoader } from '@/app/components/draft/draft-mode-loader'
import VisualBuilderExperienceWrapper from '@/app/components/visual-builder/wrapper'
import { optimizely } from '@/lib/optimizely/fetch'
import { SafeVisualBuilderExperience } from '@/lib/optimizely/types/experience'
import {
  getValidLocale,
  mapPathWithoutLocale,
} from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug?: string }>
}): Promise<Metadata> {
  const { locale, slug = '' } = await props.params
  const locales = getValidLocale(locale)
  const formattedSlug = `/${slug}`

  if (process.env.IS_BUILD === 'true') {
    // Fallback metadata during build
    return {
      title: 'Optimizely Page',
      description: '',
    }
  }

  try {
    const pageData = await optimizely.getPageByURL({
      locales: [locales],
      slug: formattedSlug,
    })

    const page = pageData?.CMSPage?.item
    if (!page) {
      const experienceData = await optimizely.GetVisualBuilderBySlug({
        locales: [locales],
        slug: formattedSlug,
      })

      const experience = experienceData?.SEOExperience?.item
      if (experience) {
        return {
          title: experience?.title,
          description: experience?.shortDescription || '',
          keywords: experience?.keywords ?? '',
          alternates: generateAlternates(locale, formattedSlug),
        }
      }

      return {}
    }

    return {
      title: page.title,
      description: page.shortDescription || '',
      keywords: page.keywords ?? '',
      alternates: generateAlternates(locale, formattedSlug),
    }
  } catch (error) {
    console.error('generateMetadata fallback:', error)
    return {
      title: `Optimizely Page ${slug ? `- ${slug}` : ''}`,
    }
  }
}

export async function generateStaticParams() {
  if (process.env.IS_BUILD === 'true') {
    return [] // Skip building params during Docker build
  }

  try {
    const pageTypes = ['CMSPage', 'SEOExperience']
    const pathsResp = await optimizely.AllPages({ pageType: pageTypes })
    const paths = pathsResp._Content?.items ?? []
    const filterPaths = paths.filter(
      (path) => path && path._metadata?.url?.default !== null
    )
    const uniquePaths = new Set<string>()
    filterPaths.forEach((path) => {
      const cleanPath = mapPathWithoutLocale(
        path?._metadata?.url?.default ?? ''
      )
      uniquePaths.add(cleanPath)
    })

    return Array.from(uniquePaths).map((slug) => ({
      slug,
    }))
  } catch (e) {
    console.error('generateStaticParams fallback:', e)
    return []
  }
}

export default async function CmsPage(props: {
  params: Promise<{ locale: string; slug?: string }>
}) {
  const { locale, slug = '' } = await props.params
  const locales = getValidLocale(locale)
  const formattedSlug = `/${slug}`

  const { isEnabled: isDraftModeEnabled } = await draftMode()
  if (isDraftModeEnabled) {
    return (
      <Suspense fallback={<DraftModeLoader />}>
        <DraftModeCmsPage locales={locales} slug={formattedSlug} />
      </Suspense>
    )
  }

  const pageData = await optimizely.getPageByURL({
    locales: [locales],
    slug: formattedSlug,
  })

  const page = pageData?.CMSPage?.item

  if (!page?._modified) {
    const experienceData = await optimizely.GetVisualBuilderBySlug({
      locales: [locales],
      slug: formattedSlug,
    })

    const experience = experienceData?.SEOExperience?.item as
      | SafeVisualBuilderExperience
      | undefined

    if (experience) {
      return (
        <Suspense>
          <VisualBuilderExperienceWrapper experience={experience} />
        </Suspense>
      )
    }

    return notFound()
  }

  const blocks = (page.blocks ?? []).filter(
    (block) => block !== null && block !== undefined
  )

  return (
    <>
      <Suspense>
        <ContentAreaMapper blocks={blocks} />
      </Suspense>
    </>
  )
}
