import ContentAreaMapper from '@/lib/optimizely/components/content-area/mapper'
import VisualBuilderLayoutWrapper from './layout-wrapper'
import type {
  Column,
  Row,
  VisualBuilderNode,
  SafeVisualBuilderExperience,
} from '@/lib/optimizely/types/experience'

export default function VisualBuilderExperienceWrapper({
  experience,
}: {
  experience?: Partial<SafeVisualBuilderExperience>
}) {
  if (!experience?.composition?.nodes) return null

  const { nodes, layout } = experience.composition

  return (
    <div className="vb:experience relative w-full flex-1">
      {layout && <VisualBuilderLayoutWrapper layoutNode={layout} />}

      {nodes.map((node: VisualBuilderNode) => {
        if (node.nodeType === 'section') {
          return (
            <div
              key={node.key}
              className="vb:section w-full"
              data-epi-block-id={node.key}
            >
              {node.rows?.map((row: Row) => (
                <div key={row.key} className="vb:row flex flex-col md:flex-row">
                  {row.columns?.map((column: Column) => (
                    <div key={column.key} className="vb:col flex-1">
                      <ContentAreaMapper
                        experienceElements={column.elements}
                        isVisualBuilder
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )
        }

        if (node.nodeType === 'component' && node.component) {
          return (
            <div
              key={node.key}
              className="vb:node w-full"
              data-epi-block-id={node.key}
            >
              <ContentAreaMapper blocks={[node.component]} />
            </div>
          )
        }

        return null
      })}
    </div>
  )
}
