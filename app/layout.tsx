import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getLayoutContent } from '@/lib/content/layout'

export const metadata: Metadata = {
  title: 'Optimizely FE PoC',
  description: 'Frontend demo for Optimizely CMS SaaS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let menuLinks = [
    { text: 'Home', href: '/' },
    { text: 'Products', href: '/products' },
    { text: 'About', href: '/about' },
  ]
  let footerText = '© Mock Company'

  try {
    const layoutContent = await getLayoutContent()
    menuLinks = layoutContent.properties.menuLinks
    footerText = layoutContent.properties.footerText
  } catch (err) {
    console.warn('⚠️ Failed to load layout content:', err)
    // Use fallback menuLinks and footerText
  }

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-4xl mx-auto flex space-x-6">
            {menuLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.text}
              </Link>
            ))}
          </div>
        </nav>

        <main className="max-w-4xl mx-auto p-6 flex-grow">{children}</main>

        <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
          {footerText}
        </footer>
      </body>
    </html>
  )
}
