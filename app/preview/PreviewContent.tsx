'use client'

import { useEffect, useState } from 'react'
import { fetchPreviewContent } from '@/lib/fetchPreviewContent'
import { usePreview } from '@/lib/usePreview'
import Editable from '../components/Editable'

export default function PreviewContent() {
  const { key, version, locale, previewToken, isEditMode } = usePreview()
  const [content, setContent] = useState<any>(null)
  const [token, setToken] = useState(previewToken)

  useEffect(() => {
    if (key && token) {
      fetchPreviewContent({ key, version, locale, previewToken: token })
        .then(setContent)
        .catch(console.error)
    }
  }, [key, version, locale, token])

  useEffect(() => {
    const script = document.createElement('script')
    script.src =
      'https://app-abc123.cms.optimizely.com/util/javascript/communicationinjector.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const handler = (event: any) => {
      const url = event?.detail?.previewUrl && new URL(event.detail.previewUrl)
      const newToken = url?.searchParams.get('preview_token')
      if (newToken) setToken(newToken)
    }

    window.addEventListener('optimizely:cms:contentSaved', handler)
    return () =>
      window.removeEventListener('optimizely:cms:contentSaved', handler)
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
