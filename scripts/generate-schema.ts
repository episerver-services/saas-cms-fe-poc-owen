/**
 * Converts Optimizely CMS OpenAPI spec to a GraphQL schema file
 * using openapi-to-graphql. This is required for GraphQL codegen to
 * understand the types like LandingPage, HeroBlock, etc.
 */

import { createGraphQLSchema } from 'openapi-to-graphql'
import { printSchema } from 'graphql'
import * as fs from 'fs/promises'
import * as path from 'path'
import 'dotenv/config'

async function generateSchema() {
  const openApiPath = path.resolve(process.cwd(), 'mocks/content-openapi.json')
  const schemaOutPath = path.resolve(process.cwd(), 'schema.graphql')

  const specRaw = await fs.readFile(openApiPath, 'utf8')
  const spec = JSON.parse(specRaw)
  const { schema } = await createGraphQLSchema(spec)

  await fs.writeFile(schemaOutPath, printSchema(schema))
  console.log('✅ GraphQL schema written to schema.graphql')
}

generateSchema().catch((err) => {
  console.error('❌ Failed to generate schema', err)
  process.exit(1)
})
