import Image from 'next/image'
import {
  LogosBlock as LogosBlockProps,
  LogoItemBlock,
} from '@/lib/optimizely/queries/custom/sdk'
import { castContent } from '@/lib/optimizely/types/typeUtils'
import placeholder from '@/public/placeholder.svg'

export default function LogosBlock({ logos }: LogosBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div
        className="flex flex-wrap justify-center gap-12"
        data-epi-edit="logos"
      >
        {logos?.map((logo, index) => {
          const safeLogoItem = castContent<LogoItemBlock>(logo, 'LogoItemBlock')
          if (!safeLogoItem) return null

          return (
            <div key={index} className="relative w-32 aspect-[5/2]">
              <Image
                src={safeLogoItem.src || placeholder}
                alt={safeLogoItem.alt || ''}
                fill
                sizes="(max-width: 768px) 50vw, 100px"
                className="object-contain"
                unoptimized={!safeLogoItem.src}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
