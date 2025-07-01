'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'

const PreviewContent = dynamic(() => import('./PreviewContent'), {
  ssr: false,
})

export default function PreviewPage() {
  return (
    <Suspense fallback={<p>Loading preview...</p>}>
      <PreviewContent />
    </Suspense>
  )
}
