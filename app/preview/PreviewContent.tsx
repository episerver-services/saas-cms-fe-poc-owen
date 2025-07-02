'use client'

import { useEffect, useState } from 'react'
import { fetchPreviewContent } from '@/lib/preview/fetchPreviewContent'
import { usePreview } from '@/lib/preview/usePreview'
import Editable from '../components/Editable'

/**
 * Renders preview content from Optimizely CMS using the preview GraphQL endpoint.
 * Relies on the `usePreview` hook to extract preview parameters (e.g. content _id).
 * Also injects the editor communication script for inline editing in Optimizely CMS.
 */
export default function PreviewContent() {
  const { key, previewToken, isEditMode } = usePreview()
  const [content, setContent] = useState<Record<string, any> | null>(null)

  // Fetch content by _id when it becomes available
  useEffect(() => {
    if (!key) return

    fetchPreviewContent({ id: key, previewToken })
      .then(setContent)
      .catch((err) => console.error('❌ Failed to fetch preview content:', err))
  }, [key, previewToken])

  // Inject the Optimizely CMS editor bridge for communication
  useEffect(() => {
    const host = process.env.NEXT_PUBLIC_OPTIMIZELY_CMS_HOST
    if (!host) {
      console.warn('⚠️ Missing NEXT_PUBLIC_OPTIMIZELY_CMS_HOST')
      return
    }

    const script = document.createElement('script')
    script.src = `https://${host}/util/javascript/communicationinjector.js`
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (!content) return <p>Loading preview content...</p>

  return (
    <main>
      <Editable name="heading" enabled={isEditMode}>
        <h1>{content.heading}</h1>
      </Editable>
    </main>
  )
}
