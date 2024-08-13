import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import Constants from 'expo-constants';

// Create an HttpLink for the GraphQL endpoint
const httpLink = new HttpLink({
  uri: Constants.expoConfig?.extra?.HYGRAPH_END_POINT_URL,
});

// Create an Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Export the Apollo Client instance
export default client;
