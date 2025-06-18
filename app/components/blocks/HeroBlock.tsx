'use client'

import React from 'react'

/**
 * Props for a HeroBlock.
 */
export interface HeroBlockProps {
  heading?: string
  subheading?: string
}

/**
 * Renders a HeroBlock section with heading and subheading.
 */
export function HeroBlock({ heading, subheading }: HeroBlockProps) {
  return (
    <section style={{ padding: '2rem', background: '#eee' }}>
      <h1>{heading}</h1>
      <p>{subheading}</p>
    </section>
  )
}
