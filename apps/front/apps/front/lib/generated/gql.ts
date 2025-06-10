/* eslint-disable */
import * as types from "./graphql"
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core"

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance advantages:
 * 1. It allows us to generate the smallest possible bundle
 * 2. It's compatible with static analysis, so it will work with GraphQL ESLint rules
 * 3. It maps to the correct type based on the operation name
 */
const documents = {
  "\n  mutation Login($input: LoginDto!) {\n    login(input: $input) {\n      user {\n        id\n        email\n        name\n        role\n      }\n      token\n    }\n  }\n":
    types.LoginDocument,
  "\n  query GetUsers {\n    users {\n      id\n      email\n      name\n      role\n      createdAt\n    }\n  }\n":
    types.GetUsersDocument,
}

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  mutation Login($input: LoginDto!) {\n    login(input: $input) {\n      user {\n        id\n        email\n        name\n        role\n      }\n      token\n    }\n  }\n",
): (typeof documents)["\n  mutation Login($input: LoginDto!) {\n    login(input: $input) {\n      user {\n        id\n        email\n        name\n        role\n      }\n      token\n    }\n  }\n"]
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GetUsers {\n    users {\n      id\n      email\n      name\n      role\n      createdAt\n    }\n  }\n",
): (typeof documents)["\n  query GetUsers {\n    users {\n      id\n      email\n      name\n      role\n      createdAt\n    }\n  }\n"]

export function gql(source: string) {
  return (documents as any)[source] ?? {}
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<
  infer TType,
  any
>
  ? TType
  : never
