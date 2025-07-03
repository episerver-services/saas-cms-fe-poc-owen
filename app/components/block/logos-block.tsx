import Image from 'next/image'
import {
  LogosBlock as LogosBlockProps,
  LogoItemBlock,
} from '@/lib/optimizely/sdk'
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
            <div key={index} className="flex items-center">
              <Image
                src={safeLogoItem.src || placeholder}
                alt={safeLogoItem.alt || ''}
                width={100}
                height={40}
                unoptimized={!safeLogoItem.src}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
