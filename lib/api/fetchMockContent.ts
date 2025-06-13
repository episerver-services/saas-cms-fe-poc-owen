export async function fetchMockContent() {
  const res = await fetch("http://localhost:3000/api/mock-content")

  if (!res.ok) {
    const text = await res.text()
    throw new Error("Failed to load mock content: " + text)
  }

  const json = await res.json()

  // If your OpenAPI file defines example responses, navigate to a realistic example here:
  return (
    json.paths?.["/content"]?.get?.responses?.["200"]?.content?.[
      "application/json"
    ]?.example ?? json
  ) // fallback to full JSON
}
