'use client'

import { useEffect } from 'react'
import { Button } from '@/app/components/ui/button'
import Link from 'next/link'

export default function FallbackErrorUI({
  title = 'Something went wrong',
  message = 'We couldn’t load this content. Please try again later.',
  showHomeLink = true,
  error,
}: {
  title?: string
  message?: string
  showHomeLink?: boolean
  error?: unknown
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('GraphQL error fallback:', error)
    }
  }, [error])

  return (
    <main
      role="alert"
      className="flex min-h-screen flex-col items-center justify-center bg-background px-3 text-foreground text-center"
    >
      <span aria-hidden="true" className="text-6xl mb-6">
        🚧
      </span>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-muted-foreground mb-6">{message}</p>
      {showHomeLink && (
        <Button asChild>
          <Link href="/">Go back home</Link>
        </Button>
      )}
    </main>
  )
}
