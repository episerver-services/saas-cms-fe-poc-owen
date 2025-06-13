import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './schema.graphql',
  documents: ['app/**/*.graphql'],
  generates: {
    './app/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
}

export default config
