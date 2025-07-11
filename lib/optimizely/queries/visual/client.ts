import { GraphQLClient } from 'graphql-request'

export const client = new GraphQLClient(process.env.OPTIMIZELY_API_URL!, {
  headers: {
    Authorization: `Bearer ${process.env.OPTIMIZELY_SINGLE_KEY}`,
  },
})
