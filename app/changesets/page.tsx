import { fetchMockContent } from "@/lib/api/fetchMockContent"

export default async function ChangesetsPage() {
  const data = await fetchMockContent()

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Mocked Content</h1>
      <ul className="space-y-2">
        {Array.isArray(data?.items) ? (
          data.items.map((item: any, i: number) => (
            <li key={i} className="p-2 border rounded">
              <strong>{item.name}</strong> — <code>{item.contentId}</code>
            </li>
          ))
        ) : (
          <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </ul>
    </div>
  )
}
