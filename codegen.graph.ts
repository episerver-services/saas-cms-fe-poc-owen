import { loadEnvConfig } from '@next/env'
import type { CodegenConfig } from '@graphql-codegen/cli'
import getSchemaInfo from '@remkoj/optimizely-graph-client/codegen'
import OptimizelyGraphPreset from '@remkoj/optimizely-graph-functions/preset'

// Load env vars
loadEnvConfig(process.cwd())

const config: CodegenConfig = {
  schema: getSchemaInfo(),
  documents: ['src/components/cms/**/*.graphql'],
  generates: {
    './gql/': {
      preset: OptimizelyGraphPreset,
      presetConfig: {
        recursion: true,
        gqlTagName: 'gql',
        injections: [
          {
            into: 'PageData',
            pathRegex: 'src/components/cms/.*\\.(page|experience)\\.graphql',
          },
          {
            into: 'BlockData',
            pathRegex:
              'src/components/cms/.*\\.(block|component|section)\\.graphql',
          },
          {
            into: 'ElementData',
            pathRegex: 'src/components/cms/.*\\.element\\.graphql',
          },
          {
            into: 'SearchData',
            pathRegex: 'src/components/cms/.*\\.search\\.graphql',
          },
          {
            into: 'IContentListItem',
            pathRegex: 'src/components/cms/.*\\.contentarea\\.graphql',
          },
        ],
      },
    },
  },
  ignoreNoDocuments: false,
}

export default config
