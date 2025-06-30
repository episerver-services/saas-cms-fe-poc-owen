/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * Fetches the live GraphQL introspection schema from Optimizely Delivery API (v2)
 * and saves it as a local `schema.graphql` file.
 */

const fs = require('fs/promises')
const path = require('path')
const fetch = require('node-fetch')
const {
  getIntrospectionQuery,
  buildClientSchema,
  printSchema,
} = require('graphql')

require('dotenv').config()

/**
 * Generates a GraphQL schema from a live CMS endpoint and saves it to disk.
 */
async function fetchSchema() {
  const introspectionQuery = getIntrospectionQuery()
  const endpoint = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query: introspectionQuery }),
  })

  const result = await response.json()

  if (result.errors) {
    console.error('❌ GraphQL introspection query failed:', result.errors)
    process.exit(1)
  }

  const schema = buildClientSchema(result.data)
  const schemaSDL = printSchema(schema)
  const outputPath = path.resolve(process.cwd(), 'schema.graphql')

  await fs.writeFile(outputPath, schemaSDL)
  console.log('✅ Live GraphQL schema written to schema.graphql')
}

fetchSchema().catch((err) => {
  console.error('❌ Failed to fetch schema:', err)
  process.exit(1)
})
