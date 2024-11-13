import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import Constants from 'expo-constants';

// Create an HttpLink for the GraphQL endpoint
const httpLink = new HttpLink({
  uri:'https://api-ap-northeast-1.hygraph.com/v2/clyry9hcp01vm07w0vu0nq94p/master',
});

// Create an Apollo Client instance
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

// Export the Apollo Client instance
export default client;
