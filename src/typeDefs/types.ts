export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  JSONObject: any;
};

export type Query = {
  __typename?: 'Query';
  /** Equivalent to GET /pbs-contacts */
  pbsContactQuery?: Maybe<PbsContactQuery>;
  routeStore?: Maybe<RouteStore>;
};

export type QueryPbsContactQueryArgs = {
  pbsContactFilter?: Maybe<PbsContactFilterInput>;
};

export type PbsContactFilterInput = {
  fields?: Maybe<PbsContactFieldsInput>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<Maybe<Scalars['String']>>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type PbsContactFieldsInput = {
  companyName?: Maybe<Scalars['Boolean']>;
  companyWebsite?: Maybe<Scalars['Boolean']>;
  contactType?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Boolean']>;
  department?: Maybe<Scalars['Boolean']>;
  designation?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  fax?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  ip?: Maybe<Scalars['Boolean']>;
  jurisdiction?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
  mobilePhone?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Boolean']>;
  modifiedOffline?: Maybe<Scalars['Boolean']>;
  postalAddress?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  team?: Maybe<Scalars['Boolean']>;
  workPhone?: Maybe<Scalars['Boolean']>;
};

export type PbsContactQuery = {
  __typename?: 'PbsContactQuery';
  count?: Maybe<Scalars['Float']>;
  data?: Maybe<Array<Maybe<PbsContactPublic>>>;
  filter?: Maybe<Filter>;
};

/** A Performance Based Standards contact */
export type PbsContactPublic = {
  __typename?: 'PbsContactPublic';
  /** Contact company name */
  companyName?: Maybe<Scalars['String']>;
  /** Contact company website */
  companyWebsite?: Maybe<Scalars['String']>;
  /** The contact type */
  contactType?: Maybe<Scalars['String']>;
  /** The date the record was created */
  created?: Maybe<Scalars['String']>;
  /** The id of the user who created the record */
  createdBy?: Maybe<Scalars['Float']>;
  /** Contact department */
  department?: Maybe<Scalars['String']>;
  /** Contact designation */
  designation?: Maybe<Scalars['String']>;
  /** Contact email */
  email?: Maybe<Scalars['String']>;
  /** Contact fax number */
  fax?: Maybe<Scalars['String']>;
  /** Contact first name */
  firstName?: Maybe<Scalars['String']>;
  /** The unique identifier for the application */
  id?: Maybe<Scalars['Float']>;
  /** The IP address last associated with modification of the record */
  ip?: Maybe<Scalars['String']>;
  /** Contact jurisdiction */
  jurisdiction?: Maybe<Scalars['String']>;
  /** Contact last name */
  lastName?: Maybe<Scalars['String']>;
  /** Contact mobile phone */
  mobilePhone?: Maybe<Scalars['String']>;
  /** The date the record was last modified */
  modified?: Maybe<Scalars['String']>;
  /** The id of the user who last modified the record */
  modifiedBy?: Maybe<Scalars['Float']>;
  /** The date the record was last modified offline */
  modifiedOffline?: Maybe<Scalars['String']>;
  /** Contact postal address */
  postalAddress?: Maybe<Scalars['String']>;
  /** Contact status */
  status?: Maybe<Scalars['String']>;
  /** Contact team */
  team?: Maybe<Scalars['String']>;
  /** Contact work phone */
  workPhone?: Maybe<Scalars['String']>;
};

export type Filter = {
  __typename?: 'Filter';
  fields?: Maybe<Fields>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<Maybe<Scalars['String']>>>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Fields = {
  __typename?: 'Fields';
  companyName?: Maybe<Scalars['Boolean']>;
  companyWebsite?: Maybe<Scalars['Boolean']>;
  contactType?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['Boolean']>;
  createdBy?: Maybe<Scalars['Boolean']>;
  department?: Maybe<Scalars['Boolean']>;
  designation?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['Boolean']>;
  fax?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Boolean']>;
  ip?: Maybe<Scalars['Boolean']>;
  jurisdiction?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['Boolean']>;
  mobilePhone?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['Boolean']>;
  modifiedBy?: Maybe<Scalars['Boolean']>;
  modifiedOffline?: Maybe<Scalars['Boolean']>;
  postalAddress?: Maybe<Scalars['Boolean']>;
  status?: Maybe<Scalars['Boolean']>;
  team?: Maybe<Scalars['Boolean']>;
  workPhone?: Maybe<Scalars['Boolean']>;
};

export type RouteStore = {
  __typename?: 'RouteStore';
  routes?: Maybe<Scalars['JSONObject']>;
  props?: Maybe<RouteProps>;
};

export type RouteProps = {
  __typename?: 'RouteProps';
  queryLoading?: Maybe<Scalars['Boolean']>;
};
