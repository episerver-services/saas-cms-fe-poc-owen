import type { Metadata } from 'next'
import { getHomepageContent } from '@/lib/content/homepage'

const FALLBACK_TITLE = 'Optimizely FE PoC'
const FALLBACK_DESCRIPTION = 'Frontend demo for Optimizely CMS SaaS'

export async function generateMetadata(): Promise<Metadata> {
  try {
    const content = await getHomepageContent()

    return {
      title: content?.properties?.title || FALLBACK_TITLE,
      description: content?.properties?.description || FALLBACK_DESCRIPTION,
      openGraph: {
        title: content?.properties?.title || FALLBACK_TITLE,
        description: content?.properties?.description || FALLBACK_DESCRIPTION,
      },
    }
  } catch {
    return {
      title: FALLBACK_TITLE,
      description: FALLBACK_DESCRIPTION,
    }
  }
}
