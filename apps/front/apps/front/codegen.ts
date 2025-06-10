import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/graphql`
    : "http://localhost:3001/graphql",
  documents: ["app/**/*.tsx", "components/**/*.tsx", "lib/**/*.ts"],
  generates: {
    "./lib/generated/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
