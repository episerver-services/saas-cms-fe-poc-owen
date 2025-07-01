import { useSearchParams } from 'next/navigation'

/**
 * Custom hook to extract preview-related query parameters from the URL.
 * Used to enable Optimizely SaaS CMS live preview functionality.
 *
 * @returns {Readonly<{
 *   key?: string,
 *   version?: string,
 *   locale: string,
 *   previewToken?: string,
 *   isEditMode: boolean
 * }>} An object containing preview metadata.
 */
export function usePreview(): Readonly<{
  key?: string
  version?: string
  locale: string
  previewToken?: string
  isEditMode: boolean
}> {
  const params = useSearchParams()

  return {
    key: params.get('key') ?? undefined,
    version: params.get('ver') ?? undefined,
    locale: params.get('loc') ?? 'en',
    previewToken: params.get('preview_token') ?? undefined,
    isEditMode: params.get('ctx') === 'edit',
  }
}
