import { NextResponse } from "next/server"
import path from "path"
import { promises as fs } from "fs"

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "mock",
    "content-openapi.json"
  )

  try {
    const fileContents = await fs.readFile(filePath, "utf8")
    const json = JSON.parse(fileContents)
    return NextResponse.json(json)
  } catch (err: any) {
    return NextResponse.json(
      { error: "Failed to load mock data", details: err.message },
      { status: 500 }
    )
  }
}
