"use client"

import type React from "react"

import { ApolloProvider } from "@apollo/client"
import { client } from "./apollo-client"

export function ApolloClientProvider({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
