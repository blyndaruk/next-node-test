import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type EarthquakesEntity = {
  __typename?: 'EarthquakesEntity';
  id: Scalars['ID']['output'];
};

export type Query = {
  __typename?: 'Query';
  findManyEarthquakes: EarthquakesEntity;
};

export type FindManyEarthquakesQueryVariables = Exact<{ [key: string]: never; }>;


export type FindManyEarthquakesQuery = { __typename?: 'Query', findManyEarthquakes: { __typename?: 'EarthquakesEntity', id: string } };


export const FindManyEarthquakesDocument = gql`
    query FindManyEarthquakes {
  findManyEarthquakes {
    id
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
 *   },
 * });
 */
export function useFindManyEarthquakesQuery(baseOptions?: Apollo.QueryHookOptions<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>(FindManyEarthquakesDocument, options);
      }
export function useFindManyEarthquakesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>(FindManyEarthquakesDocument, options);
        }
export function useFindManyEarthquakesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>(FindManyEarthquakesDocument, options);
        }
export type FindManyEarthquakesQueryHookResult = ReturnType<typeof useFindManyEarthquakesQuery>;
export type FindManyEarthquakesLazyQueryHookResult = ReturnType<typeof useFindManyEarthquakesLazyQuery>;
export type FindManyEarthquakesSuspenseQueryHookResult = ReturnType<typeof useFindManyEarthquakesSuspenseQuery>;
export type FindManyEarthquakesQueryResult = Apollo.QueryResult<FindManyEarthquakesQuery, FindManyEarthquakesQueryVariables>;