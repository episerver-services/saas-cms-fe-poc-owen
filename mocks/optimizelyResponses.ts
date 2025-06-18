export const mockHomepageResponse = {
  viewerAnyAuth: {
    contentItem: {
      __typename: 'Homepage',
      id: 'mock-homepage',
      contentType: 'Homepage',
      properties: {
        title: 'Mock Homepage',
        description: 'This is local mock content for development use only.',
        callToAction: 'Replace this with live CMS data once ready.',
        blocks: [],
      },
    },
  },
}

export const mockLayoutResponse = {
  viewerAnyAuth: {
    contentItem: {
      __typename: 'Layout',
      id: 'mock-layout',
      contentType: 'Layout',
      properties: {
        menuLinks: [
          { text: 'Home', href: '/' },
          { text: 'Products', href: '/products' },
          { text: 'About', href: '/about' },
        ],
        footerText: '© Mock Company 2025',
      },
    },
  },
}
