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

export type CreateEarthquakeMutationVariables = Exact<{
  input: CreateEarthquakeInput;
}>;

export type CreateEarthquakeMutation = {
  __typename?: 'Mutation';
  createEarthquake: { __typename?: 'MessageInterfaceEntity'; message: string };
};

export type UpdateEarthquakeMutationVariables = Exact<{
  input: UpdateEarthquakeInput;
}>;

export type UpdateEarthquakeMutation = {
  __typename?: 'Mutation';
  updateEarthquake: { __typename?: 'MessageInterfaceEntity'; message: string };
};

export type DeleteEarthquakeMutationVariables = Exact<{
  input: DeleteEarthquakeInput;
}>;

export type DeleteEarthquakeMutation = {
  __typename?: 'Mutation';
  deleteEarthquake: { __typename?: 'MessageInterfaceEntity'; message: string };
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
export const CreateEarthquakeDocument = gql`
  mutation CreateEarthquake($input: CreateEarthquakeInput!) {
    createEarthquake(input: $input) {
      message
    }
  }
`;
export type CreateEarthquakeMutationFn = Apollo.MutationFunction<
  CreateEarthquakeMutation,
  CreateEarthquakeMutationVariables
>;

/**
 * __useCreateEarthquakeMutation__
 *
 * To run a mutation, you first call `useCreateEarthquakeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEarthquakeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEarthquakeMutation, { data, loading, error }] = useCreateEarthquakeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEarthquakeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateEarthquakeMutation,
    CreateEarthquakeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateEarthquakeMutation, CreateEarthquakeMutationVariables>(
    CreateEarthquakeDocument,
    options,
  );
}
export type CreateEarthquakeMutationHookResult = ReturnType<typeof useCreateEarthquakeMutation>;
export type CreateEarthquakeMutationResult = Apollo.MutationResult<CreateEarthquakeMutation>;
export type CreateEarthquakeMutationOptions = Apollo.BaseMutationOptions<
  CreateEarthquakeMutation,
  CreateEarthquakeMutationVariables
>;
export const UpdateEarthquakeDocument = gql`
  mutation UpdateEarthquake($input: UpdateEarthquakeInput!) {
    updateEarthquake(input: $input) {
      message
    }
  }
`;
export type UpdateEarthquakeMutationFn = Apollo.MutationFunction<
  UpdateEarthquakeMutation,
  UpdateEarthquakeMutationVariables
>;

/**
 * __useUpdateEarthquakeMutation__
 *
 * To run a mutation, you first call `useUpdateEarthquakeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEarthquakeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEarthquakeMutation, { data, loading, error }] = useUpdateEarthquakeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEarthquakeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateEarthquakeMutation,
    UpdateEarthquakeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<UpdateEarthquakeMutation, UpdateEarthquakeMutationVariables>(
    UpdateEarthquakeDocument,
    options,
  );
}
export type UpdateEarthquakeMutationHookResult = ReturnType<typeof useUpdateEarthquakeMutation>;
export type UpdateEarthquakeMutationResult = Apollo.MutationResult<UpdateEarthquakeMutation>;
export type UpdateEarthquakeMutationOptions = Apollo.BaseMutationOptions<
  UpdateEarthquakeMutation,
  UpdateEarthquakeMutationVariables
>;
export const DeleteEarthquakeDocument = gql`
  mutation DeleteEarthquake($input: DeleteEarthquakeInput!) {
    deleteEarthquake(input: $input) {
      message
    }
  }
`;
export type DeleteEarthquakeMutationFn = Apollo.MutationFunction<
  DeleteEarthquakeMutation,
  DeleteEarthquakeMutationVariables
>;

/**
 * __useDeleteEarthquakeMutation__
 *
 * To run a mutation, you first call `useDeleteEarthquakeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEarthquakeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEarthquakeMutation, { data, loading, error }] = useDeleteEarthquakeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteEarthquakeMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteEarthquakeMutation,
    DeleteEarthquakeMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteEarthquakeMutation, DeleteEarthquakeMutationVariables>(
    DeleteEarthquakeDocument,
    options,
  );
}
export type DeleteEarthquakeMutationHookResult = ReturnType<typeof useDeleteEarthquakeMutation>;
export type DeleteEarthquakeMutationResult = Apollo.MutationResult<DeleteEarthquakeMutation>;
export type DeleteEarthquakeMutationOptions = Apollo.BaseMutationOptions<
  DeleteEarthquakeMutation,
  DeleteEarthquakeMutationVariables
>;
