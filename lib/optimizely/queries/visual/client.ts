import { GraphQLClient } from 'graphql-request'

const OPTIMIZELY_API_URL = process.env.OPTIMIZELY_API_URL
const OPTIMIZELY_SINGLE_KEY = process.env.OPTIMIZELY_SINGLE_KEY

if (!OPTIMIZELY_API_URL || !OPTIMIZELY_SINGLE_KEY) {
  throw new Error('Missing Optimizely API configuration')
}

export const client = new GraphQLClient(
  `${OPTIMIZELY_API_URL}?auth=${OPTIMIZELY_SINGLE_KEY}`
)
