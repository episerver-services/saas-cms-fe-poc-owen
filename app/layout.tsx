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
  }

  return (
    <html lang="en">
      <body className="site-body">
        <nav className="site-nav">
          <div className="nav-container">
            {menuLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.text}
              </Link>
            ))}
          </div>
        </nav>

        <main className="site-main">{children}</main>

        <footer className="site-footer">{footerText}</footer>
      </body>
    </html>
  )
}
