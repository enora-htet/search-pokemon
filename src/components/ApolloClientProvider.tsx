"use client";

import { ApolloProvider } from "@apollo/client/react"; 
import { apolloClient } from "@/lib/apolloClient";
import { ReactNode } from "react";

export default function ApolloClientProvider({ children }: { children: ReactNode }) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
