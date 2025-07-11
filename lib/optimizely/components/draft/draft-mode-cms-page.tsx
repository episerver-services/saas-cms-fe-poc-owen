import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { Suspense } from 'react'
import VisualBuilderExperienceWrapper from '../visual-builder/experience-wrapper'
import { notFound } from 'next/navigation'
import { SafeVisualBuilderExperience } from '@/lib/optimizely/types/experience'
import ContentAreaMapper from '../content-area/mapper'

export default async function DraftModeCmsPage({
  locales,
  slug,
}: {
  locales: string
  slug: string
}) {
  const validLocale = getValidLocale(locales)

  const { CMSPage } = await optimizely.GetAllPagesVersionByURL(
    { locales: [validLocale], slug },
    { preview: true }
  )

  const cmsPageItems = CMSPage?.items

  // If no CMS pages, try fallback to Visual Builder experience
  if (!cmsPageItems?.length) {
    const { SEOExperience } =
      await optimizely.GetAllVisualBuilderVesrionsBySlug(
        { locales: [validLocale], slug },
        { preview: true }
      )

    const experiences = SEOExperience?.items as
      | SafeVisualBuilderExperience[]
      | undefined

    const maxExperienceVersion = experiences
      ? Math.max(
          ...experiences.map((item) =>
            parseInt(item?._metadata?.version || '0', 10)
          )
        )
      : -1

    const experience = experiences?.find(
      (exp) =>
        parseInt(exp?._metadata?.version || '0', 10) === maxExperienceVersion
    )

    if (experience) {
      return (
        <Suspense>
          <VisualBuilderExperienceWrapper experience={experience} />
        </Suspense>
      )
    }

    return notFound()
  }

  // Otherwise, pick latest CMS page version
  const maxCmsPageVersion = Math.max(
    ...cmsPageItems.map((item) => parseInt(item?._metadata?.version || '0', 10))
  )

  const page = cmsPageItems.find(
    (p) => parseInt(p?._metadata?.version || '0', 10) === maxCmsPageVersion
  )

  const blocks = (page?.blocks ?? []).filter(Boolean)

  return (
    <Suspense>
      <ContentAreaMapper blocks={blocks} />
    </Suspense>
  )
}
