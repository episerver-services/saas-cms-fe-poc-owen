import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getLayoutContent } from '@/lib/content/layout'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Optimizely FE PoC',
  description: 'Frontend demo for Optimizely CMS SaaS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Default mock data to avoid UI break if fetch fails
  let menuLinks = [
    { text: 'Home', href: '/' },
    { text: 'Products', href: '/products' },
    { text: 'About', href: '/about' },
  ]
  let footerText = '© Mock Company'

  try {
    // Pass preview = true to get draft/unpublished content in dev
    const layoutContent = await getLayoutContent(true)

    // Based on your query and schema, access these fields directly (no .properties)
    menuLinks = layoutContent.mainMenu?.[0]?.NavigationLinks ?? menuLinks
    footerText = layoutContent.footerText ?? footerText
  } catch (err) {
    console.warn('⚠️ Failed to load layout content:', err)
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} site-body antialiased`}
      >
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
