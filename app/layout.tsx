import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Optimizely FE PoC',
  description: 'Frontend demo for Optimizely CMS SaaS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 min-h-screen">
        <nav className="bg-blue-600 text-white p-4">
          <div className="max-w-4xl mx-auto flex space-x-6">
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/search">Search</Link>
            <Link href="/changesets">Changesets</Link>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  )
}
