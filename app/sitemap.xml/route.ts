import { optimizely } from '@/lib/optimizely/fetch'

export const dynamic = 'force-dynamic'

/**
 * Dynamic sitemap.xml generator for Optimizely content.
 * Retrieves all published URLs from Optimizely and returns an XML sitemap.
 *
 * @returns An XML Response of sitemap entries
 */
export async function GET() {
  try {
    const result = await optimizely.AllPages()
    const pages = result._Content?.items ?? []

    const urls = pages
      .map((item) => item?._metadata?.url?.default)
      .filter((url): url is string => typeof url === 'string')

    const domain = process.env.SITE_DOMAIN ?? 'https://example.com'
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map((url) => `<url><loc>${domain}${url}</loc></url>`).join('\n')}
</urlset>`

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  } catch (err) {
    console.error('Error generating sitemap:', err)
    return new Response('Sitemap generation error', { status: 500 })
  }
}
