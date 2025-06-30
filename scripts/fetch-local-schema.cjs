/* eslint-disable @typescript-eslint/no-require-imports */
const { printSchema } = require('graphql')
const fs = require('fs/promises')
const path = require('path')
require('dotenv/config')

/**
 * Generates a GraphQL schema from an OpenAPI specification.
 *
 * This script reads the Optimizely CMS OpenAPI spec from a local JSON file,
 * converts it into a GraphQL schema using `openapi-to-graphql`, and writes
 * the resulting SDL schema to `schema.graphql`.
 *
 * @returns {Promise<void>}
 */
async function generateSchema() {
  const openApiPath = path.resolve(process.cwd(), 'mocks/content-openapi.json')
  const schemaOutPath = path.resolve(process.cwd(), 'schema.graphql')

  // Read and parse the OpenAPI specification
  const specRaw = await fs.readFile(openApiPath, 'utf8')
  const spec = JSON.parse(specRaw)

  // Load openapi-to-graphql module
  const { createGraphQLSchema } = require('openapi-to-graphql')

  // Generate schema from OpenAPI spec
  const { schema } = await createGraphQLSchema(spec)

  // Write the GraphQL SDL to file
  await fs.writeFile(schemaOutPath, printSchema(schema))

  console.log('✅ GraphQL schema written to schema.graphql')
}

generateSchema().catch((err) => {
  console.error('❌ Failed to generate schema', err)
  process.exit(1)
})
