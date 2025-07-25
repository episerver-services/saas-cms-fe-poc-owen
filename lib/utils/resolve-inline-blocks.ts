import { optimizely } from '../optimizely/fetch'
import type { _IContent as IContent } from '../optimizely/sdk'

/**
 * Resolves any shared or inline blocks within a CMS page.
 * Looks for block stubs that have only metadata and fetches full content by key.
 *
 * @param blocks - The array of blocks to resolve
 * @returns A list of fully resolved blocks
 */
export async function resolveInlineBlocks(
  blocks: (IContent | null | undefined)[]
): Promise<IContent[]> {
  const resolved: IContent[] = []
  const unresolvedKeys: string[] = []

  for (const block of blocks) {
    if (!block) continue

    const meta = (block as any)?._metadata
    const isStub = Object.keys(block).length <= 1 && meta?.key // Only metadata, no actual fields

    if (isStub && meta?.key) {
      unresolvedKeys.push(meta.key)
    } else {
      resolved.push(block)
    }
  }

  if (unresolvedKeys.length > 0) {
    const result = await optimizely.GetContentByGuid({ guid: unresolvedKeys })
    const fetched = result._Content?.items ?? []

    resolved.push(...(fetched as unknown as IContent[]))
  }

  return resolved
}
