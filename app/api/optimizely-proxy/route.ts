import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  const token = process.env.OPTIMIZELY_BEARER_TOKEN
  const body = await req.json()

  const upstreamRes = await fetch(
    'https://cg.optimizely.com/content/v3/graphql',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9',
        Origin: 'https://cg.optimizely.com',
        Referer: 'https://cg.optimizely.com/',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
      },
      body: JSON.stringify(body),
    }
  )

  const text = await upstreamRes.text()

  return new Response(text, {
    status: upstreamRes.status,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
