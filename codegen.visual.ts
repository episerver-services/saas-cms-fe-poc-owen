import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

const schema = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`

const config: CodegenConfig = {
  schema,
  documents: './lib/optimizely/queries/visual/**/*.graphql',
  generates: {
    './lib/optimizely/visual/sdk.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-generic-sdk',
      ],
      config: {
        fetcher: 'function',
        useTypeImports: true,
        avoidOptionals: true,
        dedupeOperationSuffix: true,
        exportFragmentSpreadSubTypes: true,
        enumsAsTypes: true,
        scalars: {
          DateTime: 'string',
        },
      },
    },
  },
}

export default config
