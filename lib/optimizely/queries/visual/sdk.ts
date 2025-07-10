import type { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: string; output: string; }
  JSON: { input: any; output: any; }
};

export type ArticleListElement = IData & _IComponent & _IContent & {
  __typename?: 'ArticleListElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  articleListCount: Maybe<Scalars['Int']['output']>;
  topics: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ArticleListElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ArticleListElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ArticleListElementAutocomplete = {
  __typename?: 'ArticleListElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ArticleListElementFacet = {
  __typename?: 'ArticleListElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ArticleListElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ArticleListElementOutput = {
  __typename?: 'ArticleListElementOutput';
  autocomplete: Maybe<ArticleListElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ArticleListElementFacet>;
  item: Maybe<ArticleListElement>;
  items: Maybe<Array<Maybe<ArticleListElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleListElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  BlankExperienceSeoSettings: Maybe<PageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  BlankExperienceSeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  BlankExperienceSeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  BlankExperienceSeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete: Maybe<BlankExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankExperienceFacet>;
  item: Maybe<BlankExperience>;
  items: Maybe<Array<Maybe<BlankExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  BlankExperienceSeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  _and: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete: Maybe<BlankSectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankSectionFacet>;
  item: Maybe<BlankSection>;
  items: Maybe<Array<Maybe<BlankSection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlogPostPage = IData & _IContent & _IPage & {
  __typename?: 'BlogPostPage';
  ArticleAuthor: Maybe<Scalars['String']['output']>;
  ArticleSubHeading: Maybe<Scalars['String']['output']>;
  BlogPostBody: Maybe<SearchableRichText>;
  BlogPostPromoImage: Maybe<ContentReference>;
  Heading: Maybe<Scalars['String']['output']>;
  SeoSettings: Maybe<PageSeoSettingsProperty>;
  Topic: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  continueReading: Maybe<Array<Maybe<_IContent>>>;
};


export type BlogPostPageArticleAuthorArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPageArticleSubHeadingArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPageHeadingArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPageTopicArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogPostPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlogPostPageAutocomplete = {
  __typename?: 'BlogPostPageAutocomplete';
  BlogPostPromoImage: Maybe<ContentReferenceAutocomplete>;
  SeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  continueReading: Maybe<_IContentAutocomplete>;
};

export type BlogPostPageFacet = {
  __typename?: 'BlogPostPageFacet';
  ArticleAuthor: Maybe<Array<Maybe<StringFacet>>>;
  ArticleSubHeading: Maybe<Array<Maybe<StringFacet>>>;
  BlogPostBody: Maybe<SearchableRichTextFacet>;
  BlogPostPromoImage: Maybe<ContentReferenceFacet>;
  Heading: Maybe<Array<Maybe<StringFacet>>>;
  SeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  Topic: Maybe<Array<Maybe<StringFacet>>>;
  _metadata: Maybe<IContentMetadataFacet>;
  continueReading: Maybe<_IContentFacet>;
};


export type BlogPostPageFacetArticleAuthorArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetArticleSubHeadingArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetHeadingArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type BlogPostPageFacetTopicArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlogPostPageOrderByInput = {
  ArticleAuthor: InputMaybe<OrderBy>;
  ArticleSubHeading: InputMaybe<OrderBy>;
  BlogPostBody: InputMaybe<SearchableRichTextOrderByInput>;
  BlogPostPromoImage: InputMaybe<ContentReferenceOrderByInput>;
  Heading: InputMaybe<OrderBy>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  Topic: InputMaybe<OrderBy>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  continueReading: InputMaybe<_IContentOrderByInput>;
};

export type BlogPostPageOutput = {
  __typename?: 'BlogPostPageOutput';
  autocomplete: Maybe<BlogPostPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlogPostPageFacet>;
  item: Maybe<BlogPostPage>;
  items: Maybe<Array<Maybe<BlogPostPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlogPostPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogPostPageWhereInput = {
  ArticleAuthor: InputMaybe<SearchableStringFilterInput>;
  ArticleSubHeading: InputMaybe<SearchableStringFilterInput>;
  BlogPostBody: InputMaybe<SearchableRichTextWhereInput>;
  BlogPostPromoImage: InputMaybe<ContentReferenceWhereInput>;
  Heading: InputMaybe<SearchableStringFilterInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  Topic: InputMaybe<SearchableStringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlogPostPageWhereInput>>>;
  continueReading: InputMaybe<_IContentWhereInput>;
};

export type BlogSectionExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlogSectionExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
  seo_data: Maybe<PageSeoSettingsProperty>;
};


export type BlogSectionExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlogSectionExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlogSectionExperienceAutocomplete = {
  __typename?: 'BlogSectionExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
  seo_data: Maybe<PageSeoSettingsPropertyAutocomplete>;
};

export type BlogSectionExperienceFacet = {
  __typename?: 'BlogSectionExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
  seo_data: Maybe<PageSeoSettingsPropertyFacet>;
};

export type BlogSectionExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
  seo_data: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
};

export type BlogSectionExperienceOutput = {
  __typename?: 'BlogSectionExperienceOutput';
  autocomplete: Maybe<BlogSectionExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlogSectionExperienceFacet>;
  item: Maybe<BlogSectionExperience>;
  items: Maybe<Array<Maybe<BlogSectionExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlogSectionExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogSectionExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlogSectionExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlogSectionExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlogSectionExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
  seo_data: InputMaybe<PageSeoSettingsPropertyWhereInput>;
};

export type BoolFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Boolean']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlock = IData & _IComponent & _IContent & {
  __typename?: 'ButtonBlock';
  ButtonClass: Maybe<Scalars['String']['output']>;
  ButtonText: Maybe<Scalars['String']['output']>;
  ButtonType: Maybe<Scalars['String']['output']>;
  ButtonUrl: Maybe<ContentUrl>;
  ButtonVariant: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ButtonBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  ButtonUrl: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  ButtonUrl: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ButtonBlockOrderByInput = {
  ButtonUrl: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete: Maybe<ButtonBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ButtonBlockFacet>;
  item: Maybe<ButtonBlock>;
  items: Maybe<Array<Maybe<ButtonBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockProperty = {
  __typename?: 'ButtonBlockProperty';
  ButtonClass: Maybe<Scalars['String']['output']>;
  ButtonText: Maybe<Scalars['String']['output']>;
  ButtonType: Maybe<Scalars['String']['output']>;
  ButtonUrl: Maybe<ContentUrl>;
  ButtonVariant: Maybe<Scalars['String']['output']>;
};

export type ButtonBlockPropertyAutocomplete = {
  __typename?: 'ButtonBlockPropertyAutocomplete';
  ButtonUrl: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockPropertyFacet = {
  __typename?: 'ButtonBlockPropertyFacet';
  ButtonUrl: Maybe<ContentUrlFacet>;
};

export type ButtonBlockPropertyOrderByInput = {
  ButtonUrl: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockPropertyWhereInput = {
  ButtonUrl: InputMaybe<ContentUrlWhereInput>;
};

export type ButtonBlockWhereInput = {
  ButtonUrl: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
};

export type CtaElement = IData & _IComponent & _IContent & {
  __typename?: 'CTAElement';
  Link: Maybe<ContentUrl>;
  Text: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type CtaElementTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CtaElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CtaElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CtaElementAutocomplete = {
  __typename?: 'CTAElementAutocomplete';
  Link: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CtaElementFacet = {
  __typename?: 'CTAElementFacet';
  Link: Maybe<ContentUrlFacet>;
  Text: Maybe<Array<Maybe<StringFacet>>>;
  _metadata: Maybe<IContentMetadataFacet>;
};


export type CtaElementFacetTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CtaElementOrderByInput = {
  Link: InputMaybe<ContentUrlOrderByInput>;
  Text: InputMaybe<OrderBy>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CtaElementOutput = {
  __typename?: 'CTAElementOutput';
  autocomplete: Maybe<CtaElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CtaElementFacet>;
  item: Maybe<CtaElement>;
  items: Maybe<Array<Maybe<CtaElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CtaElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CtaElementWhereInput = {
  Link: InputMaybe<ContentUrlWhereInput>;
  Text: InputMaybe<SearchableStringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
};

export type CarouselBlock = IData & _IComponent & _IContent & {
  __typename?: 'CarouselBlock';
  CarouselItemsContentArea: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type CarouselBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CarouselBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CarouselBlockAutocomplete = {
  __typename?: 'CarouselBlockAutocomplete';
  CarouselItemsContentArea: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CarouselBlockFacet = {
  __typename?: 'CarouselBlockFacet';
  CarouselItemsContentArea: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CarouselBlockOrderByInput = {
  CarouselItemsContentArea: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CarouselBlockOutput = {
  __typename?: 'CarouselBlockOutput';
  autocomplete: Maybe<CarouselBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CarouselBlockFacet>;
  item: Maybe<CarouselBlock>;
  items: Maybe<Array<Maybe<CarouselBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CarouselBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CarouselBlockWhereInput = {
  CarouselItemsContentArea: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CarouselBlockWhereInput>>>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  value: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key: InputMaybe<OrderBy>;
  value: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key: InputMaybe<StringFilterInput>;
  value: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes: Maybe<ICompositionNodeAutocomplete>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  nodes: Maybe<ICompositionNodeFacet>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  nodes: InputMaybe<ICompositionNodeOrderByInput>;
  type: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  nodes: InputMaybe<ICompositionNodeWhereInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentRecsElement = IData & _IComponent & _IContent & {
  __typename?: 'ContentRecsElement';
  ElementDeliveryApiKey: Maybe<Scalars['String']['output']>;
  ElementRecommendationCount: Maybe<Scalars['Int']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ContentRecsElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContentRecsElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContentRecsElementAutocomplete = {
  __typename?: 'ContentRecsElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContentRecsElementFacet = {
  __typename?: 'ContentRecsElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContentRecsElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContentRecsElementOutput = {
  __typename?: 'ContentRecsElementOutput';
  autocomplete: Maybe<ContentRecsElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContentRecsElementFacet>;
  item: Maybe<ContentRecsElement>;
  items: Maybe<Array<Maybe<ContentRecsElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContentRecsElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentRecsElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContentRecsElementWhereInput>>>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  key: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['String']['output']>;
  graph: Maybe<Scalars['String']['output']>;
  hierarchical: Maybe<Scalars['String']['output']>;
  internal: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base: Maybe<Array<Maybe<StringFacet>>>;
  default: Maybe<Array<Maybe<StringFacet>>>;
  graph: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical: Maybe<Array<Maybe<StringFacet>>>;
  internal: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base: InputMaybe<OrderBy>;
  default: InputMaybe<OrderBy>;
  graph: InputMaybe<OrderBy>;
  hierarchical: InputMaybe<OrderBy>;
  internal: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base: InputMaybe<StringFilterInput>;
  default: InputMaybe<StringFilterInput>;
  graph: InputMaybe<StringFilterInput>;
  hierarchical: InputMaybe<StringFilterInput>;
  internal: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ContinueReadingComponent = IData & _IComponent & _IContent & {
  __typename?: 'ContinueReadingComponent';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  content: Maybe<Array<Maybe<_IContent>>>;
  heading: Maybe<Scalars['String']['output']>;
  shared: Maybe<Scalars['Boolean']['output']>;
  topline: Maybe<Scalars['String']['output']>;
};


export type ContinueReadingComponent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContinueReadingComponent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContinueReadingComponentAutocomplete = {
  __typename?: 'ContinueReadingComponentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  content: Maybe<_IContentAutocomplete>;
};

export type ContinueReadingComponentFacet = {
  __typename?: 'ContinueReadingComponentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  content: Maybe<_IContentFacet>;
  shared: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContinueReadingComponentFacetSharedArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContinueReadingComponentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  content: InputMaybe<_IContentOrderByInput>;
  shared: InputMaybe<OrderBy>;
};

export type ContinueReadingComponentOutput = {
  __typename?: 'ContinueReadingComponentOutput';
  autocomplete: Maybe<ContinueReadingComponentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContinueReadingComponentFacet>;
  item: Maybe<ContinueReadingComponent>;
  items: Maybe<Array<Maybe<ContinueReadingComponent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContinueReadingComponentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContinueReadingComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContinueReadingComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContinueReadingComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContinueReadingComponentWhereInput>>>;
  content: InputMaybe<_IContentWhereInput>;
  shared: InputMaybe<BoolFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Data_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor: Maybe<Scalars['String']['output']>;
  item: Maybe<IData>;
  items: Maybe<Array<Maybe<IData>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type DateFacetUnit =
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  | 'DAY'
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  | 'HOUR'
  /** Defined as 1000 milliseconds each. */
  | 'MINUTE';

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin: InputMaybe<Scalars['Date']['input']>;
  rate: InputMaybe<Scalars['Float']['input']>;
  scale: InputMaybe<Scalars['Int']['input']>;
};

export type Document = IData & _IComponent & _IContent & {
  __typename?: 'Document';
  Description: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Document_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Document_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DocumentAutocomplete = {
  __typename?: 'DocumentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type DocumentFacet = {
  __typename?: 'DocumentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type DocumentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DocumentOutput = {
  __typename?: 'DocumentOutput';
  autocomplete: Maybe<DocumentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<DocumentFacet>;
  item: Maybe<Document>;
  items: Maybe<Array<Maybe<Document>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DocumentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DocumentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DocumentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DocumentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DocumentWhereInput>>>;
};

export type FactorModifier =
  /** Add 1 to the field value and take the natural logarithm */
  | 'LOG'
  /** Do not apply any multiplier to the field value */
  | 'NONE'
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  | 'RECIPROCAL'
  /** Take the square root of the field value */
  | 'SQRT'
  /** Square the field value (multiply it by itself) */
  | 'SQUARE';

export type GenericMedia = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete: Maybe<GenericMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMediaFacet>;
  item: Maybe<GenericMedia>;
  items: Maybe<Array<Maybe<GenericMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type HeadingElement = IData & _IComponent & _IContent & {
  __typename?: 'HeadingElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  headingText: Maybe<Scalars['String']['output']>;
};


export type HeadingElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeadingElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};


export type HeadingElementHeadingTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type HeadingElementAutocomplete = {
  __typename?: 'HeadingElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingElementFacet = {
  __typename?: 'HeadingElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  headingText: Maybe<Array<Maybe<StringFacet>>>;
};


export type HeadingElementFacetHeadingTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type HeadingElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  headingText: InputMaybe<OrderBy>;
};

export type HeadingElementOutput = {
  __typename?: 'HeadingElementOutput';
  autocomplete: Maybe<HeadingElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeadingElementFacet>;
  item: Maybe<HeadingElement>;
  items: Maybe<Array<Maybe<HeadingElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeadingElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  headingText: InputMaybe<SearchableStringFilterInput>;
};

export type HeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeroBlock';
  Description: Maybe<RichText>;
  Eyebrow: Maybe<Scalars['String']['output']>;
  Heading: Maybe<Scalars['String']['output']>;
  HeroButton: Maybe<ButtonBlockProperty>;
  HeroColor: Maybe<Scalars['String']['output']>;
  HeroImage: Maybe<ContentReference>;
  Icon: Maybe<Scalars['String']['output']>;
  SubHeading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  Description: Maybe<RichTextAutocomplete>;
  HeroButton: Maybe<ButtonBlockPropertyAutocomplete>;
  HeroImage: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  Description: Maybe<RichTextFacet>;
  HeroButton: Maybe<ButtonBlockPropertyFacet>;
  HeroImage: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  Description: InputMaybe<RichTextOrderByInput>;
  HeroButton: InputMaybe<ButtonBlockPropertyOrderByInput>;
  HeroImage: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete: Maybe<HeroBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeroBlockFacet>;
  item: Maybe<HeroBlock>;
  items: Maybe<Array<Maybe<HeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  Description: InputMaybe<RichTextWhereInput>;
  HeroButton: InputMaybe<ButtonBlockPropertyWhereInput>;
  HeroImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  endToken: InputMaybe<Scalars['String']['input']>;
  startToken: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
  version: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset: Maybe<Array<Maybe<StringFacet>>>;
  created: Maybe<Array<Maybe<DateFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  locale: Maybe<Array<Maybe<StringFacet>>>;
  published: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder: Maybe<Array<Maybe<NumberFacet>>>;
  status: Maybe<Array<Maybe<StringFacet>>>;
  types: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
  version: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetSortOrderArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit: InputMaybe<Scalars['Int']['input']>;
  orderBy: InputMaybe<OrderBy>;
  orderType: InputMaybe<OrderByFacetType>;
  ranges: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset: InputMaybe<OrderBy>;
  created: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  fallbackForLocale: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  locale: InputMaybe<OrderBy>;
  published: InputMaybe<OrderBy>;
  sortOrder: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  types: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
  version: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset: InputMaybe<StringFilterInput>;
  created: InputMaybe<DateFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  published: InputMaybe<DateFilterInput>;
  sortOrder: InputMaybe<IntFilterInput>;
  status: InputMaybe<StringFilterInput>;
  types: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
  version: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type IData_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ImageElement = IData & _IComponent & _IContent & {
  __typename?: 'ImageElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  imageLink: Maybe<ContentReference>;
};


export type ImageElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageElementAutocomplete = {
  __typename?: 'ImageElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  imageLink: Maybe<ContentReferenceAutocomplete>;
};

export type ImageElementFacet = {
  __typename?: 'ImageElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  imageLink: Maybe<ContentReferenceFacet>;
};

export type ImageElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  imageLink: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageElementOutput = {
  __typename?: 'ImageElementOutput';
  autocomplete: Maybe<ImageElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageElementFacet>;
  item: Maybe<ImageElement>;
  items: Maybe<Array<Maybe<ImageElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  imageLink: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  AltText: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete: Maybe<ImageMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageMediaFacet>;
  item: Maybe<ImageMedia>;
  items: Maybe<Array<Maybe<ImageMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type LandingPage = IData & _IContent & _IPage & {
  __typename?: 'LandingPage';
  MainContentArea: Maybe<Array<Maybe<_IContent>>>;
  SeoSettings: Maybe<PageSeoSettingsProperty>;
  TopContentArea: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type LandingPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LandingPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  MainContentArea: Maybe<_IContentAutocomplete>;
  SeoSettings: Maybe<PageSeoSettingsPropertyAutocomplete>;
  TopContentArea: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  MainContentArea: Maybe<_IContentFacet>;
  SeoSettings: Maybe<PageSeoSettingsPropertyFacet>;
  TopContentArea: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LandingPageOrderByInput = {
  MainContentArea: InputMaybe<_IContentOrderByInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyOrderByInput>;
  TopContentArea: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete: Maybe<LandingPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LandingPageFacet>;
  item: Maybe<LandingPage>;
  items: Maybe<Array<Maybe<LandingPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  MainContentArea: InputMaybe<_IContentWhereInput>;
  SeoSettings: InputMaybe<PageSeoSettingsPropertyWhereInput>;
  TopContentArea: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LayoutSettingsBlock = IData & _IComponent & _IContent & {
  __typename?: 'LayoutSettingsBlock';
  PartnerTokens: Maybe<PartnerTokensProperty>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  appIdentifiers: Maybe<Scalars['String']['output']>;
  contactInfo: Maybe<RichText>;
  contactInfoHeading: Maybe<Scalars['String']['output']>;
  copyright: Maybe<Scalars['String']['output']>;
  footerMenus: Maybe<Array<Maybe<_IContent>>>;
  legalLinks: Maybe<Array<Maybe<Link>>>;
  mainMenu: Maybe<Array<Maybe<_IContent>>>;
  serviceButtons: Maybe<Array<Maybe<_IContent>>>;
};


export type LayoutSettingsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LayoutSettingsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LayoutSettingsBlockAutocomplete = {
  __typename?: 'LayoutSettingsBlockAutocomplete';
  PartnerTokens: Maybe<PartnerTokensPropertyAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  appIdentifiers: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  contactInfo: Maybe<RichTextAutocomplete>;
  footerMenus: Maybe<_IContentAutocomplete>;
  legalLinks: Maybe<LinkAutocomplete>;
  mainMenu: Maybe<_IContentAutocomplete>;
  serviceButtons: Maybe<_IContentAutocomplete>;
};


export type LayoutSettingsBlockAutocompleteAppIdentifiersArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LayoutSettingsBlockFacet = {
  __typename?: 'LayoutSettingsBlockFacet';
  PartnerTokens: Maybe<PartnerTokensPropertyFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  appIdentifiers: Maybe<Array<Maybe<StringFacet>>>;
  contactInfo: Maybe<RichTextFacet>;
  footerMenus: Maybe<_IContentFacet>;
  legalLinks: Maybe<LinkFacet>;
  mainMenu: Maybe<_IContentFacet>;
  serviceButtons: Maybe<_IContentFacet>;
};


export type LayoutSettingsBlockFacetAppIdentifiersArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LayoutSettingsBlockOrderByInput = {
  PartnerTokens: InputMaybe<PartnerTokensPropertyOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  appIdentifiers: InputMaybe<OrderBy>;
  contactInfo: InputMaybe<RichTextOrderByInput>;
  footerMenus: InputMaybe<_IContentOrderByInput>;
  legalLinks: InputMaybe<LinkOrderByInput>;
  mainMenu: InputMaybe<_IContentOrderByInput>;
  serviceButtons: InputMaybe<_IContentOrderByInput>;
};

export type LayoutSettingsBlockOutput = {
  __typename?: 'LayoutSettingsBlockOutput';
  autocomplete: Maybe<LayoutSettingsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LayoutSettingsBlockFacet>;
  item: Maybe<LayoutSettingsBlock>;
  items: Maybe<Array<Maybe<LayoutSettingsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LayoutSettingsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LayoutSettingsBlockWhereInput = {
  PartnerTokens: InputMaybe<PartnerTokensPropertyWhereInput>;
  _and: InputMaybe<Array<InputMaybe<LayoutSettingsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LayoutSettingsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LayoutSettingsBlockWhereInput>>>;
  appIdentifiers: InputMaybe<StringFilterInput>;
  contactInfo: InputMaybe<RichTextWhereInput>;
  footerMenus: InputMaybe<_IContentWhereInput>;
  legalLinks: InputMaybe<LinkWhereInput>;
  mainMenu: InputMaybe<_IContentWhereInput>;
  serviceButtons: InputMaybe<_IContentWhereInput>;
};

export type Link = {
  __typename?: 'Link';
  target: Maybe<Scalars['String']['output']>;
  text: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};


export type LinkTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompleteTargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from: InputMaybe<Scalars['String']['input']>;
  to: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target: Maybe<Array<Maybe<StringFacet>>>;
  text: Maybe<Array<Maybe<StringFacet>>>;
  title: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type LinkFacetTargetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target: InputMaybe<OrderBy>;
  text: InputMaybe<OrderBy>;
  title: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export type LinkTypes =
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  | 'ASSETS'
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  | 'DEFAULT'
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  | 'ITEMS'
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  | 'PATH';

export type LinkWhereInput = {
  target: InputMaybe<StringFilterInput>;
  text: InputMaybe<SearchableStringFilterInput>;
  title: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export type Locales =
  | 'ALL'
  | 'NEUTRAL'
  | 'en'
  | 'fr_CA';

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type MegaMenuGroupBlock = IData & _IComponent & _IContent & {
  __typename?: 'MegaMenuGroupBlock';
  MegaMenuContentArea: Maybe<Array<Maybe<_IContent>>>;
  MegaMenuUrl: Maybe<ContentUrl>;
  MenuMenuHeading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type MegaMenuGroupBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MegaMenuGroupBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  MegaMenuContentArea: Maybe<_IContentAutocomplete>;
  MegaMenuUrl: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type MegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
  MegaMenuContentArea: Maybe<_IContentFacet>;
  MegaMenuUrl: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea: InputMaybe<_IContentOrderByInput>;
  MegaMenuUrl: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type MegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<MegaMenuGroupBlockFacet>;
  item: Maybe<MegaMenuGroupBlock>;
  items: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type MegaMenuGroupBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea: InputMaybe<_IContentWhereInput>;
  MegaMenuUrl: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type MenuNavigationBlock = IData & _IComponent & _IContent & {
  __typename?: 'MenuNavigationBlock';
  MenuNavigationHeading: Maybe<Scalars['String']['output']>;
  NavigationLinks: Maybe<Array<Maybe<Link>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type MenuNavigationBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MenuNavigationBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type MenuNavigationBlockAutocomplete = {
  __typename?: 'MenuNavigationBlockAutocomplete';
  NavigationLinks: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type MenuNavigationBlockFacet = {
  __typename?: 'MenuNavigationBlockFacet';
  NavigationLinks: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type MenuNavigationBlockOrderByInput = {
  NavigationLinks: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type MenuNavigationBlockOutput = {
  __typename?: 'MenuNavigationBlockOutput';
  autocomplete: Maybe<MenuNavigationBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<MenuNavigationBlockFacet>;
  item: Maybe<MenuNavigationBlock>;
  items: Maybe<Array<Maybe<MenuNavigationBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type MenuNavigationBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuNavigationBlockWhereInput = {
  NavigationLinks: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<MenuNavigationBlockWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier: InputMaybe<FactorModifier>;
  value: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlock = IData & _IComponent & _IContent & {
  __typename?: 'OdpEmbedBlock';
  ContentId: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type OdpEmbedBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OdpEmbedBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OdpEmbedBlockAutocomplete = {
  __typename?: 'OdpEmbedBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OdpEmbedBlockFacet = {
  __typename?: 'OdpEmbedBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OdpEmbedBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OdpEmbedBlockOutput = {
  __typename?: 'OdpEmbedBlockOutput';
  autocomplete: Maybe<OdpEmbedBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OdpEmbedBlockFacet>;
  item: Maybe<OdpEmbedBlock>;
  items: Maybe<Array<Maybe<OdpEmbedBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OdpEmbedBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OdpEmbedBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OdpEmbedBlockWhereInput>>>;
};

export type OrderBy =
  | 'ASC'
  | 'DESC';

export type OrderByFacetType =
  | 'COUNT'
  | 'VALUE';

export type PageSeoSettings = IData & _IComponent & _IContent & {
  __typename?: 'PageSeoSettings';
  GraphType: Maybe<Scalars['String']['output']>;
  MetaDescription: Maybe<Scalars['String']['output']>;
  MetaKeywords: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle: Maybe<Scalars['String']['output']>;
  SharingImage: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type PageSeoSettingsGraphTypeArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaKeywordsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsMetaTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  SharingImage: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  GraphType: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription: Maybe<Array<Maybe<StringFacet>>>;
  MetaKeywords: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};


export type PageSeoSettingsFacetGraphTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaKeywordsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsFacetMetaTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PageSeoSettingsOrderByInput = {
  GraphType: InputMaybe<OrderBy>;
  MetaDescription: InputMaybe<OrderBy>;
  MetaKeywords: InputMaybe<OrderBy>;
  MetaTitle: InputMaybe<OrderBy>;
  SharingImage: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete: Maybe<PageSeoSettingsAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PageSeoSettingsFacet>;
  item: Maybe<PageSeoSettings>;
  items: Maybe<Array<Maybe<PageSeoSettings>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  GraphType: Maybe<Scalars['String']['output']>;
  MetaDescription: Maybe<Scalars['String']['output']>;
  MetaKeywords: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  MetaTitle: Maybe<Scalars['String']['output']>;
  SharingImage: Maybe<ContentReference>;
};


export type PageSeoSettingsPropertyGraphTypeArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaDescriptionArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaKeywordsArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettingsPropertyMetaTitleArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type PageSeoSettingsPropertyAutocomplete = {
  __typename?: 'PageSeoSettingsPropertyAutocomplete';
  SharingImage: Maybe<ContentReferenceAutocomplete>;
};

export type PageSeoSettingsPropertyFacet = {
  __typename?: 'PageSeoSettingsPropertyFacet';
  GraphType: Maybe<Array<Maybe<StringFacet>>>;
  MetaDescription: Maybe<Array<Maybe<StringFacet>>>;
  MetaKeywords: Maybe<Array<Maybe<StringFacet>>>;
  MetaTitle: Maybe<Array<Maybe<StringFacet>>>;
  SharingImage: Maybe<ContentReferenceFacet>;
};


export type PageSeoSettingsPropertyFacetGraphTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaDescriptionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaKeywordsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type PageSeoSettingsPropertyFacetMetaTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type PageSeoSettingsPropertyOrderByInput = {
  GraphType: InputMaybe<OrderBy>;
  MetaDescription: InputMaybe<OrderBy>;
  MetaKeywords: InputMaybe<OrderBy>;
  MetaTitle: InputMaybe<OrderBy>;
  SharingImage: InputMaybe<ContentReferenceOrderByInput>;
};

export type PageSeoSettingsPropertyWhereInput = {
  GraphType: InputMaybe<SearchableStringFilterInput>;
  MetaDescription: InputMaybe<SearchableStringFilterInput>;
  MetaKeywords: InputMaybe<SearchableStringFilterInput>;
  MetaTitle: InputMaybe<SearchableStringFilterInput>;
  SharingImage: InputMaybe<ContentReferenceWhereInput>;
};

export type PageSeoSettingsWhereInput = {
  GraphType: InputMaybe<SearchableStringFilterInput>;
  MetaDescription: InputMaybe<SearchableStringFilterInput>;
  MetaKeywords: InputMaybe<SearchableStringFilterInput>;
  MetaTitle: InputMaybe<SearchableStringFilterInput>;
  SharingImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type ParagraphElement = IData & _IComponent & _IContent & {
  __typename?: 'ParagraphElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  text: Maybe<SearchableRichText>;
};


export type ParagraphElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  text: Maybe<SearchableRichTextFacet>;
};

export type ParagraphElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  text: InputMaybe<SearchableRichTextOrderByInput>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete: Maybe<ParagraphElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ParagraphElementFacet>;
  item: Maybe<ParagraphElement>;
  items: Maybe<Array<Maybe<ParagraphElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  text: InputMaybe<SearchableRichTextWhereInput>;
};

export type PartnerTokens = IData & _IComponent & _IContent & {
  __typename?: 'PartnerTokens';
  ButtonColor: Maybe<Scalars['String']['output']>;
  ButtonColorRBG: Maybe<Scalars['String']['output']>;
  DiscountLabel: Maybe<Scalars['String']['output']>;
  MemberPhone: Maybe<Scalars['String']['output']>;
  Phone: Maybe<Scalars['String']['output']>;
  URL: Maybe<ContentUrl>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type PartnerTokens_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PartnerTokens_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PartnerTokensAutocomplete = {
  __typename?: 'PartnerTokensAutocomplete';
  URL: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PartnerTokensFacet = {
  __typename?: 'PartnerTokensFacet';
  URL: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type PartnerTokensOrderByInput = {
  URL: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PartnerTokensOutput = {
  __typename?: 'PartnerTokensOutput';
  autocomplete: Maybe<PartnerTokensAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PartnerTokensFacet>;
  item: Maybe<PartnerTokens>;
  items: Maybe<Array<Maybe<PartnerTokens>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PartnerTokensOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PartnerTokensProperty = {
  __typename?: 'PartnerTokensProperty';
  ButtonColor: Maybe<Scalars['String']['output']>;
  ButtonColorRBG: Maybe<Scalars['String']['output']>;
  DiscountLabel: Maybe<Scalars['String']['output']>;
  MemberPhone: Maybe<Scalars['String']['output']>;
  Phone: Maybe<Scalars['String']['output']>;
  URL: Maybe<ContentUrl>;
};

export type PartnerTokensPropertyAutocomplete = {
  __typename?: 'PartnerTokensPropertyAutocomplete';
  URL: Maybe<ContentUrlAutocomplete>;
};

export type PartnerTokensPropertyFacet = {
  __typename?: 'PartnerTokensPropertyFacet';
  URL: Maybe<ContentUrlFacet>;
};

export type PartnerTokensPropertyOrderByInput = {
  URL: InputMaybe<ContentUrlOrderByInput>;
};

export type PartnerTokensPropertyWhereInput = {
  URL: InputMaybe<ContentUrlWhereInput>;
};

export type PartnerTokensWhereInput = {
  URL: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<PartnerTokensWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PartnerTokensWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PartnerTokensWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  ArticleListElement: Maybe<ArticleListElementOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlogPostPage: Maybe<BlogPostPageOutput>;
  BlogSectionExperience: Maybe<BlogSectionExperienceOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CTAElement: Maybe<CtaElementOutput>;
  CarouselBlock: Maybe<CarouselBlockOutput>;
  ContentRecsElement: Maybe<ContentRecsElementOutput>;
  ContinueReadingComponent: Maybe<ContinueReadingComponentOutput>;
  Data: Maybe<DataOutput>;
  Document: Maybe<DocumentOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  HeadingElement: Maybe<HeadingElementOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageElement: Maybe<ImageElementOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LandingPage: Maybe<LandingPageOutput>;
  LayoutSettingsBlock: Maybe<LayoutSettingsBlockOutput>;
  MegaMenuGroupBlock: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock: Maybe<MenuNavigationBlockOutput>;
  OdpEmbedBlock: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings: Maybe<PageSeoSettingsOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  PartnerTokens: Maybe<PartnerTokensOutput>;
  QuoteBlock: Maybe<QuoteBlockOutput>;
  RichTextElement: Maybe<RichTextElementOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestimonialElement: Maybe<TestimonialElementOutput>;
  TextBlock: Maybe<TextBlockOutput>;
  Tokens: Maybe<TokensOutput>;
  VideoElement: Maybe<VideoElementOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryArticleListElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBlogPostPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogPostPageWhereInput>;
};


export type QueryBlogSectionExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogSectionExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogSectionExperienceWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryCtaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CtaElementWhereInput>;
};


export type QueryCarouselBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryContentRecsElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContentRecsElementWhereInput>;
};


export type QueryContinueReadingComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContinueReadingComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContinueReadingComponentWhereInput>;
};


export type QueryDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryDocumentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DocumentWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryHeadingElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeadingElementWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryImageElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageElementWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLandingPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LandingPageWhereInput>;
};


export type QueryLayoutSettingsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LayoutSettingsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LayoutSettingsBlockWhereInput>;
};


export type QueryMegaMenuGroupBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryMenuNavigationBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MenuNavigationBlockWhereInput>;
};


export type QueryOdpEmbedBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryPartnerTokensArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PartnerTokensOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PartnerTokensWhereInput>;
};


export type QueryQuoteBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<QuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryRichTextElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<RichTextElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<RichTextElementWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestimonialElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TextBlockWhereInput>;
};


export type QueryTokensArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TokensOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TokensWhereInput>;
};


export type QueryVideoElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoElementWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type Query_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type Query_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  ArticleListElement: Maybe<ArticleListElementOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlogPostPage: Maybe<BlogPostPageOutput>;
  BlogSectionExperience: Maybe<BlogSectionExperienceOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CTAElement: Maybe<CtaElementOutput>;
  CarouselBlock: Maybe<CarouselBlockOutput>;
  ContentRecsElement: Maybe<ContentRecsElementOutput>;
  ContinueReadingComponent: Maybe<ContinueReadingComponentOutput>;
  Data: Maybe<DataOutput>;
  Document: Maybe<DocumentOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  HeadingElement: Maybe<HeadingElementOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  ImageElement: Maybe<ImageElementOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LandingPage: Maybe<LandingPageOutput>;
  LayoutSettingsBlock: Maybe<LayoutSettingsBlockOutput>;
  MegaMenuGroupBlock: Maybe<MegaMenuGroupBlockOutput>;
  MenuNavigationBlock: Maybe<MenuNavigationBlockOutput>;
  OdpEmbedBlock: Maybe<OdpEmbedBlockOutput>;
  PageSeoSettings: Maybe<PageSeoSettingsOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  PartnerTokens: Maybe<PartnerTokensOutput>;
  QuoteBlock: Maybe<QuoteBlockOutput>;
  RichTextElement: Maybe<RichTextElementOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestimonialElement: Maybe<TestimonialElementOutput>;
  TextBlock: Maybe<TextBlockOutput>;
  Tokens: Maybe<TokensOutput>;
  VideoElement: Maybe<VideoElementOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryRefArticleListElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleListElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBlogPostPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogPostPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogPostPageWhereInput>;
};


export type QueryRefBlogSectionExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlogSectionExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlogSectionExperienceWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryRefCtaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CtaElementWhereInput>;
};


export type QueryRefCarouselBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CarouselBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CarouselBlockWhereInput>;
};


export type QueryRefContentRecsElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContentRecsElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContentRecsElementWhereInput>;
};


export type QueryRefContinueReadingComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContinueReadingComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContinueReadingComponentWhereInput>;
};


export type QueryRefDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryRefDocumentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DocumentOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DocumentWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefHeadingElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeadingElementWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefImageElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageElementWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLandingPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefLayoutSettingsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LayoutSettingsBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LayoutSettingsBlockWhereInput>;
};


export type QueryRefMegaMenuGroupBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryRefMenuNavigationBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MenuNavigationBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MenuNavigationBlockWhereInput>;
};


export type QueryRefOdpEmbedBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OdpEmbedBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OdpEmbedBlockWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageSeoSettingsOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefPartnerTokensArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PartnerTokensOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PartnerTokensWhereInput>;
};


export type QueryRefQuoteBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<QuoteBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<QuoteBlockWhereInput>;
};


export type QueryRefRichTextElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<RichTextElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<RichTextElementWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestimonialElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryRefTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TextBlockWhereInput>;
};


export type QueryRefTokensArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TokensOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TokensWhereInput>;
};


export type QueryRefVideoElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoElementOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoElementWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};

export type QuoteBlock = IData & _IComponent & _IContent & {
  __typename?: 'QuoteBlock';
  QuoteActive: Maybe<Scalars['Boolean']['output']>;
  QuoteColor: Maybe<Scalars['String']['output']>;
  QuoteProfileLocation: Maybe<Scalars['String']['output']>;
  QuoteProfileName: Maybe<Scalars['String']['output']>;
  QuoteProfilePicture: Maybe<ContentReference>;
  QuoteText: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type QuoteBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type QuoteBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type QuoteBlockAutocomplete = {
  __typename?: 'QuoteBlockAutocomplete';
  QuoteProfilePicture: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type QuoteBlockFacet = {
  __typename?: 'QuoteBlockFacet';
  QuoteProfilePicture: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type QuoteBlockOrderByInput = {
  QuoteProfilePicture: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type QuoteBlockOutput = {
  __typename?: 'QuoteBlockOutput';
  autocomplete: Maybe<QuoteBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<QuoteBlockFacet>;
  item: Maybe<QuoteBlock>;
  items: Maybe<Array<Maybe<QuoteBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type QuoteBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type QuoteBlockWhereInput = {
  QuoteProfilePicture: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<QuoteBlockWhereInput>>>;
};

export type RangeFacetsInput = {
  from: InputMaybe<Scalars['Int']['input']>;
  to: InputMaybe<Scalars['Int']['input']>;
};

export type Ranking =
  | 'BOOST_ONLY'
  | 'DOC'
  | 'RELEVANCE'
  | 'SEMANTIC';

export type RichText = {
  __typename?: 'RichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextElement = IData & _IComponent & _IContent & {
  __typename?: 'RichTextElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  text: Maybe<SearchableRichText>;
};


export type RichTextElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type RichTextElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type RichTextElementAutocomplete = {
  __typename?: 'RichTextElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type RichTextElementFacet = {
  __typename?: 'RichTextElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  text: Maybe<SearchableRichTextFacet>;
};

export type RichTextElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  text: InputMaybe<SearchableRichTextOrderByInput>;
};

export type RichTextElementOutput = {
  __typename?: 'RichTextElementOutput';
  autocomplete: Maybe<RichTextElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<RichTextElementFacet>;
  item: Maybe<RichTextElement>;
  items: Maybe<Array<Maybe<RichTextElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type RichTextElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type RichTextElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<RichTextElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<RichTextElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<RichTextElementWhereInput>>>;
  text: InputMaybe<SearchableRichTextWhereInput>;
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html: InputMaybe<StringFilterInput>;
};

export type SearchableRichText = {
  __typename?: 'SearchableRichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};


export type SearchableRichTextHtmlArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type SearchableRichTextFacet = {
  __typename?: 'SearchableRichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type SearchableRichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type SearchableRichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type SearchableRichTextWhereInput = {
  html: InputMaybe<SearchableStringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SynonymSlot =
  /** synonym slot 1 */
  | 'ONE'
  /** synonym slot 2 */
  | 'TWO';

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete: Maybe<SysContentFolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SysContentFolderFacet>;
  item: Maybe<SysContentFolder>;
  items: Maybe<Array<Maybe<SysContentFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestimonialElement = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  customerImage: Maybe<ContentReference>;
  customerLocation: Maybe<Scalars['String']['output']>;
  customerName: Maybe<Scalars['String']['output']>;
  referenceText: Maybe<RichText>;
  referenceTitle: Maybe<Scalars['String']['output']>;
};


export type TestimonialElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialElementAutocomplete = {
  __typename?: 'TestimonialElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  customerImage: Maybe<ContentReferenceAutocomplete>;
  referenceText: Maybe<RichTextAutocomplete>;
};

export type TestimonialElementFacet = {
  __typename?: 'TestimonialElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  customerImage: Maybe<ContentReferenceFacet>;
  referenceText: Maybe<RichTextFacet>;
};

export type TestimonialElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  customerImage: InputMaybe<ContentReferenceOrderByInput>;
  referenceText: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialElementOutput = {
  __typename?: 'TestimonialElementOutput';
  autocomplete: Maybe<TestimonialElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialElementFacet>;
  item: Maybe<TestimonialElement>;
  items: Maybe<Array<Maybe<TestimonialElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  customerImage: InputMaybe<ContentReferenceWhereInput>;
  referenceText: InputMaybe<RichTextWhereInput>;
};

export type TextBlock = IData & _IComponent & _IContent & {
  __typename?: 'TextBlock';
  TextBlockDescription: Maybe<RichText>;
  TextBlockHeading: Maybe<Scalars['String']['output']>;
  TextBlockHeadingSize: Maybe<Scalars['String']['output']>;
  TextBlockOverline: Maybe<Scalars['String']['output']>;
  TextBlockWidth: Maybe<Scalars['String']['output']>;
  TextCenter: Maybe<Scalars['Boolean']['output']>;
  TextClassName: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type TextBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TextBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TextBlockAutocomplete = {
  __typename?: 'TextBlockAutocomplete';
  TextBlockDescription: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TextBlockFacet = {
  __typename?: 'TextBlockFacet';
  TextBlockDescription: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TextBlockOrderByInput = {
  TextBlockDescription: InputMaybe<RichTextOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TextBlockOutput = {
  __typename?: 'TextBlockOutput';
  autocomplete: Maybe<TextBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TextBlockFacet>;
  item: Maybe<TextBlock>;
  items: Maybe<Array<Maybe<TextBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TextBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBlockWhereInput = {
  TextBlockDescription: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export type Tokens = IData & _IComponent & _IContent & {
  __typename?: 'Tokens';
  DiscountLabel: Maybe<Scalars['String']['output']>;
  MemberPhone: Maybe<Scalars['String']['output']>;
  Phone: Maybe<Scalars['String']['output']>;
  URL: Maybe<ContentUrl>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Tokens_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Tokens_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TokensAutocomplete = {
  __typename?: 'TokensAutocomplete';
  URL: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TokensFacet = {
  __typename?: 'TokensFacet';
  URL: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TokensOrderByInput = {
  URL: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TokensOutput = {
  __typename?: 'TokensOutput';
  autocomplete: Maybe<TokensAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TokensFacet>;
  item: Maybe<Tokens>;
  items: Maybe<Array<Maybe<Tokens>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TokensOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TokensWhereInput = {
  URL: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<TokensWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TokensWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TokensWhereInput>>>;
};

export type VariationIncludeMode =
  | 'ALL'
  | 'NONE'
  | 'SOME';

export type VariationInput = {
  include: InputMaybe<VariationIncludeMode>;
  includeOriginal: InputMaybe<Scalars['Boolean']['input']>;
  value: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoElement = IData & _IComponent & _IContent & {
  __typename?: 'VideoElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  placeholder: Maybe<ContentReference>;
  title: Maybe<Scalars['String']['output']>;
  video: Maybe<ContentReference>;
};


export type VideoElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoElementAutocomplete = {
  __typename?: 'VideoElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  placeholder: Maybe<ContentReferenceAutocomplete>;
  video: Maybe<ContentReferenceAutocomplete>;
};

export type VideoElementFacet = {
  __typename?: 'VideoElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  placeholder: Maybe<ContentReferenceFacet>;
  video: Maybe<ContentReferenceFacet>;
};

export type VideoElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  placeholder: InputMaybe<ContentReferenceOrderByInput>;
  video: InputMaybe<ContentReferenceOrderByInput>;
};

export type VideoElementOutput = {
  __typename?: 'VideoElementOutput';
  autocomplete: Maybe<VideoElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoElementFacet>;
  item: Maybe<VideoElement>;
  items: Maybe<Array<Maybe<VideoElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoElementWhereInput>>>;
  placeholder: InputMaybe<ContentReferenceWhereInput>;
  video: InputMaybe<ContentReferenceWhereInput>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete: Maybe<VideoMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoMediaFacet>;
  item: Maybe<VideoMedia>;
  items: Maybe<Array<Maybe<VideoMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Component_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete: Maybe<_ComponentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ComponentFacet>;
  item: Maybe<_IComponent>;
  items: Maybe<Array<Maybe<_IComponent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Content_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete: Maybe<_ContentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ContentFacet>;
  item: Maybe<_IContent>;
  items: Maybe<Array<Maybe<_IContent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete: Maybe<_ExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ExperienceFacet>;
  item: Maybe<_IExperience>;
  items: Maybe<Array<Maybe<_IExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete: Maybe<_FolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_FolderFacet>;
  item: Maybe<_IFolder>;
  items: Maybe<Array<Maybe<_IFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Image_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete: Maybe<_ImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageFacet>;
  item: Maybe<_IImage>;
  items: Maybe<Array<Maybe<_IImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Media_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete: Maybe<_MediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_MediaFacet>;
  item: Maybe<_IMedia>;
  items: Maybe<Array<Maybe<_IMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Page_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete: Maybe<_PageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_PageFacet>;
  item: Maybe<_IPage>;
  items: Maybe<Array<Maybe<_IPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete: Maybe<_SectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_SectionFacet>;
  item: Maybe<_ISection>;
  items: Maybe<Array<Maybe<_ISection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Video_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete: Maybe<_VideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_VideoFacet>;
  item: Maybe<_IVideo>;
  items: Maybe<Array<Maybe<_IVideo>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export type System_Locales =
  | 'ALL'
  | 'NEUTRAL';

export type BlankExperienceDataFragment = { __typename?: 'BlankExperience', BlankExperienceSeoSettings: { __typename?: 'PageSeoSettingsProperty', MetaTitle: string | null, MetaDescription: string | null, MetaKeywords: Array<string | null> | null, GraphType: string | null } | null };

export type BlogSectionExperienceDataFragment = { __typename?: 'BlogSectionExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null };

export type GetExperienceByIdQueryVariables = Exact<{
  ids: Array<Scalars['String']['input']> | Scalars['String']['input'];
  locale: InputMaybe<Array<Locales> | Locales>;
}>;


export type GetExperienceByIdQuery = { __typename?: 'Query', _Experience: { __typename?: '_ExperienceOutput', items: Array<{ __typename?: 'BlankExperience', BlankExperienceSeoSettings: { __typename?: 'PageSeoSettingsProperty', MetaTitle: string | null, MetaDescription: string | null, MetaKeywords: Array<string | null> | null, GraphType: string | null } | null } | { __typename?: 'BlogSectionExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null } | { __typename?: '_Experience' } | null> | null } | null };

export type ButtonBlockPropertyDataFragment = { __typename?: 'ButtonBlockProperty', ButtonText: string | null, ButtonUrl: { __typename?: 'ContentUrl', base: string | null, default: string | null } | null };

export type ExperienceData_BlankExperience_Fragment = { __typename?: 'BlankExperience', BlankExperienceSeoSettings: { __typename?: 'PageSeoSettingsProperty', MetaTitle: string | null, MetaDescription: string | null, MetaKeywords: Array<string | null> | null, GraphType: string | null } | null };

export type ExperienceData_BlogSectionExperience_Fragment = { __typename?: 'BlogSectionExperience', _metadata: { __typename?: 'ContentMetadata', displayName: string | null } | { __typename?: 'InstanceMetadata', displayName: string | null } | { __typename?: 'ItemMetadata', displayName: string | null } | { __typename?: 'MediaMetadata', displayName: string | null } | null };

export type ExperienceData__Experience_Fragment = { __typename?: '_Experience' };

export type ExperienceDataFragment = ExperienceData_BlankExperience_Fragment | ExperienceData_BlogSectionExperience_Fragment | ExperienceData__Experience_Fragment;

export type HeroBlockDataFragment = { __typename?: 'HeroBlock', Eyebrow: string | null, Heading: string | null, SubHeading: string | null, HeroColor: string | null, HeroImage: { __typename: 'ContentReference' } | null, Description: { __typename?: 'RichText', json: any | null, html: string | null } | null, HeroButton: { __typename?: 'ButtonBlockProperty', ButtonText: string | null, ButtonUrl: { __typename?: 'ContentUrl', base: string | null, default: string | null } | null } | null };

export type PageSeoSettingsPropertyDataFragment = { __typename?: 'PageSeoSettingsProperty', MetaTitle: string | null, MetaDescription: string | null, MetaKeywords: Array<string | null> | null, GraphType: string | null };

export type TextBlockDataFragment = { __typename?: 'TextBlock', overline: string | null, headingSize: string | null, heading: string | null, center: boolean | null, width: string | null, className: string | null, description: { __typename?: 'RichText', json: any | null, html: string | null } | null };

export const ButtonBlockPropertyDataFragmentDoc = gql`
    fragment ButtonBlockPropertyData on ButtonBlockProperty {
  ButtonText
  ButtonUrl {
    base
    default
  }
}
    `;
export const PageSeoSettingsPropertyDataFragmentDoc = gql`
    fragment PageSeoSettingsPropertyData on PageSeoSettingsProperty {
  MetaTitle
  MetaDescription
  MetaKeywords
  GraphType
}
    `;
export const BlankExperienceDataFragmentDoc = gql`
    fragment BlankExperienceData on BlankExperience {
  BlankExperienceSeoSettings {
    ...PageSeoSettingsPropertyData
  }
}
    ${PageSeoSettingsPropertyDataFragmentDoc}`;
export const BlogSectionExperienceDataFragmentDoc = gql`
    fragment BlogSectionExperienceData on BlogSectionExperience {
  _metadata {
    displayName
  }
}
    `;
export const ExperienceDataFragmentDoc = gql`
    fragment ExperienceData on _IExperience {
  ... on BlankExperience {
    ...BlankExperienceData
  }
  ... on BlogSectionExperience {
    ...BlogSectionExperienceData
  }
}
    ${BlankExperienceDataFragmentDoc}
${BlogSectionExperienceDataFragmentDoc}`;
export const HeroBlockDataFragmentDoc = gql`
    fragment HeroBlockData on HeroBlock {
  HeroImage {
    __typename
  }
  Eyebrow
  Heading
  SubHeading
  Description {
    json
    html
  }
  HeroColor
  HeroButton {
    ButtonText
    ButtonUrl {
      base
      default
    }
  }
}
    `;
export const TextBlockDataFragmentDoc = gql`
    fragment TextBlockData on TextBlock {
  overline: TextBlockOverline
  headingSize: TextBlockHeadingSize
  heading: TextBlockHeading
  description: TextBlockDescription {
    json
    html
  }
  center: TextCenter
  width: TextBlockWidth
  className: TextClassName
}
    `;
export const GetExperienceByIdDocument = gql`
    query GetExperienceById($ids: [String!]!, $locale: [Locales!]) {
  _Experience(ids: $ids, locale: $locale) {
    items {
      ... on _IExperience {
        ...ExperienceData
      }
    }
  }
}
    ${ExperienceDataFragmentDoc}`;
export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    GetExperienceById(variables: GetExperienceByIdQueryVariables, options?: C): Promise<GetExperienceByIdQuery> {
      return requester<GetExperienceByIdQuery, GetExperienceByIdQueryVariables>(GetExperienceByIdDocument, variables, options) as Promise<GetExperienceByIdQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;