import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getLayoutContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Optimizely FE PoC',
  description: 'Frontend demo for Optimizely CMS SaaS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const layout = await getLayoutContent()
  const { menuLinks, footerText } = layout.properties

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
        <footer className="bg-gray-100 text-center text-sm py-4">
          {footerText}
        </footer>
      </body>
    </html>
  )
}
