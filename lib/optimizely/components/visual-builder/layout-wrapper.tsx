'use client'

import type {
  VisualBuilderNode,
  Column,
  Row,
} from '@/lib/optimizely/types/experience'
import ContentAreaMapper from '@/lib/optimizely/components/content-area/mapper'

type Props = {
  layoutNode?: VisualBuilderNode
}

export default function VisualBuilderLayoutWrapper({ layoutNode }: Props) {
  if (!layoutNode || layoutNode.nodeType !== 'layout') return null

  return (
    <div className="vb:layout-wrapper w-full">
      {layoutNode.rows?.map((row: Row) => (
        <div key={row.key} className="vb:row flex flex-col md:flex-row">
          {row.columns?.map((column: Column) => (
            <div key={column.key} className="vb:col flex-1">
              <ContentAreaMapper
                isVisualBuilder
                experienceElements={column.elements}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
