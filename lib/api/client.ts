export async function fetchFromOptimizely<T = unknown>(
  query: string,
  variables?: Record<string, any>
): Promise<T> {
  const res = await fetch('/api/mock-content', {
    method: 'POST', // Will eventually be GraphQL POST
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Optimizely fetch failed: ${text}`)
  }

  return res.json()
}
