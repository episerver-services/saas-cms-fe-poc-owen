import { Locales } from '../sdk'

export const DEFAULT_LOCALE: Locales = 'en'
export const LOCALES: Locales[] = ['en']

export const getValidLocale = (locale: string): Locales => {
  return LOCALES.includes(locale as Locales)
    ? (locale as Locales)
    : DEFAULT_LOCALE
}

export const getLocales = (): Locales[] => {
  return LOCALES
}

export const mapPathWithoutLocale = (path: string): string => {
  const parts = path.split('/').filter(Boolean)
  if (LOCALES.includes(parts[0] as Locales)) {
    parts.shift()
  }

  return `${parts.join('/')}`
}
