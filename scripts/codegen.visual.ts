import { config } from 'dotenv'
import type { CodegenConfig } from '@graphql-codegen/cli'

// Explicitly load the Visual Builder env file before using process.env
config({ path: '.env.visual-builder.local' })

/**
 * GraphQL Code Generator config for Optimizely Delivery API (v2).
 * This setup is used for the VISUAL BUILDER integration.
 */
const schema = `${process.env.OPTIMIZELY_API_URL}?auth=${process.env.OPTIMIZELY_SINGLE_KEY}`

const configObj: CodegenConfig = {
  schema,
  documents: './lib/optimizely/queries/visual/**/*.graphql',
  generates: {
    './lib/optimizely/queries/visual/sdk/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
      config: {
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

export default configObj
