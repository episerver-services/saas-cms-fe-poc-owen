declare module 'openapi-to-graphql' {
  export function createGraphQLSchema(
    spec: any
  ): Promise<{ schema: import('graphql').GraphQLSchema }>
}
