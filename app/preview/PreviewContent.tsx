'use client'

import { useEffect, useState } from 'react'
import { fetchPreviewContent } from '@/lib/preview/fetchPreviewContent'
import { usePreview } from '@/lib/preview/usePreview'
import Editable from '../components/Editable'

export default function PreviewContent() {
  const { key, version, locale, previewToken, isEditMode } = usePreview()
  const [content, setContent] = useState<Record<string, any> | null>(null)
  const [token, setToken] = useState(previewToken)

  // Fetch preview content when key/token/locale/version changes
  useEffect(() => {
    if (!key || !token) return

    fetchPreviewContent({ key, version, locale, previewToken: token })
      .then(setContent)
      .catch((err) => console.error('❌ Failed to fetch preview content:', err))
  }, [key, version, locale, token])

  // Inject Optimizely's communication script (for edit mode)
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

  // Listen for Optimizely CMS editor events to update token dynamically
  useEffect(() => {
    const handler = (event: Event) => {
      if (!(event instanceof CustomEvent)) return

      try {
        const url = new URL(event.detail.previewUrl)
        const newToken = url.searchParams.get('preview_token')
        if (newToken) {
          setToken(newToken)
        }
      } catch (e) {
        console.warn('⚠️ Could not extract preview token from event', e)
      }
    }

    window.addEventListener('optimizely:cms:contentSaved', handler)
    return () => {
      window.removeEventListener('optimizely:cms:contentSaved', handler)
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
