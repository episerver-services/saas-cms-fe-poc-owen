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
  const layout = await getLayoutContent()

  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-4xl mx-auto flex space-x-6">
            {layout.properties.menuLinks.map(({ text, href }) => (
              <Link key={href} href={href}>
                {text}
              </Link>
            ))}
          </div>
        </nav>
        <main className="max-w-4xl mx-auto p-6 flex-1">{children}</main>
        <footer className="bg-gray-100 text-sm text-center py-4 text-gray-600">
          {layout.properties.footerText}
        </footer>
      </body>
    </html>
  )
}
