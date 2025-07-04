import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

/**
 * GraphQL Code Generator config for Optimizely Delivery API (v2).
 * This setup is used for the CUSTOM (non-Visual Builder) integration.
 */

const schema = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`

const config: CodegenConfig = {
  schema,
  documents: './lib/optimizely/queries/custom/**/*.graphql',
  generates: {
    './lib/optimizely/queries/custom/sdk.ts': {
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
          Url: 'string',
          GUID: 'string',
        },
      },
    },
  },
  ignoreNoDocuments: false,
}

export default config
