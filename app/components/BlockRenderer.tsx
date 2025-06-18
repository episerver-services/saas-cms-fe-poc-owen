'use client'

import React from 'react'
import { HeroBlock, type HeroBlockProps } from './blocks/HeroBlock'
import { ImageBlock, type ImageBlockProps } from './blocks/ImageBlock'

/**
 * A simplified CMS block type.
 * Extend this interface as more block types are introduced.
 */
export interface Block {
  contentType?: string
  id?: string
  properties?: Record<string, unknown>
  [key: string]: unknown
}

interface BlockRendererProps {
  block?: Block
}

/**
 * Renders a content block returned from the CMS.
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
