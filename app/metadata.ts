import type { Metadata } from 'next'

const FALLBACK_TITLE = 'Optimizely FE PoC'
const FALLBACK_DESCRIPTION = 'Frontend demo for Optimizely CMS SaaS'
const SITE_DOMAIN = process.env.SITE_DOMAIN || 'http://localhost:3000'

export const metadata: Metadata = {
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
