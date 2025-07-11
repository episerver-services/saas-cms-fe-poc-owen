import { client } from './client'
import { GetExperienceByPathDocument } from './sdk/graphql'
import type {
  GetExperienceByPathQuery,
  GetExperienceByPathQueryVariables,
} from './sdk/graphql'

export async function getExperienceByPath(
  variables: GetExperienceByPathQueryVariables
): Promise<GetExperienceByPathQuery> {
  return client.request(GetExperienceByPathDocument, variables)
}
