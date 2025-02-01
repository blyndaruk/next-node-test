'use client';

import { ApolloLink, from, HttpLink, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

import { createClient } from 'graphql-ws';

import { PropsWithChildren } from 'react';

import { customToast } from '@/packages/react-toast';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  // graphQL error
  if (graphQLErrors)
    graphQLErrors.forEach(({ message }) => {
      customToast(message, 'error');
    });
  // network error
  if (networkError && !graphQLErrors) {
    customToast(networkError.message, 'error');
  }
});

// client
const makeClient = () => {
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: `${process.env.NEXT_PUBLIC_WS_URL}`,
    }),
  );

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpLink,
  );

  return new NextSSRApolloClient({
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : from([errorLink, splitLink]),
    cache: new NextSSRInMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        notifyOnNetworkStatusChange: true,
      },
      mutate: {
        awaitRefetchQueries: true,
      },
    },
  });
};

// apollo client side
export const ApolloClient = ({ children }: PropsWithChildren) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
