import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import Link from 'next/link'
import {
  PortfolioGridBlock as PortfolioGridBlockProps,
  PortfolioItemBlock,
} from '@/lib/optimizely/sdk'
import { castContent } from '@/lib/optimizely/types/type-utils'

/**
 * Renders a responsive grid of portfolio items.
 *
 * This component displays a title and a set of portfolio cards,
 * each containing an image, a linked title, and a description.
 *
 * Images are optimized via Next.js loader config and fall back to a local placeholder.
 *
 * @param title - Section heading text from the CMS
 * @param items - Array of portfolio item blocks (with image, link, etc.)
 */
export default function PortfolioGridBlock({
  title,
  items,
}: PortfolioGridBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="mb-12 text-3xl font-bold" data-epi-edit="title">
        {title}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {items?.map((item, index) => {
          const safeItem = castContent<PortfolioItemBlock>(
            item,
            'PortfolioItemBlock'
          )
          if (!safeItem) return null

          return (
            <Card key={index}>
              <CardContent className="p-0">
                <Image
                  src={safeItem.imageUrl || '/placeholder.svg'}
                  alt={safeItem.title || 'Portfolio image'}
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover"
                  unoptimized={!safeItem.imageUrl}
                  priority={index === 0}
                />
                <div className="p-4">
                  <Link href={safeItem.link ?? ''}>
                    <h3 className="mb-2 font-semibold" data-epi-edit="title">
                      {safeItem.title}
                    </h3>
                  </Link>
                  <p
                    className="text-sm text-muted-foreground"
                    data-epi-edit="description"
                  >
                    {safeItem.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
