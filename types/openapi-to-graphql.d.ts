declare module 'openapi-to-graphql' {
  import { GraphQLSchema } from 'graphql'
  import { OpenAPIObject } from 'openapi3-ts'

  export function createGraphQLSchema(
    spec: OpenAPIObject
  ): Promise<{ schema: GraphQLSchema }>
}
