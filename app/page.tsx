import { GetHomepageDocument } from './gql/graphql'
// import { graphql } from './gql'
import { print } from 'graphql'

type HomepageData = {
  contentType: string
  properties: Record<string, unknown>
}

async function getData(): Promise<HomepageData> {
  const isMock = true

  if (isMock) {
    return {
      contentType: 'MockPage',
      properties: {
        title: 'Welcome to the mock homepage',
        description: 'This is placeholder content until the API is connected.',
      },
    }
  } else {
    const query = print(GetHomepageDocument)

    const variables = {
      id: 'contentreference:/content/optimizely.com/en/homepage/',
      version: 'published',
    }

    const res = await fetch('https://cg.optimizely.com/content/v3/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.OPTIMIZELY_BEARER_TOKEN}`,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 10 },
    })

    if (!res.ok) {
      const text = await res.text()
      throw new Error(`Failed to fetch: ${res.status} – ${text}`)
    }

    const json = await res.json()
    return json.data.viewerAnyAuth.contentItem
  }
}

export default async function HomePage() {
  const content = await getData()

  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">{content.contentType}</h1>
      <ul className="space-y-2">
        {Object.entries(content.properties).map(([key, value]) => (
          <li key={key}>
            <strong className="capitalize">{key}</strong>: {String(value)}
          </li>
        ))}
      </ul>
    </main>
  )
}
