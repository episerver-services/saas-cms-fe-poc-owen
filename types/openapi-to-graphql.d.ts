declare module 'openapi-to-graphql' {
  import { GraphQLSchema } from 'graphql'

  export interface Options {
    [key: string]: unknown
  }

  export function createGraphQLSchema(
    spec: any,
    options?: Options
  ): Promise<{ schema: GraphQLSchema }>
}
