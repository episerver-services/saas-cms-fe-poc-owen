export type HomepageProperties = {
  title: string
  description: string
  callToAction?: string
}

export type HomepageContent = {
  id: string
  contentType: string
  properties: HomepageProperties
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
