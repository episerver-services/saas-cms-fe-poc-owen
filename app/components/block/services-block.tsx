import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import type React from 'react'
import Image from 'next/image'
import {
  ServicesBlock as ServicesBlockProps,
  ServiceItem,
} from '@/lib/optimizely/sdk'
import { castContent } from '@/lib/optimizely/types/typeUtils'

export default function ServicesBlock({ services }: ServicesBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {services?.map((serviceItem, index) => {
          const service = castContent<ServiceItem>(serviceItem, 'ServiceItem')
          if (!service) return null

          return (
            <Card key={index}>
              <CardHeader>
                <div className="mb-4">
                  <Image
                    src={service.icon ?? '/placeholder.svg'}
                    alt={service?.title ?? ''}
                    width={50}
                    height={50}
                    unoptimized={!service.icon}
                  />
                </div>
                <CardTitle data-epi-edit="title">{service?.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p
                  className="text-muted-foreground"
                  data-epi-edit="description"
                >
                  {service?.description}
                </p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
