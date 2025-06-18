'use client'

import React from 'react'
import Image from 'next/image'

/**
 * A simplified CMS block type from Optimizely.
 * Extend this structure as more block types and properties are introduced.
 */
export interface Block {
  /** Optional unique identifier of the block */
  id?: string
  /** The type of CMS block (e.g. 'HeroBlock', 'ImageBlock') */
  contentType?: string
  /** Arbitrary properties associated with the block */
  properties?: Record<string, unknown>
  [key: string]: unknown
}

interface BlockRendererProps {
  /** The CMS block to render */
  block?: Block
}

/**
 * Renders a CMS content block by type.
 * Falls back to a generic warning for unsupported or invalid block types.
 */
export function BlockRenderer({ block }: BlockRendererProps) {
  if (
    !block?.contentType ||
    !block?.properties ||
    typeof block.properties !== 'object'
  ) {
    return (
      <div style={{ padding: '1rem', color: '#999' }}>
        <p>Empty or invalid block</p>
      </div>
    )
  }

  switch (block.contentType) {
    case 'HeroBlock':
      return <HeroBlock {...(block.properties as HeroBlockProps)} />
    case 'ImageBlock':
      return <ImageBlock {...(block.properties as ImageBlockProps)} />
    default:
      return (
        <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
          <p>Unsupported block type: {block.contentType}</p>
        </div>
      )
  }
}

/**
 * Props for a HeroBlock.
 */
interface HeroBlockProps {
  heading?: string
  subheading?: string
}

/**
 * Renders a HeroBlock section with heading and subheading.
 */
function HeroBlock({ heading, subheading }: HeroBlockProps) {
  return (
    <section style={{ padding: '2rem', background: '#eee' }}>
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </section>
  )
}

/**
 * Props for an ImageBlock.
 */
interface ImageBlockProps {
  imageUrl?: string
  alt?: string
}

/**
 * Renders an image using `next/image`.
 * Make sure to add your image CDN or CMS domain to `next.config.js` `images.domains`.
 */
function ImageBlock({ imageUrl, alt }: ImageBlockProps) {
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
        unoptimized
      />
    </figure>
  )
}
