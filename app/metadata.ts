import type { Metadata } from 'next'
import { getHomepageContent } from '@/lib/content'

export async function generateMetadata(): Promise<Metadata> {
  const content = await getHomepageContent()

  const title = String(content.properties?.title ?? 'Default Title')
  const description = String(
    content.properties?.description ?? 'Default description.'
  )

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_GB',
      url: 'https://yourdomain.com/', // You can update this to match the actual deployed URL
    },
  }
}
