import type { Metadata } from 'next'
import { getHomepageContent } from '@/lib/content/homepage'
import { logger } from '@/lib/utils/logger'

const FALLBACK_TITLE = 'Optimizely FE PoC'
const FALLBACK_DESCRIPTION = 'Frontend demo for Optimizely CMS SaaS'
const SITE_DOMAIN = process.env.SITE_DOMAIN || 'http://localhost:3000'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const content = await getHomepageContent()
    const title = content?.properties?.title || FALLBACK_TITLE
    const description = content?.properties?.description || FALLBACK_DESCRIPTION

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: SITE_DOMAIN,
        siteName: FALLBACK_TITLE,
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
    }
  } catch (err) {
    logger.warn(
      'Using fallback metadata due to error fetching homepage content.',
      err
    )

    return {
      title: FALLBACK_TITLE,
      description: FALLBACK_DESCRIPTION,
      openGraph: {
        title: FALLBACK_TITLE,
        description: FALLBACK_DESCRIPTION,
        url: SITE_DOMAIN,
        siteName: FALLBACK_TITLE,
        locale: 'en_GB',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: FALLBACK_TITLE,
        description: FALLBACK_DESCRIPTION,
      },
    }
  }
}
