import { getHomepageContent } from '@/lib/content'

export default async function HomePage() {
  const content = await getHomepageContent()

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">{content.contentType}</h1>
      <ul className="space-y-3">
        {Object.entries(content.properties).map(([key, value]) => (
          <li key={key}>
            <strong className="capitalize">{key}</strong>: {value}
          </li>
        ))}
      </ul>
    </main>
  )
}
