import '@/app/globals.css'
import Link from 'next/link'
import { headers } from 'next/headers'
import { Geist, Geist_Mono } from 'next/font/google'
import { getLayoutContent } from '@/lib/content/layout'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default async function PreviewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = await headers()
  const authHeader = headersList.get('authorization')
  const previewToken = authHeader?.replace('Bearer ', '')

  let layoutContent
  try {
    layoutContent = await getLayoutContent(true, previewToken)
  } catch (err) {
    console.warn('⚠️ Failed to load preview layout content:', err)
    layoutContent = {
      footerText: '⚠️ Layout unavailable',
      mainMenu: [],
    }
  }

  const menuLinks = layoutContent.mainMenu?.[0]?.NavigationLinks ?? []
  const footerText = layoutContent.footerText ?? '© Fallback'

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
