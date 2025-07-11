/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": typeof types.BlankExperienceDataFragmentDoc,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  _metadata {\n    displayName\n  }\n}": typeof types.BlogSectionExperienceDataFragmentDoc,
    "query getBlogSectionExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        url {\n          base\n          default\n        }\n        displayName\n        published\n      }\n      composition {\n        nodes {\n          ...CompositionNode\n        }\n      }\n    }\n  }\n}": typeof types.GetBlogSectionExperienceByPathDocument,
    "query GetExperienceById($ids: [String!]!, $locale: [Locales!]) {\n  _Experience(ids: $ids, locale: $locale) {\n    items {\n      ... on _IExperience {\n        ...ExperienceData\n      }\n    }\n  }\n}": typeof types.GetExperienceByIdDocument,
    "query getExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: _Experience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      ... on BlankExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNode\n          }\n        }\n      }\n      ... on BlogSectionExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNode\n          }\n        }\n      }\n    }\n  }\n}": typeof types.GetExperienceByPathDocument,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    base\n    default\n  }\n}": typeof types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CompositionNode on CompositionStructureNode {\n  key\n  displaySettings {\n    key\n    value\n  }\n  nodes {\n    key\n    displaySettings {\n      key\n      value\n    }\n    ... on CompositionComponentNode {\n      component {\n        __typename\n        ...HeroBlock\n        ...TextBlock\n      }\n    }\n  }\n}": typeof types.CompositionNodeFragmentDoc,
    "fragment ExperienceData on _IExperience {\n  ... on BlankExperience {\n    ...BlankExperienceData\n  }\n  ... on BlogSectionExperience {\n    ...BlogSectionExperienceData\n  }\n}": typeof types.ExperienceDataFragmentDoc,
    "fragment HeroBlock on HeroBlock {\n  HeroImage {\n    __typename\n  }\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ButtonText\n    ButtonUrl {\n      base\n      default\n    }\n  }\n}": typeof types.HeroBlockFragmentDoc,
    "fragment ItemsInContentArea on _IComponent {\n  __typename\n  ... on HeroBlock {\n    ...HeroBlock\n  }\n  ... on TextBlock {\n    ...TextBlock\n  }\n}": typeof types.ItemsInContentAreaFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  GraphType\n}": typeof types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment TextBlock on TextBlock {\n  TextBlockOverline\n  TextBlockHeadingSize\n  TextBlockHeading\n  TextBlockDescription {\n    json\n    html\n  }\n  TextCenter\n  TextBlockWidth\n  TextClassName\n}": typeof types.TextBlockFragmentDoc,
};
const documents: Documents = {
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": types.BlankExperienceDataFragmentDoc,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  _metadata {\n    displayName\n  }\n}": types.BlogSectionExperienceDataFragmentDoc,
    "query getBlogSectionExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        url {\n          base\n          default\n        }\n        displayName\n        published\n      }\n      composition {\n        nodes {\n          ...CompositionNode\n        }\n      }\n    }\n  }\n}": types.GetBlogSectionExperienceByPathDocument,
    "query GetExperienceById($ids: [String!]!, $locale: [Locales!]) {\n  _Experience(ids: $ids, locale: $locale) {\n    items {\n      ... on _IExperience {\n        ...ExperienceData\n      }\n    }\n  }\n}": types.GetExperienceByIdDocument,
    "query getExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: _Experience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      ... on BlankExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNode\n          }\n        }\n      }\n      ... on BlogSectionExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNode\n          }\n        }\n      }\n    }\n  }\n}": types.GetExperienceByPathDocument,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    base\n    default\n  }\n}": types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CompositionNode on CompositionStructureNode {\n  key\n  displaySettings {\n    key\n    value\n  }\n  nodes {\n    key\n    displaySettings {\n      key\n      value\n    }\n    ... on CompositionComponentNode {\n      component {\n        __typename\n        ...HeroBlock\n        ...TextBlock\n      }\n    }\n  }\n}": types.CompositionNodeFragmentDoc,
    "fragment ExperienceData on _IExperience {\n  ... on BlankExperience {\n    ...BlankExperienceData\n  }\n  ... on BlogSectionExperience {\n    ...BlogSectionExperienceData\n  }\n}": types.ExperienceDataFragmentDoc,
    "fragment HeroBlock on HeroBlock {\n  HeroImage {\n    __typename\n  }\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ButtonText\n    ButtonUrl {\n      base\n      default\n    }\n  }\n}": types.HeroBlockFragmentDoc,
    "fragment ItemsInContentArea on _IComponent {\n  __typename\n  ... on HeroBlock {\n    ...HeroBlock\n  }\n  ... on TextBlock {\n    ...TextBlock\n  }\n}": types.ItemsInContentAreaFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  GraphType\n}": types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment TextBlock on TextBlock {\n  TextBlockOverline\n  TextBlockHeadingSize\n  TextBlockHeading\n  TextBlockDescription {\n    json\n    html\n  }\n  TextCenter\n  TextBlockWidth\n  TextClassName\n}": types.TextBlockFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogSectionExperienceData on BlogSectionExperience {\n  _metadata {\n    displayName\n  }\n}"): (typeof documents)["fragment BlogSectionExperienceData on BlogSectionExperience {\n  _metadata {\n    displayName\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getBlogSectionExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        url {\n          base\n          default\n        }\n        displayName\n        published\n      }\n      composition {\n        nodes {\n          ...CompositionNode\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getBlogSectionExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        url {\n          base\n          default\n        }\n        displayName\n        published\n      }\n      composition {\n        nodes {\n          ...CompositionNode\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetExperienceById($ids: [String!]!, $locale: [Locales!]) {\n  _Experience(ids: $ids, locale: $locale) {\n    items {\n      ... on _IExperience {\n        ...ExperienceData\n      }\n    }\n  }\n}"): (typeof documents)["query GetExperienceById($ids: [String!]!, $locale: [Locales!]) {\n  _Experience(ids: $ids, locale: $locale) {\n    items {\n      ... on _IExperience {\n        ...ExperienceData\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: _Experience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      ... on BlankExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNode\n          }\n        }\n      }\n      ... on BlogSectionExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNode\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: _Experience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      ... on BlankExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNode\n          }\n        }\n      }\n      ... on BlogSectionExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNode\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    base\n    default\n  }\n}"): (typeof documents)["fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  ButtonText\n  ButtonUrl {\n    base\n    default\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CompositionNode on CompositionStructureNode {\n  key\n  displaySettings {\n    key\n    value\n  }\n  nodes {\n    key\n    displaySettings {\n      key\n      value\n    }\n    ... on CompositionComponentNode {\n      component {\n        __typename\n        ...HeroBlock\n        ...TextBlock\n      }\n    }\n  }\n}"): (typeof documents)["fragment CompositionNode on CompositionStructureNode {\n  key\n  displaySettings {\n    key\n    value\n  }\n  nodes {\n    key\n    displaySettings {\n      key\n      value\n    }\n    ... on CompositionComponentNode {\n      component {\n        __typename\n        ...HeroBlock\n        ...TextBlock\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExperienceData on _IExperience {\n  ... on BlankExperience {\n    ...BlankExperienceData\n  }\n  ... on BlogSectionExperience {\n    ...BlogSectionExperienceData\n  }\n}"): (typeof documents)["fragment ExperienceData on _IExperience {\n  ... on BlankExperience {\n    ...BlankExperienceData\n  }\n  ... on BlogSectionExperience {\n    ...BlogSectionExperienceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroBlock on HeroBlock {\n  HeroImage {\n    __typename\n  }\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ButtonText\n    ButtonUrl {\n      base\n      default\n    }\n  }\n}"): (typeof documents)["fragment HeroBlock on HeroBlock {\n  HeroImage {\n    __typename\n  }\n  Eyebrow\n  Heading\n  SubHeading\n  Description {\n    json\n    html\n  }\n  HeroColor\n  HeroButton {\n    ButtonText\n    ButtonUrl {\n      base\n      default\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ItemsInContentArea on _IComponent {\n  __typename\n  ... on HeroBlock {\n    ...HeroBlock\n  }\n  ... on TextBlock {\n    ...TextBlock\n  }\n}"): (typeof documents)["fragment ItemsInContentArea on _IComponent {\n  __typename\n  ... on HeroBlock {\n    ...HeroBlock\n  }\n  ... on TextBlock {\n    ...TextBlock\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TextBlock on TextBlock {\n  TextBlockOverline\n  TextBlockHeadingSize\n  TextBlockHeading\n  TextBlockDescription {\n    json\n    html\n  }\n  TextCenter\n  TextBlockWidth\n  TextClassName\n}"): (typeof documents)["fragment TextBlock on TextBlock {\n  TextBlockOverline\n  TextBlockHeadingSize\n  TextBlockHeading\n  TextBlockDescription {\n    json\n    html\n  }\n  TextCenter\n  TextBlockWidth\n  TextClassName\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;