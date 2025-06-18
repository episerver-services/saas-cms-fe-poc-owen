import { fetchFromOptimizely } from '@/app/utils/fetchFromOptimizely'
import {
  GetHomepageDocument,
  GetHomepageQuery,
  GetHomepageQueryVariables,
} from '@/app/gql/graphql'
import { BlockRenderer } from './components/BlockRenderer'

/**
 * HomePage is the main route for the site. It loads and renders content blocks
 * from the Optimizely CMS using a strongly typed GraphQL query.
 *
 * - Fetches the homepage content via the GraphQL Delivery API.
 * - Renders each content block using the BlockRenderer component.
 * - Falls back to a message if no valid content blocks are returned.
 *
 * Environment variables required:
 * - `OPTIMIZELY_CONTENT_ID`: Content reference for the homepage.
 * - `OPTIMIZELY_CONTENT_VERSION`: The version to fetch (e.g., 'published').
 *
 * @returns A server-rendered React component containing homepage blocks or a fallback.
 */
export default async function HomePage() {
  const homepage = await fetchFromOptimizely<
    GetHomepageQuery,
    GetHomepageQueryVariables
  >(GetHomepageDocument, {
    id: process.env.OPTIMIZELY_CONTENT_ID!,
    version: process.env.OPTIMIZELY_CONTENT_VERSION!,
  })

  const blocks = homepage?.viewerAnyAuth?.contentItem?.properties?.blocks

  if (!Array.isArray(blocks) || blocks.length === 0) {
    return <p>Homepage content not found or empty.</p>
  }

  return (
    <main>
      {blocks.map((block, index) => (
        <BlockRenderer key={block?.id ?? index} block={block} />
      ))}
    </main>
  )
}
