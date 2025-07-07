import ContentAreaMapper from '@/app/components/content-area/mapper'
import DraftModeCmsPage from '@/app/components/draft/draft-mode-cms-page'
import { DraftModeLoader } from '@/app/components/draft/draft-mode-loader'
import VisualBuilderExperienceWrapper from '@/app/components/visual-builder/wrapper'
import { optimizely } from '@/lib/optimizely/fetch'
import { fetchVisualBuilderExperience } from '@/lib/optimizely/fetchVisualBuilderExperience'
import {
  getValidLocale,
  mapPathWithoutLocale,
} from '@/lib/optimizely/utils/language'
import { generateAlternates } from '@/lib/utils/metadata'
import { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

/**
 * Generates SEO metadata for both custom CMS content and Visual Builder pages.
 * Falls back to default metadata if nothing is found or during Docker builds.
 *
 * @param props - Route parameters including locale and slug
 * @returns Metadata object for Next.js
 */
export async function generateMetadata(props: {
  params: Promise<{ locale: string; slug?: string }>
}): Promise<Metadata> {
  const { locale, slug = '' } = await props.params
  const locales = getValidLocale(locale)
  const formattedSlug = `/${slug}`

  if (process.env.IS_BUILD === 'true') {
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
      // Fallback: try to fetch Visual Builder content
      const vb = await fetchVisualBuilderExperience(formattedSlug)

      if (vb?.meta?.title) {
        return {
          title: vb.meta.title,
          description: vb.meta.description || '',
          keywords: '',
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

/**
 * Generates static paths for all CMS and Visual Builder pages
 * used during static site generation.
 *
 * @returns A list of slug paths for dynamic routing
 */
export async function generateStaticParams() {
  if (process.env.IS_BUILD === 'true') {
    return [] // Skip building paths in CI builds
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

/**
 * Main route handler for CMS/Visual Builder hybrid pages.
 * Uses CMS content if available, otherwise falls back to VB experience.
 *
 * @param props - Route parameters including locale and slug
 * @returns React component for the requested page
 */
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

  // If no CMS page is found, try to render a Visual Builder experience
  if (!page?._modified) {
    const vb = await fetchVisualBuilderExperience(formattedSlug)

    if (vb?.composition) {
      return (
        <Suspense>
          <VisualBuilderExperienceWrapper experience={vb} />
        </Suspense>
      )
    }

    return notFound()
  }

  // Fallback to CMS content block rendering
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
