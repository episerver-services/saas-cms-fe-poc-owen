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
    "fragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent {\n  ...IContentData\n}": typeof types.IElementDataFragmentDoc,
    "fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionNodeData\n    nodes {\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}": typeof types.ExperienceDataFragmentDoc,
    "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}": typeof types.IContentInfoFragmentDoc,
    "fragment LinkData on ContentUrl {\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": typeof types.LinkDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": typeof types.BlankExperienceDataFragmentDoc,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  _metadata {\n    displayName\n  }\n}": typeof types.BlogSectionExperienceDataFragmentDoc,
    "query getBlogSectionExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        url {\n          base\n          default\n        }\n        displayName\n        published\n      }\n      composition {\n        nodes {\n          ...CompositionNodeData\n        }\n      }\n    }\n  }\n}": typeof types.GetBlogSectionExperienceByPathDocument,
    "query getDefaultArticleList($locale: [Locales!]) {\n  ArticleListElement(\n    where: {_metadata: {displayName: {startsWith: \"[DEFAULT]\"}, status: {eq: \"Published\"}}}\n    locale: $locale\n    orderBy: {_metadata: {published: DESC}}\n    limit: 1\n  ) {\n    items {\n      ...IContentData\n      ...ArticleListElementData\n    }\n  }\n}": typeof types.GetDefaultArticleListDocument,
    "query GetExperienceById($ids: [String!]!, $locale: [Locales!]) {\n  _Experience(ids: $ids, locale: $locale) {\n    items {\n      ... on _IExperience {\n        ...ExperienceData\n      }\n    }\n  }\n}": typeof types.GetExperienceByIdDocument,
    "query getExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: _Experience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      ... on BlankExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNodeData\n          }\n        }\n      }\n      ... on BlogSectionExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNodeData\n          }\n        }\n      }\n    }\n  }\n}": typeof types.GetExperienceByPathDocument,
    "query getSharedContinueReading($locale: [Locales]) {\n  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {\n    total\n    item {\n      ...IContentData\n      ...ContinueReadingComponentData\n    }\n  }\n}": typeof types.GetSharedContinueReadingDocument,
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}": typeof types.ArticleListElementDataFragmentDoc,
    "query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {\n  BlogPostPage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}\n  ) {\n    items {\n      ...IContentData\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      blogTitle: Heading\n      blogSubtitle: ArticleSubHeading\n      blogImage: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      blogBody: BlogPostBody {\n        json\n      }\n      blogAuthor: ArticleAuthor\n    }\n  }\n}": typeof types.GetArticleListElementItemsDocument,
    "fragment ButtonBlockData on ButtonBlock {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}": typeof types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}": typeof types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  cta_text: Text\n  cta_link: Link {\n    ...LinkData\n  }\n}": typeof types.CtaElementDataFragmentDoc,
    "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}": typeof types.CarouselBlockDataFragmentDoc,
    "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}": typeof types.ContentRecsElementDataFragmentDoc,
    "fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentData\n    ...BlockData\n  }\n}": typeof types.ContinueReadingComponentDataFragmentDoc,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": typeof types.HeadingElementDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  heroImage: HeroImage {\n    ...ReferenceData\n  }\n  eyebrow: Eyebrow\n  heroHeading: Heading\n  heroSubheading: SubHeading\n  heroDescription: Description {\n    json\n    html\n  }\n  heroColor: HeroColor\n  heroButton: HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}": typeof types.HeroBlockDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": typeof types.ImageElementDataFragmentDoc,
    "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}": typeof types.LayoutSettingsBlockDataFragmentDoc,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  _metadata {\n    displayName\n  }\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n    ...MenuNavigationBlockData\n    ...BlogPostPageMenuBlock\n  }\n}": typeof types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  _metadata {\n    displayName\n  }\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}": typeof types.MenuNavigationBlockDataFragmentDoc,
    "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}": typeof types.OdpEmbedBlockDataFragmentDoc,
    "fragment BlogPostPageMenuBlock on BlogPostPage {\n  meta: _metadata {\n    published\n    url {\n      ...LinkData\n    }\n  }\n  topics: Topic\n  heading: Heading\n  author: ArticleAuthor\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  sharing: SeoSettings {\n    description: MetaDescription\n    image: SharingImage {\n      ...ReferenceData\n    }\n  }\n}": typeof types.BlogPostPageMenuBlockFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": typeof types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": typeof types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n  }\n}": typeof types.ParagraphElementDataFragmentDoc,
    "fragment QuoteBlockData on QuoteBlock {\n  quote: QuoteText\n  color: QuoteColor\n  active: QuoteActive\n  name: QuoteProfileName\n  profilePicture: QuoteProfilePicture {\n    ...ReferenceData\n  }\n  location: QuoteProfileLocation\n}": typeof types.QuoteBlockDataFragmentDoc,
    "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}": typeof types.RichTextElementDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n  }\n}": typeof types.TestimonialElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  overline: TextBlockOverline\n  headingSize: TextBlockHeadingSize\n  heading: TextBlockHeading\n  description: TextBlockDescription {\n    json\n    html\n  }\n  center: TextCenter\n  width: TextBlockWidth\n  className: TextClassName\n}": typeof types.TextBlockDataFragmentDoc,
    "fragment VideoElementData on VideoElement {\n  title\n  video {\n    ...ReferenceData\n  }\n  placeholder {\n    ...ReferenceData\n  }\n}": typeof types.VideoElementDataFragmentDoc,
};
const documents: Documents = {
    "fragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent {\n  ...IContentData\n}": types.IElementDataFragmentDoc,
    "fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionNodeData\n    nodes {\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}": types.ExperienceDataFragmentDoc,
    "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}": types.IContentInfoFragmentDoc,
    "fragment LinkData on ContentUrl {\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}": types.LinkDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  BlankExperienceSeoSettings {\n    ...PageSeoSettingsPropertyData\n  }\n}": types.BlankExperienceDataFragmentDoc,
    "fragment BlogSectionExperienceData on BlogSectionExperience {\n  _metadata {\n    displayName\n  }\n}": types.BlogSectionExperienceDataFragmentDoc,
    "query getBlogSectionExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        url {\n          base\n          default\n        }\n        displayName\n        published\n      }\n      composition {\n        nodes {\n          ...CompositionNodeData\n        }\n      }\n    }\n  }\n}": types.GetBlogSectionExperienceByPathDocument,
    "query getDefaultArticleList($locale: [Locales!]) {\n  ArticleListElement(\n    where: {_metadata: {displayName: {startsWith: \"[DEFAULT]\"}, status: {eq: \"Published\"}}}\n    locale: $locale\n    orderBy: {_metadata: {published: DESC}}\n    limit: 1\n  ) {\n    items {\n      ...IContentData\n      ...ArticleListElementData\n    }\n  }\n}": types.GetDefaultArticleListDocument,
    "query GetExperienceById($ids: [String!]!, $locale: [Locales!]) {\n  _Experience(ids: $ids, locale: $locale) {\n    items {\n      ... on _IExperience {\n        ...ExperienceData\n      }\n    }\n  }\n}": types.GetExperienceByIdDocument,
    "query getExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: _Experience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      ... on BlankExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNodeData\n          }\n        }\n      }\n      ... on BlogSectionExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNodeData\n          }\n        }\n      }\n    }\n  }\n}": types.GetExperienceByPathDocument,
    "query getSharedContinueReading($locale: [Locales]) {\n  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {\n    total\n    item {\n      ...IContentData\n      ...ContinueReadingComponentData\n    }\n  }\n}": types.GetSharedContinueReadingDocument,
    "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}": types.ArticleListElementDataFragmentDoc,
    "query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {\n  BlogPostPage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}\n  ) {\n    items {\n      ...IContentData\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      blogTitle: Heading\n      blogSubtitle: ArticleSubHeading\n      blogImage: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      blogBody: BlogPostBody {\n        json\n      }\n      blogAuthor: ArticleAuthor\n    }\n  }\n}": types.GetArticleListElementItemsDocument,
    "fragment ButtonBlockData on ButtonBlock {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}": types.ButtonBlockDataFragmentDoc,
    "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}": types.ButtonBlockPropertyDataFragmentDoc,
    "fragment CTAElementData on CTAElement {\n  cta_text: Text\n  cta_link: Link {\n    ...LinkData\n  }\n}": types.CtaElementDataFragmentDoc,
    "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}": types.CarouselBlockDataFragmentDoc,
    "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}": types.ContentRecsElementDataFragmentDoc,
    "fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentData\n    ...BlockData\n  }\n}": types.ContinueReadingComponentDataFragmentDoc,
    "fragment HeadingElementData on HeadingElement {\n  headingText\n}": types.HeadingElementDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  heroImage: HeroImage {\n    ...ReferenceData\n  }\n  eyebrow: Eyebrow\n  heroHeading: Heading\n  heroSubheading: SubHeading\n  heroDescription: Description {\n    json\n    html\n  }\n  heroColor: HeroColor\n  heroButton: HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}": types.HeroBlockDataFragmentDoc,
    "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}": types.ImageElementDataFragmentDoc,
    "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}": types.LayoutSettingsBlockDataFragmentDoc,
    "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  _metadata {\n    displayName\n  }\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n    ...MenuNavigationBlockData\n    ...BlogPostPageMenuBlock\n  }\n}": types.MegaMenuGroupBlockDataFragmentDoc,
    "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  _metadata {\n    displayName\n  }\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}": types.MenuNavigationBlockDataFragmentDoc,
    "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}": types.OdpEmbedBlockDataFragmentDoc,
    "fragment BlogPostPageMenuBlock on BlogPostPage {\n  meta: _metadata {\n    published\n    url {\n      ...LinkData\n    }\n  }\n  topics: Topic\n  heading: Heading\n  author: ArticleAuthor\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  sharing: SeoSettings {\n    description: MetaDescription\n    image: SharingImage {\n      ...ReferenceData\n    }\n  }\n}": types.BlogPostPageMenuBlockFragmentDoc,
    "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsDataFragmentDoc,
    "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}": types.PageSeoSettingsPropertyDataFragmentDoc,
    "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n  }\n}": types.ParagraphElementDataFragmentDoc,
    "fragment QuoteBlockData on QuoteBlock {\n  quote: QuoteText\n  color: QuoteColor\n  active: QuoteActive\n  name: QuoteProfileName\n  profilePicture: QuoteProfilePicture {\n    ...ReferenceData\n  }\n  location: QuoteProfileLocation\n}": types.QuoteBlockDataFragmentDoc,
    "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}": types.RichTextElementDataFragmentDoc,
    "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n  }\n}": types.TestimonialElementDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  overline: TextBlockOverline\n  headingSize: TextBlockHeadingSize\n  heading: TextBlockHeading\n  description: TextBlockDescription {\n    json\n    html\n  }\n  center: TextCenter\n  width: TextBlockWidth\n  className: TextClassName\n}": types.TextBlockDataFragmentDoc,
    "fragment VideoElementData on VideoElement {\n  title\n  video {\n    ...ReferenceData\n  }\n  placeholder {\n    ...ReferenceData\n  }\n}": types.VideoElementDataFragmentDoc,
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
export function gql(source: "fragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent {\n  ...IContentData\n}"): (typeof documents)["fragment IElementData on _IComponent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment ElementData on _IComponent {\n  ...IElementData\n}\n\nfragment BlockData on _IComponent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionNodeData\n    nodes {\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}"): (typeof documents)["fragment ExperienceData on _IExperience {\n  composition {\n    ...CompositionNodeData\n    nodes {\n      ...CompositionNodeData\n      ... on ICompositionStructureNode {\n        nodes {\n          ...CompositionNodeData\n          ... on ICompositionStructureNode {\n            nodes {\n              ...CompositionNodeData\n              ... on ICompositionStructureNode {\n                nodes {\n                  ...CompositionNodeData\n                  ...CompositionComponentNodeData\n                }\n              }\n            }\n          }\n        }\n      }\n      ...CompositionComponentNodeData\n    }\n  }\n}\n\nfragment CompositionNodeData on ICompositionNode {\n  name: displayName\n  layoutType: nodeType\n  type\n  key\n  template: displayTemplateKey\n  settings: displaySettings {\n    key\n    value\n  }\n}\n\nfragment CompositionComponentNodeData on ICompositionComponentNode {\n  component {\n    ...BlockData\n    ...ElementData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}"): (typeof documents)["fragment IContentInfo on IContentMetadata {\n  key\n  locale\n  types\n  displayName\n  version\n  url {\n    ...LinkData\n  }\n}\n\nfragment IContentData on _IContent {\n  _metadata {\n    ...IContentInfo\n  }\n  _type: __typename\n}\n\nfragment IContentListItem on _IContent {\n  ...IContentData\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LinkData on ContentUrl {\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment LinkData on ContentUrl {\n  base\n  default\n}\n\nfragment ReferenceData on ContentReference {\n  key\n  url {\n    ...LinkData\n  }\n}\n\nfragment LinkItemData on Link {\n  title\n  text\n  target\n  url {\n    ...LinkData\n  }\n}"];
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
export function gql(source: "query getBlogSectionExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        url {\n          base\n          default\n        }\n        displayName\n        published\n      }\n      composition {\n        nodes {\n          ...CompositionNodeData\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getBlogSectionExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: BlogSectionExperience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        url {\n          base\n          default\n        }\n        displayName\n        published\n      }\n      composition {\n        nodes {\n          ...CompositionNodeData\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getDefaultArticleList($locale: [Locales!]) {\n  ArticleListElement(\n    where: {_metadata: {displayName: {startsWith: \"[DEFAULT]\"}, status: {eq: \"Published\"}}}\n    locale: $locale\n    orderBy: {_metadata: {published: DESC}}\n    limit: 1\n  ) {\n    items {\n      ...IContentData\n      ...ArticleListElementData\n    }\n  }\n}"): (typeof documents)["query getDefaultArticleList($locale: [Locales!]) {\n  ArticleListElement(\n    where: {_metadata: {displayName: {startsWith: \"[DEFAULT]\"}, status: {eq: \"Published\"}}}\n    locale: $locale\n    orderBy: {_metadata: {published: DESC}}\n    limit: 1\n  ) {\n    items {\n      ...IContentData\n      ...ArticleListElementData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetExperienceById($ids: [String!]!, $locale: [Locales!]) {\n  _Experience(ids: $ids, locale: $locale) {\n    items {\n      ... on _IExperience {\n        ...ExperienceData\n      }\n    }\n  }\n}"): (typeof documents)["query GetExperienceById($ids: [String!]!, $locale: [Locales!]) {\n  _Experience(ids: $ids, locale: $locale) {\n    items {\n      ... on _IExperience {\n        ...ExperienceData\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: _Experience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      ... on BlankExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNodeData\n          }\n        }\n      }\n      ... on BlogSectionExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNodeData\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query getExperienceByPath($key: String!, $version: String, $locale: [Locales!]) {\n  experience: _Experience(\n    where: {_metadata: {key: {eq: $key}, version: {eq: $version}}}\n    locale: $locale\n  ) {\n    items {\n      _metadata {\n        key\n        version\n        displayName\n        published\n        url {\n          base\n          default\n        }\n      }\n      ... on BlankExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNodeData\n          }\n        }\n      }\n      ... on BlogSectionExperience {\n        _metadata {\n          displayName\n        }\n        composition {\n          nodes {\n            ...CompositionNodeData\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getSharedContinueReading($locale: [Locales]) {\n  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {\n    total\n    item {\n      ...IContentData\n      ...ContinueReadingComponentData\n    }\n  }\n}"): (typeof documents)["query getSharedContinueReading($locale: [Locales]) {\n  ContinueReadingComponent(where: {shared: {eq: true}}, locale: $locale) {\n    total\n    item {\n      ...IContentData\n      ...ContinueReadingComponentData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}"): (typeof documents)["fragment ArticleListElementData on ArticleListElement {\n  articleListCount\n  topics\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {\n  BlogPostPage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}\n  ) {\n    items {\n      ...IContentData\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      blogTitle: Heading\n      blogSubtitle: ArticleSubHeading\n      blogImage: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      blogBody: BlogPostBody {\n        json\n      }\n      blogAuthor: ArticleAuthor\n    }\n  }\n}"): (typeof documents)["query getArticleListElementItems($count: Int!, $locale: [Locales], $topics: [String], $excludeKeys: [String]) {\n  BlogPostPage(\n    orderBy: {_metadata: {published: DESC}}\n    limit: $count\n    locale: $locale\n    where: {_metadata: {status: {eq: \"Published\"}, key: {notIn: $excludeKeys}}, Topic: {in: $topics}}\n  ) {\n    items {\n      ...IContentData\n      articleMeta: _metadata {\n        key\n        published\n        lastModified\n      }\n      blogTitle: Heading\n      blogSubtitle: ArticleSubHeading\n      blogImage: BlogPostPromoImage {\n        ...ReferenceData\n      }\n      blogBody: BlogPostBody {\n        json\n      }\n      blogAuthor: ArticleAuthor\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockData on ButtonBlock {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}"): (typeof documents)["fragment ButtonBlockData on ButtonBlock {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}"): (typeof documents)["fragment ButtonBlockPropertyData on ButtonBlockProperty {\n  children: ButtonText\n  url: ButtonUrl {\n    ...LinkData\n  }\n  className: ButtonClass\n  buttonType: ButtonType\n  buttonVariant: ButtonVariant\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CTAElementData on CTAElement {\n  cta_text: Text\n  cta_link: Link {\n    ...LinkData\n  }\n}"): (typeof documents)["fragment CTAElementData on CTAElement {\n  cta_text: Text\n  cta_link: Link {\n    ...LinkData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}"): (typeof documents)["fragment CarouselBlockData on CarouselBlock {\n  CarouselItemsContentArea {\n    ...IContentListItem\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}"): (typeof documents)["fragment ContentRecsElementData on ContentRecsElement {\n  ElementDeliveryApiKey\n  ElementRecommendationCount\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentData\n    ...BlockData\n  }\n}"): (typeof documents)["fragment ContinueReadingComponentData on ContinueReadingComponent {\n  topline\n  shared\n  heading\n  content {\n    ...IContentData\n    ...BlockData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeadingElementData on HeadingElement {\n  headingText\n}"): (typeof documents)["fragment HeadingElementData on HeadingElement {\n  headingText\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroBlockData on HeroBlock {\n  heroImage: HeroImage {\n    ...ReferenceData\n  }\n  eyebrow: Eyebrow\n  heroHeading: Heading\n  heroSubheading: SubHeading\n  heroDescription: Description {\n    json\n    html\n  }\n  heroColor: HeroColor\n  heroButton: HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}"): (typeof documents)["fragment HeroBlockData on HeroBlock {\n  heroImage: HeroImage {\n    ...ReferenceData\n  }\n  eyebrow: Eyebrow\n  heroHeading: Heading\n  heroSubheading: SubHeading\n  heroDescription: Description {\n    json\n    html\n  }\n  heroColor: HeroColor\n  heroButton: HeroButton {\n    ...ButtonBlockPropertyData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment ImageElementData on ImageElement {\n  altText\n  imageLink {\n    ...ReferenceData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}"): (typeof documents)["fragment LayoutSettingsBlockData on LayoutSettingsBlock {\n  mainMenu {\n    ...IContentListItem\n  }\n  contactInfoHeading\n  serviceButtons {\n    ...IContentListItem\n  }\n  contactInfo {\n    json\n    html\n  }\n  footerMenus {\n    ...IContentListItem\n  }\n  copyright\n  legalLinks {\n    ...LinkItemData\n  }\n  appIdentifiers\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  _metadata {\n    displayName\n  }\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n    ...MenuNavigationBlockData\n    ...BlogPostPageMenuBlock\n  }\n}"): (typeof documents)["fragment MegaMenuGroupBlockData on MegaMenuGroupBlock {\n  _metadata {\n    displayName\n  }\n  MenuMenuHeading\n  MegaMenuUrl {\n    ...LinkData\n  }\n  MegaMenuContentArea {\n    ...IContentData\n    ...MenuNavigationBlockData\n    ...BlogPostPageMenuBlock\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MenuNavigationBlockData on MenuNavigationBlock {\n  _metadata {\n    displayName\n  }\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"): (typeof documents)["fragment MenuNavigationBlockData on MenuNavigationBlock {\n  _metadata {\n    displayName\n  }\n  MenuNavigationHeading\n  NavigationLinks {\n    ...LinkItemData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}"): (typeof documents)["fragment OdpEmbedBlockData on OdpEmbedBlock {\n  ContentId\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlogPostPageMenuBlock on BlogPostPage {\n  meta: _metadata {\n    published\n    url {\n      ...LinkData\n    }\n  }\n  topics: Topic\n  heading: Heading\n  author: ArticleAuthor\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  sharing: SeoSettings {\n    description: MetaDescription\n    image: SharingImage {\n      ...ReferenceData\n    }\n  }\n}"): (typeof documents)["fragment BlogPostPageMenuBlock on BlogPostPage {\n  meta: _metadata {\n    published\n    url {\n      ...LinkData\n    }\n  }\n  topics: Topic\n  heading: Heading\n  author: ArticleAuthor\n  image: BlogPostPromoImage {\n    ...ReferenceData\n  }\n  sharing: SeoSettings {\n    description: MetaDescription\n    image: SharingImage {\n      ...ReferenceData\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsData on PageSeoSettings {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"): (typeof documents)["fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {\n  MetaTitle\n  MetaDescription\n  MetaKeywords\n  SharingImage {\n    ...ReferenceData\n  }\n  GraphType\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n  }\n}"): (typeof documents)["fragment ParagraphElementData on ParagraphElement {\n  text {\n    json\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment QuoteBlockData on QuoteBlock {\n  quote: QuoteText\n  color: QuoteColor\n  active: QuoteActive\n  name: QuoteProfileName\n  profilePicture: QuoteProfilePicture {\n    ...ReferenceData\n  }\n  location: QuoteProfileLocation\n}"): (typeof documents)["fragment QuoteBlockData on QuoteBlock {\n  quote: QuoteText\n  color: QuoteColor\n  active: QuoteActive\n  name: QuoteProfileName\n  profilePicture: QuoteProfilePicture {\n    ...ReferenceData\n  }\n  location: QuoteProfileLocation\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}"): (typeof documents)["fragment RichTextElementData on RichTextElement {\n  text {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n  }\n}"): (typeof documents)["fragment TestimonialElementData on TestimonialElement {\n  customerName\n  customerLocation\n  customerImage {\n    ...ReferenceData\n  }\n  referenceTitle\n  referenceText {\n    json\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TextBlockData on TextBlock {\n  overline: TextBlockOverline\n  headingSize: TextBlockHeadingSize\n  heading: TextBlockHeading\n  description: TextBlockDescription {\n    json\n    html\n  }\n  center: TextCenter\n  width: TextBlockWidth\n  className: TextClassName\n}"): (typeof documents)["fragment TextBlockData on TextBlock {\n  overline: TextBlockOverline\n  headingSize: TextBlockHeadingSize\n  heading: TextBlockHeading\n  description: TextBlockDescription {\n    json\n    html\n  }\n  center: TextCenter\n  width: TextBlockWidth\n  className: TextClassName\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoElementData on VideoElement {\n  title\n  video {\n    ...ReferenceData\n  }\n  placeholder {\n    ...ReferenceData\n  }\n}"): (typeof documents)["fragment VideoElementData on VideoElement {\n  title\n  video {\n    ...ReferenceData\n  }\n  placeholder {\n    ...ReferenceData\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;