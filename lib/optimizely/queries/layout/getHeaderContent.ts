import { fetchFromOptimizely } from '@/lib/content/fetchFromOptimizely'
import {
  GetHeaderDocument,
  type GetHeaderQuery,
} from '@/lib/optimizely/types/generated'

export async function getHeaderContent(locale: string = 'en') {
  const response: GetHeaderQuery = await fetchFromOptimizely(
    GetHeaderDocument,
    { locale: [locale] }
  )

  return response?.LayoutSettingsBlock?.items?.[0] ?? null
}
