import type { SafeVisualBuilderExperience } from '@/lib/optimizely/types/experience'

const API_URL = process.env.OPTIMIZELY_API_V2
const API_KEY = process.env.OPTIMIZELY_BEARER_TOKEN

/**
 * Fetches layout and content via Delivery API v2 (REST)
 * and returns a structure compatible with VisualBuilderExperienceWrapper.
 *
 * @param path - The content path to fetch from Optimizely (e.g. "/about")
 * @returns A SafeVisualBuilderExperience object or null on failure
 */
export async function fetchVisualBuilderExperience(
  path: string
): Promise<Partial<SafeVisualBuilderExperience> | null> {
  if (!API_URL || !API_KEY) {
    console.warn('Missing Delivery API V2 configuration')
    return null
  }

  const url = `${API_URL}?auth=${API_KEY}&path=${encodeURIComponent(path)}`

  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: { tags: ['optimizely-vb'] },
  })

  if (!res.ok) {
    console.error(`[VB Fetch] Failed to fetch: ${res.status}`)
    return null
  }

  const data = await res.json()
  const content = data.content
  const layout = data.layout

  return {
    contentId: content?.contentLink?.id,
    composition: {
      key: 'vb-root',
      type: 'Composition',
      nodeType: 'component',
      displayName: 'Visual Builder Layout',
      displayTemplateKey: 'default',
      displaySettings: [],
      nodes: layout?.main || [],
    },
    meta: {
      title: content?.name,
      guid: content?.contentGuid,
    },
    _metadata: {
      version: content?.version?.status ?? '',
    },
  } as unknown as Partial<SafeVisualBuilderExperience>
}
