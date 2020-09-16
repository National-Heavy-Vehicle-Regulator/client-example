import * as Types from '../../../typeDefs/types';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export type RouteStoreQueryVariables = {};

export type RouteStoreQuery = {__typename?: 'Query'} & {
  routeStore?: Types.Maybe<
    {__typename?: 'RouteStore'} & {
      props?: Types.Maybe<
        {__typename?: 'RouteProps'} & Pick<Types.RouteProps, 'queryLoading'>
      >;
    }
  >;
};

export const RouteStoreDocument = gql`
  query routeStore {
    routeStore @client {
      props {
        queryLoading
      }
    }
  }
`;

/**
 * __useRouteStoreQuery__
 *
 * To run a query within a React component, call `useRouteStoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useRouteStoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRouteStoreQuery({
 *   variables: {
 *   },
 * });
 */
export function useRouteStoreQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    RouteStoreQuery,
    RouteStoreQueryVariables
  >,
) {
  return ApolloReactHooks.useQuery<RouteStoreQuery, RouteStoreQueryVariables>(
    RouteStoreDocument,
    baseOptions,
  );
}
export function useRouteStoreLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    RouteStoreQuery,
    RouteStoreQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<
    RouteStoreQuery,
    RouteStoreQueryVariables
  >(RouteStoreDocument, baseOptions);
}
export type RouteStoreQueryHookResult = ReturnType<typeof useRouteStoreQuery>;
export type RouteStoreLazyQueryHookResult = ReturnType<
  typeof useRouteStoreLazyQuery
>;
export type RouteStoreQueryResult = ApolloReactCommon.QueryResult<
  RouteStoreQuery,
  RouteStoreQueryVariables
>;
