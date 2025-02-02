import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type CreateEarthquakeInput = {
  date: Scalars['DateTime']['input'];
  location: Scalars['String']['input'];
  magnitude: Scalars['Float']['input'];
};

export type DeleteEarthquakeInput = {
  id: Scalars['String']['input'];
};

export type EarthquakeEntity = {
  __typename?: 'EarthquakeEntity';
  date: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  magnitude: Scalars['Float']['output'];
};

export type EarthquakesEntity = {
  __typename?: 'EarthquakesEntity';
  data: Array<EarthquakeEntity>;
  pagination: EarthquakesEntityPagination;
};

export type EarthquakesEntityPagination = {
  __typename?: 'EarthquakesEntityPagination';
  order: Scalars['String']['output'];
  page: Scalars['Int']['output'];
  pages: Scalars['Int']['output'];
  sort: Scalars['String']['output'];
  take: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FindEarthquakesInput = {
  pagination: PaginationCommon;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type MessageInterfaceEntity = {
  __typename?: 'MessageInterfaceEntity';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEarthquake: MessageInterfaceEntity;
  deleteEarthquake: MessageInterfaceEntity;
  updateEarthquake: MessageInterfaceEntity;
};

export type MutationCreateEarthquakeArgs = {
  input: CreateEarthquakeInput;
};

export type MutationDeleteEarthquakeArgs = {
  input: DeleteEarthquakeInput;
};

export type MutationUpdateEarthquakeArgs = {
  input: UpdateEarthquakeInput;
};

export type PaginationCommon = {
  order: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  sort: Scalars['String']['input'];
  take: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  findManyEarthquakes: EarthquakesEntity;
};

export type QueryFindManyEarthquakesArgs = {
  input: FindEarthquakesInput;
};

export type UpdateEarthquakeInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  magnitude?: InputMaybe<Scalars['Float']['input']>;
};

export type FindManyEarthquakesQueryVariables = Exact<{
  input: FindEarthquakesInput;
}>;

export type FindManyEarthquakesQuery = {
  __typename?: 'Query';
  findManyEarthquakes: {
    __typename?: 'EarthquakesEntity';
    data: Array<{
      __typename?: 'EarthquakeEntity';
      id: string;
      date: any;
      location: string;
      magnitude: number;
    }>;
    pagination: {
      __typename?: 'EarthquakesEntityPagination';
      total: number;
      order: string;
      page: number;
      pages: number;
      sort: string;
      take: number;
    };
  };
};

export const FindManyEarthquakesDocument = gql`
  query FindManyEarthquakes($input: FindEarthquakesInput!) {
    findManyEarthquakes(input: $input) {
      data {
        id
        date
        location
        magnitude
      }
      pagination {
        total
        order
        page
        pages
        sort
        take
      }
    }
  }
`;

/**
 * __useFindManyEarthquakesQuery__
 *
 * To run a query within a React component, call `useFindManyEarthquakesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindManyEarthquakesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindManyEarthquakesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFindManyEarthquakesQuery(
  baseOptions: Apollo.QueryHookOptions<
    FindManyEarthquakesQuery,
    FindManyEarthquakesQueryVariables
  > &
    ({ variables: FindManyEarthquakesQueryVariables; skip?: boolean } | { skip: boolean }),
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>(
    FindManyEarthquakesDocument,
    options,
  );
}
export function useFindManyEarthquakesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FindManyEarthquakesQuery,
    FindManyEarthquakesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>(
    FindManyEarthquakesDocument,
    options,
  );
}
export function useFindManyEarthquakesSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>,
) {
  const options =
    baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>(
    FindManyEarthquakesDocument,
    options,
  );
}
export type FindManyEarthquakesQueryHookResult = ReturnType<typeof useFindManyEarthquakesQuery>;
export type FindManyEarthquakesLazyQueryHookResult = ReturnType<
  typeof useFindManyEarthquakesLazyQuery
>;
export type FindManyEarthquakesSuspenseQueryHookResult = ReturnType<
  typeof useFindManyEarthquakesSuspenseQuery
>;
export type FindManyEarthquakesQueryResult = Apollo.QueryResult<
  FindManyEarthquakesQuery,
  FindManyEarthquakesQueryVariables
>;
