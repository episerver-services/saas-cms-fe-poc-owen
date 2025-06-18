'use client'

import React from 'react'
import Image from 'next/image'

/**
 * Props for the ImageBlock component.
 * Expects a valid imageUrl and optional alt text.
 */
export interface ImageBlockProps {
  imageUrl?: string
  alt?: string
}

/**
 * Renders an optimized image using next/image.
 * Ensure the image domain is whitelisted in next.config.js under `images.domains`.
 */
export function ImageBlock({ imageUrl, alt }: ImageBlockProps) {
  if (!imageUrl || !imageUrl.startsWith('http')) {
    console.warn('Invalid or missing image URL:', imageUrl)
    return null
  }

  return (
    <figure>
      <Image
        src={imageUrl}
        alt={alt || 'CMS image'}
        width={800}
        height={450}
        style={{ width: '100%', height: 'auto' }}
        unoptimized // Optional: remove if you're using an allowlist of domains
      />
    </figure>
  )
}
