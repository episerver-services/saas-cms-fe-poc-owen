import { getSdk } from '@/lib/optimizely/sdk'
import { GraphQLClient } from 'graphql-request'
import ContentAreaMapper from '../components/content-area/mapper'

type PageProps = {
  params: Promise<{
    slug?: string[]
  }>
}

interface BlockItem {
  properties: {
    blocks?: unknown[]
  }
}

function isBlockItem(item: unknown): item is BlockItem {
  return (
    typeof item === 'object' &&
    item !== null &&
    'properties' in item &&
    typeof (item as any).properties === 'object' &&
    Array.isArray((item as any).properties.blocks)
  )
}

export default async function DynamicPage({ params }: PageProps) {
  const resolvedParams = await params
  const guid = resolvedParams.slug?.[0]

  if (!guid) {
    return <p>Missing content GUID in URL.</p>
  }

  try {
    const endpoint = process.env.OPTIMIZELY_API_URL ?? ''
    const singleKey = process.env.OPTIMIZELY_SINGLE_KEY

    if (!singleKey) {
      throw new Error('Missing OPTIMIZELY_SINGLE_KEY')
    }

    const client = new GraphQLClient(`${endpoint}?auth=${singleKey}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    const sdk = getSdk(client)
    const { _Content } = await sdk.GetContentByGuid({ guid })

    const items = _Content?.items ?? []
    const item = (items as unknown[]).find(isBlockItem)
    const blocks = item?.properties.blocks ?? []

    if (blocks.length === 0) {
      return <p>No content blocks found for this GUID.</p>
    }

    return <ContentAreaMapper blocks={blocks} />
  } catch (error) {
    console.error(
      `[DynamicPage] Error loading content for GUID: ${guid}`,
      error
    )
    return <p>There was a problem loading this page.</p>
  }
}
