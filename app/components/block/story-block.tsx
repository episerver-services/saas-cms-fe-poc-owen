import { Card, CardContent } from '../ui/card'
import { StoryBlock as StoryBlockProps } from '@/lib/optimizely/sdk'

interface HighlightProps {
  text?: string
}

function Highlight({ text }: HighlightProps) {
  return (
    <div className="my-6 rounded-lg bg-[#009379] p-4 text-white">
      <p>{text}</p>
    </div>
  )
}

export default function StoryBlock({ story, highlights }: StoryBlockProps) {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="border-none">
        <CardContent className="p-8">
          <div className="mx-auto max-w-3xl">
            <p
              className="mb-8 text-xl leading-relaxed text-[#2d2d2d]"
              data-epi-edit="story"
            >
              {story}
            </p>
            <div data-epi-edit="highlights">
              {highlights?.map((highlight, index) => (
                <Highlight key={index} text={highlight ?? ''} />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
