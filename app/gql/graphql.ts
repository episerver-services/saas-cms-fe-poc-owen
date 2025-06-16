/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

/** Changesets are used to group work on several content items together. */
export type Changeset = {
  __typename?: 'Changeset';
  /** A timestamp indicating when this changeset was first created. */
  created?: Maybe<Scalars['String']['output']>;
  /** The username of the user that created this changeset. */
  createdBy?: Maybe<Scalars['String']['output']>;
  /** The name of this Changeset. */
  displayName: Scalars['String']['output'];
  /** The unique key of this Changeset. */
  key: Scalars['String']['output'];
  lastModified?: Maybe<Scalars['String']['output']>;
  /** The source of this Changeset */
  source?: Maybe<Scalars['String']['output']>;
};

/** Changesets are used to group work on several content items together. */
export type ChangesetInput = {
  /** A timestamp indicating when this changeset was first created. */
  created?: InputMaybe<Scalars['String']['input']>;
  /** The username of the user that created this changeset. */
  createdBy?: InputMaybe<Scalars['String']['input']>;
  /** The name of this Changeset. */
  displayName: Scalars['String']['input'];
  /** The unique key of this Changeset. */
  key: Scalars['String']['input'];
  lastModified?: InputMaybe<Scalars['String']['input']>;
  /** The source of this Changeset */
  source?: InputMaybe<Scalars['String']['input']>;
};

/** Items in an changeset that contains a link to the specific content version. */
export type ChangesetItem = {
  __typename?: 'ChangesetItem';
  /** Gets/sets the changeset item category. */
  category?: Maybe<Scalars['String']['output']>;
  /** A reference to a specific content instance. */
  reference: ContentReference;
};

/** Items in an changeset that contains a link to the specific content version. */
export type ChangesetItemInput = {
  /** Gets/sets the changeset item category. */
  category?: InputMaybe<Scalars['String']['input']>;
  /** A reference to a specific content instance. */
  reference: ContentReferenceInput;
};

export type ChangesetItemPage = {
  __typename?: 'ChangesetItemPage';
  /** The items in this paged collection. */
  items?: Maybe<Array<Maybe<ChangesetItem>>>;
  /** The zero-based index of the current page. */
  pageIndex?: Maybe<Scalars['Int']['output']>;
  /** The number of item in each page. Not necessarily the same as the number of items in this page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The estimated total number of items in the collection. May be omitted if the total item count is unknown. */
  totalItemCount?: Maybe<Scalars['Int']['output']>;
};

export type ChangesetPage = {
  __typename?: 'ChangesetPage';
  /** The items in this paged collection. */
  items?: Maybe<Array<Maybe<Changeset>>>;
  /** The zero-based index of the current page. */
  pageIndex?: Maybe<Scalars['Int']['output']>;
  /** The number of item in each page. Not necessarily the same as the number of items in this page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The estimated total number of items in the collection. May be omitted if the total item count is unknown. */
  totalItemCount?: Maybe<Scalars['Int']['output']>;
};

export enum CompositionBehavior {
  Elementenabled = 'ELEMENTENABLED',
  Sectionenabled = 'SECTIONENABLED'
}

export enum ContentBaseType {
  Component = 'COMPONENT',
  Element = 'ELEMENT',
  Experience = 'EXPERIENCE',
  Folder = 'FOLDER',
  Image = 'IMAGE',
  Media = 'MEDIA',
  Page = 'PAGE',
  Section = 'SECTION',
  Video = 'VIDEO'
}

/** Represents a version of a content item. */
export type ContentItem = {
  __typename?: 'ContentItem';
  /** The key that identifies the container content that this content item belongs to. */
  container?: Maybe<Scalars['String']['output']>;
  /** The content type of this content item. */
  contentType?: Maybe<Scalars['String']['output']>;
  /** Indicates a time when this content version should transition to published status. Must only be assigned when Status is set to Scheduled. */
  delayPublishUntil?: Maybe<Scalars['String']['output']>;
  /** The display name of this content item. */
  displayName: Scalars['String']['output'];
  /** Indicates a time when this content expired or should expire. */
  expired?: Maybe<Scalars['String']['output']>;
  /** The key that identifies this content item. */
  key: Scalars['String']['output'];
  lastModified?: Maybe<Scalars['String']['output']>;
  /** The username of the user that made the latest modification to this content instance. */
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  /** The locale of this content instance. */
  locale?: Maybe<Scalars['String']['output']>;
  /** The key that identifies the owner of this content. Content that is own by another content is also known as an asset. */
  owner?: Maybe<Scalars['String']['output']>;
  /** Properties as they are defined by corresponding component or content type. */
  properties?: Maybe<Scalars['JSON']['output']>;
  /** Indicates a time when this content was published or should be published. */
  published?: Maybe<Scalars['String']['output']>;
  /** A string that represents the segment that should be used when routing or generate routes to the current content instance. */
  routeSegment?: Maybe<Scalars['String']['output']>;
  /** Represent the different status values of a content version. */
  status?: Maybe<VersionStatus>;
  /** The version identifier of this content instance. */
  version?: Maybe<Scalars['String']['output']>;
};

/** Represents a version of a content item. */
export type ContentItemInput = {
  /** The key that identifies the container content that this content item belongs to. */
  container?: InputMaybe<Scalars['String']['input']>;
  /** The content type of this content item. */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /** Indicates a time when this content version should transition to published status. Must only be assigned when Status is set to Scheduled. */
  delayPublishUntil?: InputMaybe<Scalars['String']['input']>;
  /** The display name of this content item. */
  displayName: Scalars['String']['input'];
  /** Indicates a time when this content expired or should expire. */
  expired?: InputMaybe<Scalars['String']['input']>;
  /** The key that identifies this content item. */
  key: Scalars['String']['input'];
  lastModified?: InputMaybe<Scalars['String']['input']>;
  /** The username of the user that made the latest modification to this content instance. */
  lastModifiedBy?: InputMaybe<Scalars['String']['input']>;
  /** The locale of this content instance. */
  locale?: InputMaybe<Scalars['String']['input']>;
  /** The key that identifies the owner of this content. Content that is own by another content is also known as an asset. */
  owner?: InputMaybe<Scalars['String']['input']>;
  /** Properties as they are defined by corresponding component or content type. */
  properties?: InputMaybe<Scalars['JSON']['input']>;
  /** Indicates a time when this content was published or should be published. */
  published?: InputMaybe<Scalars['String']['input']>;
  /** A string that represents the segment that should be used when routing or generate routes to the current content instance. */
  routeSegment?: InputMaybe<Scalars['String']['input']>;
  /** Represent the different status values of a content version. */
  status?: InputMaybe<VersionStatus>;
  /** The version identifier of this content instance. */
  version?: InputMaybe<Scalars['String']['input']>;
};

export type ContentItemPage = {
  __typename?: 'ContentItemPage';
  /** The items in this paged collection. */
  items?: Maybe<Array<Maybe<ContentItem>>>;
  /** The zero-based index of the current page. */
  pageIndex?: Maybe<Scalars['Int']['output']>;
  /** The number of item in each page. Not necessarily the same as the number of items in this page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The estimated total number of items in the collection. May be omitted if the total item count is unknown. */
  totalItemCount?: Maybe<Scalars['Int']['output']>;
};

/** Represents metadata about a content item. */
export type ContentMetadata = {
  __typename?: 'ContentMetadata';
  /** The key that identifies the container content that this content belongs to. */
  container?: Maybe<Scalars['String']['output']>;
  /** The content type of this content. */
  contentType?: Maybe<Scalars['String']['output']>;
  /** A timestamp, which if provided, indicates when this content was deleted. */
  deleted?: Maybe<Scalars['String']['output']>;
  /** The username of the user that deleted this content. */
  deletedBy?: Maybe<Scalars['String']['output']>;
  /** Indicates if the content contains any content items. */
  hasItems?: Maybe<Scalars['Boolean']['output']>;
  /** The key that identifies this content. */
  key?: Maybe<Scalars['String']['output']>;
  /** Set of locales that this content has been created for. */
  locales?: Maybe<Scalars['JSON']['output']>;
  /** The key that identifies the owner of this content. Content that is own by another content is also known as an asset. */
  owner?: Maybe<Scalars['String']['output']>;
};

export type ContentMetadataPage = {
  __typename?: 'ContentMetadataPage';
  /** The items in this paged collection. */
  items?: Maybe<Array<Maybe<ContentMetadata>>>;
  /** The zero-based index of the current page. */
  pageIndex?: Maybe<Scalars['Int']['output']>;
  /** The number of item in each page. Not necessarily the same as the number of items in this page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The estimated total number of items in the collection. May be omitted if the total item count is unknown. */
  totalItemCount?: Maybe<Scalars['Int']['output']>;
};

/** A reference to a specific content instance. */
export type ContentReference = {
  __typename?: 'ContentReference';
  /** The content key that identifies the content. */
  key?: Maybe<Scalars['String']['output']>;
  /** The name of the content locale */
  locale?: Maybe<Scalars['String']['output']>;
  /** The identifier of a specific version of the content. */
  version?: Maybe<Scalars['String']['output']>;
};

/** A reference to a specific content instance. */
export type ContentReferenceInput = {
  /** The content key that identifies the content. */
  key?: InputMaybe<Scalars['String']['input']>;
  /** The name of the content locale */
  locale?: InputMaybe<Scalars['String']['input']>;
  /** The identifier of a specific version of the content. */
  version?: InputMaybe<Scalars['String']['input']>;
};

/** A writable implementation of an ContentType. */
export type ContentType = {
  __typename?: 'ContentType';
  /** Represent the base type of a ContentType. */
  baseType?: Maybe<ContentBaseType>;
  /** Provides a set of composition behaviors specifying how this content type can be used within compositions. */
  compositionBehaviors?: Maybe<Array<Maybe<CompositionBehavior>>>;
  /** A timestamp indicating when this ContentType was first created. */
  created?: Maybe<Scalars['String']['output']>;
  /** A description of this ContentType. */
  description?: Maybe<Scalars['String']['output']>;
  /** The display name of this ContentType. */
  displayName?: Maybe<Scalars['String']['output']>;
  /**
   * Provides a set of features that content based on this ContentType supports.
   * This value is assigned based on the BaseType and cannot be modified.
   */
  features?: Maybe<Array<Maybe<ContentTypeFeature>>>;
  /** The key that identifies this ContentType. */
  key: Scalars['String']['output'];
  /** Indicates the last time this content type was modified. */
  lastModified?: Maybe<Scalars['String']['output']>;
  /** The username of the user that made the latest modification to this ContentType. */
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  /** Provides a set of content types that can be created in container of this type */
  mayContainTypes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Provides a set of media file extensions that this content type can handle. */
  mediaFileExtensions?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Dictionary with all custom properties of this ContentType. */
  properties?: Maybe<Scalars['JSON']['output']>;
  /** An value that is used to when sorting ContentType instances. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** A string that is used to indicate the source of this ContentType. */
  source?: Maybe<Scalars['String']['output']>;
  /** Specifies how this ContentType can be used. */
  usage?: Maybe<Array<Maybe<ContentTypeUsage>>>;
};

export enum ContentTypeFeature {
  Binary = 'BINARY',
  Localization = 'LOCALIZATION',
  Publishperiod = 'PUBLISHPERIOD',
  Routing = 'ROUTING',
  Versioning = 'VERSIONING'
}

/** A writable implementation of an ContentType. */
export type ContentTypeInput = {
  /** Represent the base type of a ContentType. */
  baseType?: InputMaybe<ContentBaseType>;
  /** Provides a set of composition behaviors specifying how this content type can be used within compositions. */
  compositionBehaviors?: InputMaybe<Array<InputMaybe<CompositionBehavior>>>;
  /** A timestamp indicating when this ContentType was first created. */
  created?: InputMaybe<Scalars['String']['input']>;
  /** A description of this ContentType. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The display name of this ContentType. */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /**
   * Provides a set of features that content based on this ContentType supports.
   * This value is assigned based on the BaseType and cannot be modified.
   */
  features?: InputMaybe<Array<InputMaybe<ContentTypeFeature>>>;
  /** The key that identifies this ContentType. */
  key: Scalars['String']['input'];
  /** Indicates the last time this content type was modified. */
  lastModified?: InputMaybe<Scalars['String']['input']>;
  /** The username of the user that made the latest modification to this ContentType. */
  lastModifiedBy?: InputMaybe<Scalars['String']['input']>;
  /** Provides a set of content types that can be created in container of this type */
  mayContainTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Provides a set of media file extensions that this content type can handle. */
  mediaFileExtensions?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Dictionary with all custom properties of this ContentType. */
  properties?: InputMaybe<Scalars['JSON']['input']>;
  /** An value that is used to when sorting ContentType instances. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  /** A string that is used to indicate the source of this ContentType. */
  source?: InputMaybe<Scalars['String']['input']>;
  /** Specifies how this ContentType can be used. */
  usage?: InputMaybe<Array<InputMaybe<ContentTypeUsage>>>;
};

export type ContentTypePage = {
  __typename?: 'ContentTypePage';
  /** The items in this paged collection. */
  items?: Maybe<Array<Maybe<ContentType>>>;
  /** The zero-based index of the current page. */
  pageIndex?: Maybe<Scalars['Int']['output']>;
  /** The number of item in each page. Not necessarily the same as the number of items in this page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The estimated total number of items in the collection. May be omitted if the total item count is unknown. */
  totalItemCount?: Maybe<Scalars['Int']['output']>;
};

export enum ContentTypeUsage {
  Instance = 'INSTANCE',
  Property = 'PROPERTY'
}

/** Options for copying content. */
export type CopyContentOptionsInput = {
  /** Indicates if deleted content could be used as source. */
  allowDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional key of the container where the copied content should be placed. */
  container?: InputMaybe<Scalars['String']['input']>;
  /** Indicates if published versions of the content should keep their published status rather than being created as a draft version at the destination. */
  keepPublishedStatus?: InputMaybe<Scalars['Boolean']['input']>;
  /** Optional key of the owner where the copied content should be placed. */
  owner?: InputMaybe<Scalars['String']['input']>;
};

/** Describes a display template that can be assigned to content. */
export type DisplayTemplate = {
  __typename?: 'DisplayTemplate';
  /** Represent the base type of a ContentType. */
  baseType?: Maybe<ContentBaseType>;
  /** The optional key of the content type this display template is valid for. */
  contentType?: Maybe<Scalars['String']['output']>;
  /** A timestamp indicating when this display template was first created. */
  created?: Maybe<Scalars['String']['output']>;
  /** The username of the user that created this display template. */
  createdBy?: Maybe<Scalars['String']['output']>;
  /** The display name of this display template. */
  displayName: Scalars['String']['output'];
  /**
   * If this is the default display template for the associated base type,
   * node type or content type.
   */
  isDefault?: Maybe<Scalars['Boolean']['output']>;
  /** The key that identifies this display template. */
  key: Scalars['String']['output'];
  /** A timestamp indicating when this display template was last modified. */
  lastModified?: Maybe<Scalars['String']['output']>;
  /** The username of the user that last modified this display template. */
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  /** The optional node type this display template is valid for. */
  nodeType?: Maybe<Scalars['String']['output']>;
  /** The available settings for this display template. */
  settings?: Maybe<Scalars['JSON']['output']>;
};

/** Describes a display template that can be assigned to content. */
export type DisplayTemplateInput = {
  /** Represent the base type of a ContentType. */
  baseType?: InputMaybe<ContentBaseType>;
  /** The optional key of the content type this display template is valid for. */
  contentType?: InputMaybe<Scalars['String']['input']>;
  /** A timestamp indicating when this display template was first created. */
  created?: InputMaybe<Scalars['String']['input']>;
  /** The username of the user that created this display template. */
  createdBy?: InputMaybe<Scalars['String']['input']>;
  /** The display name of this display template. */
  displayName: Scalars['String']['input'];
  /**
   * If this is the default display template for the associated base type,
   * node type or content type.
   */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  /** The key that identifies this display template. */
  key: Scalars['String']['input'];
  /** A timestamp indicating when this display template was last modified. */
  lastModified?: InputMaybe<Scalars['String']['input']>;
  /** The username of the user that last modified this display template. */
  lastModifiedBy?: InputMaybe<Scalars['String']['input']>;
  /** The optional node type this display template is valid for. */
  nodeType?: InputMaybe<Scalars['String']['input']>;
  /** The available settings for this display template. */
  settings?: InputMaybe<Scalars['JSON']['input']>;
};

export type DisplayTemplatePage = {
  __typename?: 'DisplayTemplatePage';
  /** The items in this paged collection. */
  items?: Maybe<Array<Maybe<DisplayTemplate>>>;
  /** The zero-based index of the current page. */
  pageIndex?: Maybe<Scalars['Int']['output']>;
  /** The number of item in each page. Not necessarily the same as the number of items in this page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The estimated total number of items in the collection. May be omitted if the total item count is unknown. */
  totalItemCount?: Maybe<Scalars['Int']['output']>;
};

/** Enumerations for the format. */
export type Enum = {
  __typename?: 'Enum';
  values?: Maybe<Array<Maybe<ValuesListItem>>>;
};

/** Bearer auth credentials for security protocol 'Http' */
export type HttpInput = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** A viewer that wraps operations for all available authentication mechanisms */
  mutationViewerAnyAuth?: Maybe<MutationViewerAnyAuth>;
  /** A viewer that wraps all operations authenticated via security scheme 'Http', which is of type 'http' 'bearer' */
  mutationViewerBearerAuth?: Maybe<MutationViewerBearerAuth>;
};


export type MutationMutationViewerAnyAuthArgs = {
  http?: InputMaybe<HttpInput>;
};


export type MutationMutationViewerBearerAuthArgs = {
  token: Scalars['String']['input'];
};

/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuth = {
  __typename?: 'MutationViewerAnyAuth';
  /**
   * Creates a new changeset.
   *
   * Equivalent to POST /changesets
   */
  changesetsCreate?: Maybe<Changeset>;
  /**
   * Creates the given changeset item.
   *
   * Equivalent to POST /changesets/{changeset}/items
   */
  changesetsCreateItem?: Maybe<ChangesetItem>;
  /**
   * Deletes the changeset with the provided key. If a changeset with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /changesets/{key}
   */
  changesetsDelete?: Maybe<Changeset>;
  /**
   * Deletes the specified changeset item from the changeset.
   *
   * Equivalent to DELETE /changesets/{changeset}/items/{key}/versions/{version}
   */
  changesetsDeleteItem?: Maybe<ChangesetItem>;
  /**
   * Creates or replaces a changeset. If a changeset with the provided key exist it is replaced.
   * Otherwise a new changeset is created.
   *
   * Equivalent to PUT /changesets/{key}
   */
  changesetsPut?: Maybe<Changeset>;
  /**
   * Create a copy of the content item with the provided key.
   *
   * Equivalent to POST /content/{key}:copy
   */
  contentCopy?: Maybe<ContentMetadata>;
  /**
   * Create a new content item.
   *
   * Equivalent to POST /content
   */
  contentCreate?: Maybe<ContentItem>;
  /**
   * Create a new version of a content item.
   *
   * Equivalent to POST /content/{key}/versions
   */
  contentCreateVersion?: Maybe<ContentItem>;
  /**
   * Deletes the content item with the provided key. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /content/{key}
   */
  contentDelete?: Maybe<ContentMetadata>;
  /**
   * Deletes the content item with the provided key. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /content/{key}/versions
   */
  contentDeleteLocale?: Maybe<ContentItem>;
  /**
   * Deletes the content item with the provided key. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /content/{key}/versions/{version}
   */
  contentDeleteVersion?: Maybe<ContentItem>;
  /**
   * Update an existing content item. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to PATCH /content/{key}
   */
  contentPatchMetadata?: Maybe<ContentMetadata>;
  /**
   * Update an existing content item. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to PATCH /content/{key}/versions/{version}
   */
  contentPatchVersion?: Maybe<ContentItem>;
  /**
   * Create a new content type.
   *
   * Equivalent to POST /contenttypes
   */
  contentTypesCreate?: Maybe<ContentType>;
  /**
   * Deletes the content type with the provided key. If a content type with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /contenttypes/{key}
   */
  contentTypesDelete?: Maybe<ContentType>;
  /**
   * Update an existing content type. If a content type with the provided key does not exist an error is returned.
   *
   * Equivalent to PATCH /contenttypes/{key}
   */
  contentTypesPatch?: Maybe<ContentType>;
  /**
   * Create or replace a content type. If a content type with the provided key exist it is replaced.
   * Otherwise a new content type is created.
   *
   * Equivalent to PUT /contenttypes/{key}
   */
  contentTypesPut?: Maybe<ContentType>;
  /**
   * Restore the deleted content item with the provided key. If a content item with the provided key is not deleted an error is returned.
   *
   * Equivalent to POST /content/{key}:undelete
   */
  contentUndelete?: Maybe<ContentMetadata>;
  /**
   * Create a new display template.
   *
   * Equivalent to POST /displaytemplates
   */
  displayTemplatesCreate?: Maybe<DisplayTemplate>;
  /**
   * Deletes the display template with the provided key.
   *
   * Equivalent to DELETE /displaytemplates/{key}
   */
  displayTemplatesDelete?: Maybe<DisplayTemplate>;
  /**
   * Update an existing display template.
   *
   * Equivalent to PATCH /displaytemplates/{key}
   */
  displayTemplatesPatch?: Maybe<DisplayTemplate>;
  /**
   * Create or replace a display template. If a display template with the provided key exist it is replaced.
   * Otherwise a new display template is created.
   *
   * Equivalent to PUT /displaytemplates/{key}
   */
  displayTemplatesPut?: Maybe<DisplayTemplate>;
  /**
   * Request an access token. This endpoint only supports the 'client_credentials' grant type
   * and will only issue short-lived tokens.
   *
   * Equivalent to POST /oauth/token
   */
  oauthToken?: Maybe<OauthToken>;
  /**
   * Create a new property group.
   *
   * Equivalent to POST /propertygroups
   */
  propertyGroupsCreate?: Maybe<PropertyGroup>;
  /**
   * Deletes the property group with the provided key.
   *
   * Equivalent to DELETE /propertygroups/{key}
   */
  propertyGroupsDelete?: Maybe<PropertyGroup>;
  /**
   * Update an existing property group.
   *
   * Equivalent to PATCH /propertygroups/{key}
   */
  propertyGroupsPatch?: Maybe<PropertyGroup>;
  /**
   * Create or replace a property group. If a property group with the provided key exist it is replaced.
   * Otherwise a new property group is created.
   *
   * Equivalent to PUT /propertygroups/{key}
   */
  propertyGroupsPut?: Maybe<PropertyGroup>;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthChangesetsCreateArgs = {
  changesetInput: ChangesetInput;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthChangesetsCreateItemArgs = {
  changeset: Scalars['String']['input'];
  changesetItemInput: ChangesetItemInput;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthChangesetsDeleteArgs = {
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthChangesetsDeleteItemArgs = {
  changeset: Scalars['String']['input'];
  key: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthChangesetsPutArgs = {
  changesetInput: ChangesetInput;
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentCopyArgs = {
  copyContentOptionsInput?: InputMaybe<CopyContentOptionsInput>;
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentCreateArgs = {
  contentItemInput: ContentItemInput;
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentCreateVersionArgs = {
  contentItemInput: ContentItemInput;
  key: Scalars['String']['input'];
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentDeleteArgs = {
  key: Scalars['String']['input'];
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentDeleteLocaleArgs = {
  key: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentDeleteVersionArgs = {
  key: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentPatchMetadataArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentPatchVersionArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  key: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentTypesCreateArgs = {
  contentTypeInput: ContentTypeInput;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentTypesDeleteArgs = {
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentTypesPatchArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  ignoreDataLossWarnings?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentTypesPutArgs = {
  contentTypeInput: ContentTypeInput;
  ignoreDataLossWarnings?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthContentUndeleteArgs = {
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthDisplayTemplatesCreateArgs = {
  displayTemplateInput: DisplayTemplateInput;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthDisplayTemplatesDeleteArgs = {
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthDisplayTemplatesPatchArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthDisplayTemplatesPutArgs = {
  displayTemplateInput: DisplayTemplateInput;
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthOauthTokenArgs = {
  oauthTokenRequestInput: OauthTokenRequestInput;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthPropertyGroupsCreateArgs = {
  propertyGroupInput: PropertyGroupInput;
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthPropertyGroupsDeleteArgs = {
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthPropertyGroupsPatchArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type MutationViewerAnyAuthPropertyGroupsPutArgs = {
  key: Scalars['String']['input'];
  propertyGroupInput: PropertyGroupInput;
};

/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuth = {
  __typename?: 'MutationViewerBearerAuth';
  /**
   * Creates a new changeset.
   *
   * Equivalent to POST /changesets
   */
  changesetsCreate?: Maybe<Changeset>;
  /**
   * Creates the given changeset item.
   *
   * Equivalent to POST /changesets/{changeset}/items
   */
  changesetsCreateItem?: Maybe<ChangesetItem>;
  /**
   * Deletes the changeset with the provided key. If a changeset with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /changesets/{key}
   */
  changesetsDelete?: Maybe<Changeset>;
  /**
   * Deletes the specified changeset item from the changeset.
   *
   * Equivalent to DELETE /changesets/{changeset}/items/{key}/versions/{version}
   */
  changesetsDeleteItem?: Maybe<ChangesetItem>;
  /**
   * Creates or replaces a changeset. If a changeset with the provided key exist it is replaced.
   * Otherwise a new changeset is created.
   *
   * Equivalent to PUT /changesets/{key}
   */
  changesetsPut?: Maybe<Changeset>;
  /**
   * Create a copy of the content item with the provided key.
   *
   * Equivalent to POST /content/{key}:copy
   */
  contentCopy?: Maybe<ContentMetadata>;
  /**
   * Create a new content item.
   *
   * Equivalent to POST /content
   */
  contentCreate?: Maybe<ContentItem>;
  /**
   * Create a new version of a content item.
   *
   * Equivalent to POST /content/{key}/versions
   */
  contentCreateVersion?: Maybe<ContentItem>;
  /**
   * Deletes the content item with the provided key. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /content/{key}
   */
  contentDelete?: Maybe<ContentMetadata>;
  /**
   * Deletes the content item with the provided key. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /content/{key}/versions
   */
  contentDeleteLocale?: Maybe<ContentItem>;
  /**
   * Deletes the content item with the provided key. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /content/{key}/versions/{version}
   */
  contentDeleteVersion?: Maybe<ContentItem>;
  /**
   * Update an existing content item. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to PATCH /content/{key}
   */
  contentPatchMetadata?: Maybe<ContentMetadata>;
  /**
   * Update an existing content item. If a content item with the provided key does not exist an error is returned.
   *
   * Equivalent to PATCH /content/{key}/versions/{version}
   */
  contentPatchVersion?: Maybe<ContentItem>;
  /**
   * Create a new content type.
   *
   * Equivalent to POST /contenttypes
   */
  contentTypesCreate?: Maybe<ContentType>;
  /**
   * Deletes the content type with the provided key. If a content type with the provided key does not exist an error is returned.
   *
   * Equivalent to DELETE /contenttypes/{key}
   */
  contentTypesDelete?: Maybe<ContentType>;
  /**
   * Update an existing content type. If a content type with the provided key does not exist an error is returned.
   *
   * Equivalent to PATCH /contenttypes/{key}
   */
  contentTypesPatch?: Maybe<ContentType>;
  /**
   * Create or replace a content type. If a content type with the provided key exist it is replaced.
   * Otherwise a new content type is created.
   *
   * Equivalent to PUT /contenttypes/{key}
   */
  contentTypesPut?: Maybe<ContentType>;
  /**
   * Restore the deleted content item with the provided key. If a content item with the provided key is not deleted an error is returned.
   *
   * Equivalent to POST /content/{key}:undelete
   */
  contentUndelete?: Maybe<ContentMetadata>;
  /**
   * Create a new display template.
   *
   * Equivalent to POST /displaytemplates
   */
  displayTemplatesCreate?: Maybe<DisplayTemplate>;
  /**
   * Deletes the display template with the provided key.
   *
   * Equivalent to DELETE /displaytemplates/{key}
   */
  displayTemplatesDelete?: Maybe<DisplayTemplate>;
  /**
   * Update an existing display template.
   *
   * Equivalent to PATCH /displaytemplates/{key}
   */
  displayTemplatesPatch?: Maybe<DisplayTemplate>;
  /**
   * Create or replace a display template. If a display template with the provided key exist it is replaced.
   * Otherwise a new display template is created.
   *
   * Equivalent to PUT /displaytemplates/{key}
   */
  displayTemplatesPut?: Maybe<DisplayTemplate>;
  /**
   * Request an access token. This endpoint only supports the 'client_credentials' grant type
   * and will only issue short-lived tokens.
   *
   * Equivalent to POST /oauth/token
   */
  oauthToken?: Maybe<OauthToken>;
  /**
   * Create a new property group.
   *
   * Equivalent to POST /propertygroups
   */
  propertyGroupsCreate?: Maybe<PropertyGroup>;
  /**
   * Deletes the property group with the provided key.
   *
   * Equivalent to DELETE /propertygroups/{key}
   */
  propertyGroupsDelete?: Maybe<PropertyGroup>;
  /**
   * Update an existing property group.
   *
   * Equivalent to PATCH /propertygroups/{key}
   */
  propertyGroupsPatch?: Maybe<PropertyGroup>;
  /**
   * Create or replace a property group. If a property group with the provided key exist it is replaced.
   * Otherwise a new property group is created.
   *
   * Equivalent to PUT /propertygroups/{key}
   */
  propertyGroupsPut?: Maybe<PropertyGroup>;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthChangesetsCreateArgs = {
  changesetInput: ChangesetInput;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthChangesetsCreateItemArgs = {
  changeset: Scalars['String']['input'];
  changesetItemInput: ChangesetItemInput;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthChangesetsDeleteArgs = {
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthChangesetsDeleteItemArgs = {
  changeset: Scalars['String']['input'];
  key: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthChangesetsPutArgs = {
  changesetInput: ChangesetInput;
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentCopyArgs = {
  copyContentOptionsInput?: InputMaybe<CopyContentOptionsInput>;
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentCreateArgs = {
  contentItemInput: ContentItemInput;
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentCreateVersionArgs = {
  contentItemInput: ContentItemInput;
  key: Scalars['String']['input'];
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentDeleteArgs = {
  key: Scalars['String']['input'];
  permanent?: InputMaybe<Scalars['Boolean']['input']>;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentDeleteLocaleArgs = {
  key: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentDeleteVersionArgs = {
  key: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentPatchMetadataArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentPatchVersionArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  key: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  skipValidation?: InputMaybe<Scalars['Boolean']['input']>;
  version: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentTypesCreateArgs = {
  contentTypeInput: ContentTypeInput;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentTypesDeleteArgs = {
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentTypesPatchArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  ignoreDataLossWarnings?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentTypesPutArgs = {
  contentTypeInput: ContentTypeInput;
  ignoreDataLossWarnings?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthContentUndeleteArgs = {
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthDisplayTemplatesCreateArgs = {
  displayTemplateInput: DisplayTemplateInput;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthDisplayTemplatesDeleteArgs = {
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthDisplayTemplatesPatchArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthDisplayTemplatesPutArgs = {
  displayTemplateInput: DisplayTemplateInput;
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthOauthTokenArgs = {
  oauthTokenRequestInput: OauthTokenRequestInput;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthPropertyGroupsCreateArgs = {
  propertyGroupInput: PropertyGroupInput;
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthPropertyGroupsDeleteArgs = {
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthPropertyGroupsPatchArgs = {
  applicationMergePatchJsonInput: Scalars['String']['input'];
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type MutationViewerBearerAuthPropertyGroupsPutArgs = {
  key: Scalars['String']['input'];
  propertyGroupInput: PropertyGroupInput;
};

/**
 * Represents an OAuth JSON Web Token (JWT) and
 * its expiry in seconds.
 */
export type OauthToken = {
  __typename?: 'OauthToken';
  /** Gets or sets the access token. */
  accessToken?: Maybe<Scalars['String']['output']>;
  /** Gets or sets the expiry time in seconds. */
  expiresIn?: Maybe<Scalars['Int']['output']>;
  /** Gets or sets the token type. */
  tokenType?: Maybe<Scalars['String']['output']>;
};

/** Represents an OAuth token request. */
export type OauthTokenRequestInput = {
  /** Get or sets the subject to act as. */
  actAs?: InputMaybe<Scalars['String']['input']>;
  /** Gets or sets the client id. */
  clientId?: InputMaybe<Scalars['String']['input']>;
  /** Gets or sets the client secret. */
  clientSecret?: InputMaybe<Scalars['String']['input']>;
  /** Gets or sets the grant type. */
  grantType?: InputMaybe<Scalars['String']['input']>;
};

export enum PropertyDataType {
  Array = 'ARRAY',
  Binary = 'BINARY',
  Boolean = 'BOOLEAN',
  Component = 'COMPONENT',
  Content = 'CONTENT',
  Contentreference = 'CONTENTREFERENCE',
  Datetime = 'DATETIME',
  Float = 'FLOAT',
  Integer = 'INTEGER',
  Json = 'JSON',
  String = 'STRING',
  Url = 'URL'
}

/** Represent the definition of semantic property formats for content items. */
export type PropertyFormat = {
  __typename?: 'PropertyFormat';
  /**
   * Represent the basic type that a PropertyFormat
   * is using for data storage and data transport.
   */
  dataType?: Maybe<PropertyDataType>;
  /** Indicates if this property format has been deleted. */
  deleted?: Maybe<Scalars['Boolean']['output']>;
  /** The name and identifier of this PropertyFormat. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** Editor used for managing properties with this format. */
  editor?: Maybe<Scalars['String']['output']>;
  /** Settings for the editor. */
  editorSettings?: Maybe<Scalars['JSON']['output']>;
  /** Enumerations for the format. */
  enum?: Maybe<Enum>;
  /**
   * Represent the basic type that a PropertyFormat
   * is using for data storage and data transport.
   */
  itemType?: Maybe<PropertyDataType>;
  /** The key that identifies this PropertyFormat. */
  key?: Maybe<Scalars['String']['output']>;
};

export type PropertyFormatPage = {
  __typename?: 'PropertyFormatPage';
  /** The items in this paged collection. */
  items?: Maybe<Array<Maybe<PropertyFormat>>>;
  /** The zero-based index of the current page. */
  pageIndex?: Maybe<Scalars['Int']['output']>;
  /** The number of item in each page. Not necessarily the same as the number of items in this page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The estimated total number of items in the collection. May be omitted if the total item count is unknown. */
  totalItemCount?: Maybe<Scalars['Int']['output']>;
};

/** Describes a property group of a ContentType in the CMS. */
export type PropertyGroup = {
  __typename?: 'PropertyGroup';
  /** The display name of this PropertyGroup. */
  displayName?: Maybe<Scalars['String']['output']>;
  /** The key that identifies this PropertyGroup. */
  key: Scalars['String']['output'];
  /** An value that is used to when sorting PropertyGroup instances. */
  sortOrder?: Maybe<Scalars['Int']['output']>;
  /** A string that is used to indicate the source of this PropertyGroup. */
  source?: Maybe<Scalars['String']['output']>;
};

/** Describes a property group of a ContentType in the CMS. */
export type PropertyGroupInput = {
  /** The display name of this PropertyGroup. */
  displayName?: InputMaybe<Scalars['String']['input']>;
  /** The key that identifies this PropertyGroup. */
  key: Scalars['String']['input'];
  /** An value that is used to when sorting PropertyGroup instances. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
  /** A string that is used to indicate the source of this PropertyGroup. */
  source?: InputMaybe<Scalars['String']['input']>;
};

export type PropertyGroupPage = {
  __typename?: 'PropertyGroupPage';
  /** The items in this paged collection. */
  items?: Maybe<Array<Maybe<PropertyGroup>>>;
  /** The zero-based index of the current page. */
  pageIndex?: Maybe<Scalars['Int']['output']>;
  /** The number of item in each page. Not necessarily the same as the number of items in this page. */
  pageSize?: Maybe<Scalars['Int']['output']>;
  /** The estimated total number of items in the collection. May be omitted if the total item count is unknown. */
  totalItemCount?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** A viewer that wraps operations for all available authentication mechanisms */
  viewerAnyAuth?: Maybe<ViewerAnyAuth>;
  /** A viewer that wraps all operations authenticated via security scheme 'Http', which is of type 'http' 'bearer' */
  viewerBearerAuth?: Maybe<ViewerBearerAuth>;
};


export type QueryViewerAnyAuthArgs = {
  http?: InputMaybe<HttpInput>;
};


export type QueryViewerBearerAuthArgs = {
  token: Scalars['String']['input'];
};

export type ValuesListItem = {
  __typename?: 'ValuesListItem';
  displayName?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['JSON']['output']>;
};

export enum VersionStatus {
  Draft = 'DRAFT',
  Inreview = 'INREVIEW',
  Previous = 'PREVIOUS',
  Published = 'PUBLISHED',
  Ready = 'READY',
  Rejected = 'REJECTED',
  Scheduled = 'SCHEDULED'
}

/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuth = {
  __typename?: 'ViewerAnyAuth';
  /**
   * Gets the changeset with the provided key.
   *
   * Equivalent to GET /changesets/{key}
   */
  changeset?: Maybe<Changeset>;
  /**
   * Gets the changeset item for the specified content reference.
   *
   * Equivalent to GET /changesets/{changeset}/items/{key}/versions/{version}
   */
  changesetItem?: Maybe<ChangesetItem>;
  /**
   * Lists the available changeset items for the specified changeset using
   * the provided options.
   *
   * Equivalent to GET /changesets/{changeset}/items
   */
  changesetItemPage?: Maybe<ChangesetItemPage>;
  /**
   * Lists all changeset using the provided options.
   *
   * Equivalent to GET /changesets
   */
  changesetPage?: Maybe<ChangesetPage>;
  /**
   * Get the content item with the provided key and version.
   *
   * Equivalent to GET /content/{key}/versions/{version}
   */
  contentItem?: Maybe<ContentItem>;
  /**
   * List content versions based on the provided query options.
   *
   * Equivalent to GET /content/versions
   */
  contentItemPage?: Maybe<ContentItemPage>;
  /**
   * List the assets that belongs to a content instance.
   *
   * Equivalent to GET /content/{key}/assets
   */
  contentListAssets?: Maybe<ContentMetadataPage>;
  /**
   * List the content items located in a specific container.
   *
   * Equivalent to GET /content/{key}/items
   */
  contentListItems?: Maybe<ContentMetadataPage>;
  /**
   * List versions of the content item with the provided key and the provided options.
   *
   * Equivalent to GET /content/{key}/versions
   */
  contentListVersions?: Maybe<ContentItemPage>;
  /**
   * Get shared metadata about the content instance with the provided key.
   *
   * Equivalent to GET /content/{key}
   */
  contentMetadata?: Maybe<ContentMetadata>;
  /**
   * Get the content path with the provided key.
   *
   * Equivalent to GET /content/{key}/path
   */
  contentMetadataPage?: Maybe<ContentMetadataPage>;
  /**
   * Get the content type with the provided key.
   *
   * Equivalent to GET /contenttypes/{key}
   */
  contentType?: Maybe<ContentType>;
  /**
   * List content types using the provided options.
   *
   * Equivalent to GET /contenttypes
   */
  contentTypePage?: Maybe<ContentTypePage>;
  /**
   * Get the display template with the provided key.
   *
   * Equivalent to GET /displaytemplates/{key}
   */
  displayTemplate?: Maybe<DisplayTemplate>;
  /**
   * List display templates using the provided options.
   *
   * Equivalent to GET /displaytemplates
   */
  displayTemplatePage?: Maybe<DisplayTemplatePage>;
  /**
   * Get the property format with the provided key.
   *
   * Equivalent to GET /propertyformats/{key}
   */
  propertyFormat?: Maybe<PropertyFormat>;
  /**
   * List all property formats using the provided options.
   *
   * Equivalent to GET /propertyformats
   */
  propertyFormatPage?: Maybe<PropertyFormatPage>;
  /**
   * Get the property group with the provided key.
   *
   * Equivalent to GET /propertygroups/{key}
   */
  propertyGroup?: Maybe<PropertyGroup>;
  /**
   * List property groups using the provided options.
   *
   * Equivalent to GET /propertygroups
   */
  propertyGroupPage?: Maybe<PropertyGroupPage>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthChangesetArgs = {
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthChangesetItemArgs = {
  changeset: Scalars['String']['input'];
  key: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthChangesetItemPageArgs = {
  changeset: Scalars['String']['input'];
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthChangesetPageArgs = {
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthContentItemArgs = {
  key: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthContentItemPageArgs = {
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  statuses?: InputMaybe<Array<InputMaybe<VersionStatus>>>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthContentListAssetsArgs = {
  contentTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key: Scalars['String']['input'];
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthContentListItemsArgs = {
  contentTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key: Scalars['String']['input'];
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthContentListVersionsArgs = {
  key: Scalars['String']['input'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  statuses?: InputMaybe<Array<InputMaybe<VersionStatus>>>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthContentMetadataArgs = {
  allowDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthContentMetadataPageArgs = {
  key: Scalars['String']['input'];
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthContentTypeArgs = {
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthContentTypePageArgs = {
  forContainerType?: InputMaybe<Scalars['String']['input']>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthDisplayTemplateArgs = {
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthDisplayTemplatePageArgs = {
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthPropertyFormatArgs = {
  allowDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthPropertyFormatPageArgs = {
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthPropertyGroupArgs = {
  key: Scalars['String']['input'];
};


/** Warning: Not every request will work with this viewer type */
export type ViewerAnyAuthPropertyGroupPageArgs = {
  sources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** A viewer for security scheme 'Http' */
export type ViewerBearerAuth = {
  __typename?: 'ViewerBearerAuth';
  /**
   * Gets the changeset with the provided key.
   *
   * Equivalent to GET /changesets/{key}
   */
  changeset?: Maybe<Changeset>;
  /**
   * Gets the changeset item for the specified content reference.
   *
   * Equivalent to GET /changesets/{changeset}/items/{key}/versions/{version}
   */
  changesetItem?: Maybe<ChangesetItem>;
  /**
   * Lists the available changeset items for the specified changeset using
   * the provided options.
   *
   * Equivalent to GET /changesets/{changeset}/items
   */
  changesetItemPage?: Maybe<ChangesetItemPage>;
  /**
   * Lists all changeset using the provided options.
   *
   * Equivalent to GET /changesets
   */
  changesetPage?: Maybe<ChangesetPage>;
  /**
   * Get the content item with the provided key and version.
   *
   * Equivalent to GET /content/{key}/versions/{version}
   */
  contentItem?: Maybe<ContentItem>;
  /**
   * List content versions based on the provided query options.
   *
   * Equivalent to GET /content/versions
   */
  contentItemPage?: Maybe<ContentItemPage>;
  /**
   * List the assets that belongs to a content instance.
   *
   * Equivalent to GET /content/{key}/assets
   */
  contentListAssets?: Maybe<ContentMetadataPage>;
  /**
   * List the content items located in a specific container.
   *
   * Equivalent to GET /content/{key}/items
   */
  contentListItems?: Maybe<ContentMetadataPage>;
  /**
   * List versions of the content item with the provided key and the provided options.
   *
   * Equivalent to GET /content/{key}/versions
   */
  contentListVersions?: Maybe<ContentItemPage>;
  /**
   * Get shared metadata about the content instance with the provided key.
   *
   * Equivalent to GET /content/{key}
   */
  contentMetadata?: Maybe<ContentMetadata>;
  /**
   * Get the content path with the provided key.
   *
   * Equivalent to GET /content/{key}/path
   */
  contentMetadataPage?: Maybe<ContentMetadataPage>;
  /**
   * Get the content type with the provided key.
   *
   * Equivalent to GET /contenttypes/{key}
   */
  contentType?: Maybe<ContentType>;
  /**
   * List content types using the provided options.
   *
   * Equivalent to GET /contenttypes
   */
  contentTypePage?: Maybe<ContentTypePage>;
  /**
   * Get the display template with the provided key.
   *
   * Equivalent to GET /displaytemplates/{key}
   */
  displayTemplate?: Maybe<DisplayTemplate>;
  /**
   * List display templates using the provided options.
   *
   * Equivalent to GET /displaytemplates
   */
  displayTemplatePage?: Maybe<DisplayTemplatePage>;
  /**
   * Get the property format with the provided key.
   *
   * Equivalent to GET /propertyformats/{key}
   */
  propertyFormat?: Maybe<PropertyFormat>;
  /**
   * List all property formats using the provided options.
   *
   * Equivalent to GET /propertyformats
   */
  propertyFormatPage?: Maybe<PropertyFormatPage>;
  /**
   * Get the property group with the provided key.
   *
   * Equivalent to GET /propertygroups/{key}
   */
  propertyGroup?: Maybe<PropertyGroup>;
  /**
   * List property groups using the provided options.
   *
   * Equivalent to GET /propertygroups
   */
  propertyGroupPage?: Maybe<PropertyGroupPage>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthChangesetArgs = {
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthChangesetItemArgs = {
  changeset: Scalars['String']['input'];
  key: Scalars['String']['input'];
  version: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthChangesetItemPageArgs = {
  changeset: Scalars['String']['input'];
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthChangesetPageArgs = {
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthContentItemArgs = {
  key: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthContentItemPageArgs = {
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  statuses?: InputMaybe<Array<InputMaybe<VersionStatus>>>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthContentListAssetsArgs = {
  contentTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key: Scalars['String']['input'];
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthContentListItemsArgs = {
  contentTypes?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  key: Scalars['String']['input'];
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthContentListVersionsArgs = {
  key: Scalars['String']['input'];
  locales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  statuses?: InputMaybe<Array<InputMaybe<VersionStatus>>>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthContentMetadataArgs = {
  allowDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthContentMetadataPageArgs = {
  key: Scalars['String']['input'];
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthContentTypeArgs = {
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthContentTypePageArgs = {
  forContainerType?: InputMaybe<Scalars['String']['input']>;
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  sources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthDisplayTemplateArgs = {
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthDisplayTemplatePageArgs = {
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthPropertyFormatArgs = {
  allowDeleted?: InputMaybe<Scalars['Boolean']['input']>;
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthPropertyFormatPageArgs = {
  pageIndex?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthPropertyGroupArgs = {
  key: Scalars['String']['input'];
};


/** A viewer for security scheme 'Http' */
export type ViewerBearerAuthPropertyGroupPageArgs = {
  sources?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GetExampleHomepageQueryVariables = Exact<{
  id: Scalars['String']['input'];
  version: Scalars['String']['input'];
}>;


export type GetExampleHomepageQuery = { __typename?: 'Query', viewerAnyAuth?: { __typename?: 'ViewerAnyAuth', contentItem?: { __typename?: 'ContentItem', contentType?: string | null, properties?: any | null, id: string } | null } | null };

export type GetExampleHomepageWithAuthQueryVariables = Exact<{
  id: Scalars['String']['input'];
  version: Scalars['String']['input'];
  token: Scalars['String']['input'];
}>;


export type GetExampleHomepageWithAuthQuery = { __typename?: 'Query', viewerBearerAuth?: { __typename?: 'ViewerBearerAuth', contentItem?: { __typename?: 'ContentItem', contentType?: string | null, properties?: any | null, id: string } | null } | null };

export type GetHomepageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomepageQuery = { __typename?: 'Query', viewerAnyAuth?: { __typename?: 'ViewerAnyAuth', contentItem?: { __typename?: 'ContentItem', contentType?: string | null, properties?: any | null, id: string } | null } | null };

export type GetLayoutQueryVariables = Exact<{
  id: Scalars['String']['input'];
  version: Scalars['String']['input'];
}>;


export type GetLayoutQuery = { __typename?: 'Query', viewerAnyAuth?: { __typename?: 'ViewerAnyAuth', contentItem?: { __typename?: 'ContentItem', contentType?: string | null, properties?: any | null, id: string } | null } | null };


export const GetExampleHomepageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExampleHomepage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewerAnyAuth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]}}]} as unknown as DocumentNode<GetExampleHomepageQuery, GetExampleHomepageQueryVariables>;
export const GetExampleHomepageWithAuthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExampleHomepageWithAuth"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewerBearerAuth"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]}}]} as unknown as DocumentNode<GetExampleHomepageWithAuthQuery, GetExampleHomepageWithAuthQueryVariables>;
export const GetHomepageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomepage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewerAnyAuth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"StringValue","value":"homepage-id","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"version"},"value":{"kind":"StringValue","value":"published","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]}}]} as unknown as DocumentNode<GetHomepageQuery, GetHomepageQueryVariables>;
export const GetLayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLayout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"version"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewerAnyAuth"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"contentItem"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"key"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"version"},"value":{"kind":"Variable","name":{"kind":"Name","value":"version"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"id"},"name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"properties"}}]}}]}}]}}]} as unknown as DocumentNode<GetLayoutQuery, GetLayoutQueryVariables>;