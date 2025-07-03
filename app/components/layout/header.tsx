import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/button'
import { optimizely } from '@/lib/optimizely/fetch'
import { getValidLocale } from '@/lib/optimizely/utils/language'
import { castContent, SafeContent } from '@/lib/optimizely/types/typeUtils'
import { NavItem } from '@/lib/optimizely/sdk'
import { LanguageSwitcher } from './language-switcher'

export async function Header({ locale }: { locale: string }) {
  const validLocale = getValidLocale(locale)

  const result = await optimizely.getHeader(
    { locale: validLocale },
    { cacheTag: 'optimizely-header' }
  )

  const header = result?.Header?.item
  if (!header) {
    return null
  }

  const { logo, ctaHref, ctaText, navItems } = header

  return (
    <header className="sticky top-0 z-30 border-b bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold lg:min-w-[150px]">
            <Image src={logo ?? ''} width={50} height={50} alt="logo" />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems?.map((navItem) => {
              const item = castContent<NavItem>(
                navItem as SafeContent,
                'NavItem'
              )
              if (!item) return null

              return (
                <Link
                  key={item.href}
                  href={item?.href ?? '/'}
                  className="text-sm font-medium"
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher currentLocale={locale} />
            <Button variant="outline" asChild>
              <Link href={ctaHref ?? '/'}>{ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
