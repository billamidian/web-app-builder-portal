import { ApolloClient, InMemoryCache, createHttpLink, from } from "@apollo/client"
import { onError } from "@apollo/client/link/error"

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    )
  if (networkError) console.error(`[Network error]: ${networkError}`)
})

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL ? `${process.env.NEXT_PUBLIC_API_URL}/graphql` : "http://localhost:3001/graphql",
  credentials: "include", // This is important for cookies
})

export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
})
