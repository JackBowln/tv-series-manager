// lib/apollo-client.ts
import { ApolloClient, InMemoryCache, HttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  return {
    headers: {
      ...headers,
      'x-api-key': apiKey,
    },
  };
});

const wsLink = typeof window !== 'undefined'
  ? new WebSocketLink({
      uri: process.env.NEXT_PUBLIC_WEBSOCKET_URL!,
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            'x-api-key': process.env.NEXT_PUBLIC_API_KEY,
          },
        },
      },
    })
  : null;

const splitLink = typeof window !== 'undefined' && wsLink
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        );
      },
      wsLink,
      authLink.concat(httpLink)
    )
  : authLink.concat(httpLink);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
