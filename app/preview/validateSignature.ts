import crypto from 'node:crypto'

export function calculatePreviewAuth({
  key,
  version,
  locale,
  psk,
}: {
  key: string
  version: string
  locale: string
  psk: string
}): string {
  const searchParams = new URLSearchParams()
  searchParams.set('key', key ?? '')
  searchParams.set('ver', version ?? '')
  searchParams.set('loc', locale ?? '')
  const base = searchParams.toString()

  return crypto.createHmac('sha256', psk).update(base).digest('base64url')
}

export function validatePreviewAuth({
  key,
  version,
  locale,
  providedAuth,
  psk,
}: {
  key: string
  version: string
  locale: string
  providedAuth: string
  psk: string
}) {
  const expected = calculatePreviewAuth({ key, version, locale, psk })
  return expected === providedAuth
}
