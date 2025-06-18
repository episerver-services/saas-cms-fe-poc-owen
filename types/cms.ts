import type { GetHomepageQuery } from '@/app/gql/graphql'

export type HomepageContent = NonNullable<
  NonNullable<GetHomepageQuery['viewerAnyAuth']>['contentItem']
>

// Minimal Block type (expand as needed)
export type Block = {
  contentType?: string
  [key: string]: any
}

export type LayoutProperties = {
  menuLinks: { text: string; href: string }[]
  footerText: string
}

export type LayoutContent = {
  id: string
  contentType: string
  properties: LayoutProperties
}
