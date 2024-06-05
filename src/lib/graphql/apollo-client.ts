import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { createFetchMultipartSubscription } from "@apollo/client/utilities/subscriptions/urql";
import { createClient } from 'graphql-ws';

const url = process.env.NEXT_PUBLIC_GRAPHQL_URL!
const apiKey = process.env.NEXT_PUBLIC_API_KEY!;
const websocketUrl = process.env.NEXT_PUBLIC_WEBSOCKET_URL!

const httpLink = new HttpLink({
  uri: url,
  headers: {
    "x-api-key": apiKey,
  },
});

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
      createClient({
        url: websocketUrl,
      })
    )
    : null;


const splitLink =
  typeof window !== "undefined" && wsLink != null
    ? split(
      ({ query }) => {
        const def = getMainDefinition(query);
        return (
          def.kind === "OperationDefinition" &&
          def.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    )
    : httpLink;


const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

export default client;
