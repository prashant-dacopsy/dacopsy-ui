import { ApolloClient, InMemoryCache } from '@apollo/client';

// Create an Apollo Client instance
export const client = new ApolloClient({
  uri: 'http://100.27.127.192:3000/app/', // Update with your GraphQL server URL
  cache: new InMemoryCache(),
});
