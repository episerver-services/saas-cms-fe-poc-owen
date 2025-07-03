import ContentAreaMapper from '../../components/content-area/mapper'
import { getOptimizelyClient } from 'lib/optimizely/client'

type PageProps = {
  params: Promise<{
    slug?: string[]
  }>
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params
  const id = resolvedParams.slug?.[0]

  if (!id) {
    return <p>Missing content ID in URL.</p>
  }

  try {
    const sdk = getOptimizelyClient({ preview: false })
    const { _Content } = await sdk.GetContentByGuid({ guid: id })

    const item = _Content?.items?.[0]

    if (
      !item ||
      typeof item !== 'object' ||
      !('properties' in item) ||
      !Array.isArray((item as any).properties?.blocks)
    ) {
      return <p>No content blocks found for this ID.</p>
    }

    const blocks = (item as any).properties.blocks
    return <ContentAreaMapper blocks={blocks} />
  } catch (error) {
    console.error(`[DynamicPage] Error loading content for ID: ${id}`, error)
    return <p>There was a problem loading this page.</p>
  }
}
