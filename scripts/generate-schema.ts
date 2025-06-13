const { printSchema } = require('graphql')
const fs = require('fs')
const path = require('path')
const { createGraphQLSchema } = require('openapi-to-graphql')

async function generate() {
  const openApiPath = path.resolve(__dirname, '../mock/content-openapi.json')
  const schemaOutPath = path.resolve(__dirname, '../schema.graphql')

  const spec = JSON.parse(fs.readFileSync(openApiPath, 'utf8'))
  const { schema } = await createGraphQLSchema(spec)

  fs.writeFileSync(schemaOutPath, printSchema(schema))
  console.log('✅ GraphQL schema written to schema.graphql')
}

generate().catch((err) => {
  console.error('❌ Failed to generate schema', err)
  process.exit(1)
})
