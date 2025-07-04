import { Suspense } from 'react'
import { Geist, Geist_Mono } from 'next/font/google'
import '../../globals.css'
import { LOCALES } from '@/lib/optimizely/utils/language'
import { Header } from '@/app/components/layout/header'
import { Footer } from '@/app/components/layout/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export function generateStaticParams() {
  try {
    return LOCALES.map((locale) => ({ locale }))
  } catch (e) {
    console.error(e)
    return []
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <Header locale={locale} />
        </Suspense>
        <main className="container mx-auto min-h-screen px-4">{children}</main>
        <Suspense>
          <Footer locale={locale} />
        </Suspense>
      </body>
    </html>
  )
}
