import { NextResponse } from "next/server"

export async function GET() {
  const mockData = {
    items: [
      {
        name: "Welcome to Optimizely",
        contentId: "abc-123",
      },
      {
        name: "GraphQL Basics",
        contentId: "xyz-456",
      },
    ],
  }

  return NextResponse.json(mockData)
}
