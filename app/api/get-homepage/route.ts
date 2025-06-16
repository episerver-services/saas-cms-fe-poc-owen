import { NextRequest } from 'next/server'
import { GetHomepageDocument } from '@/app/gql/graphql'
import { print } from 'graphql'

export async function POST(req: NextRequest) {
  const query = print(GetHomepageDocument)

  const variables = {
    id: 'contentreference:/content/optimizely.com/en/homepage/',
    version: 'published',
  }

  const res = await fetch('https://cg.optimizely.com/content/v3/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: '*/*',
      Authorization: `Bearer ${process.env.OPTIMIZELY_BEARER_TOKEN}`,
      'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0 Safari/537.36',
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    const text = await res.text()
    return new Response(text, { status: res.status })
  }

  const json = await res.json()
  return new Response(JSON.stringify(json.data.viewerAnyAuth.contentItem), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
