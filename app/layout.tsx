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
