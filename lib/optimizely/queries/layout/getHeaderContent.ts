import { getSdk, type Locales } from '@/lib/optimizely/sdk'
import { GraphQLClient } from 'graphql-request'

export async function getHeaderContent(locale: Locales = 'en') {
  const endpoint = process.env.OPTIMIZELY_API_URL
  const singleKey = process.env.OPTIMIZELY_SINGLE_KEY

  if (!endpoint || !singleKey) {
    throw new Error('Missing OPTIMIZELY_API_URL or OPTIMIZELY_SINGLE_KEY')
  }

  const client = new GraphQLClient(`${endpoint}?auth=${singleKey}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  const sdk = getSdk(client)

  const { LayoutSettingsBlock } = await sdk.GetHeader({ locale: [locale] })

  return LayoutSettingsBlock?.items?.[0] ?? null
}
