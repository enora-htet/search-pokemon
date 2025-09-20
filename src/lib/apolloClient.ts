"use client";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: "https://graphql-pokemon2.vercel.app/" }),
  cache: new InMemoryCache({
    typePolicies: {
      Pokemon: { keyFields: ["id"] },
      Query: { fields: { pokemon: { keyArgs: ["name"] } } },
    },
  }),
});
