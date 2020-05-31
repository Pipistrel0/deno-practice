import { gql } from "https://deno.land/x/oak_graphql/mod.ts";
// @ts-ignore
export const types = gql`
type Product {
  _id: ID!
  name: String!
  desc: String!
  price: Float!
}

input ProductInput {
  name: String!
  desc: String!
  price: Float!
}

type ResolveType {
  done: Boolean
}

type Query {
  getProducts: [Product]!
  getProductById(_id: ID!): Product!
}

type Mutation {
  createProduct(input: ProductInput!): ID!
  updateProductById(_id: ID!, input: ProductInput!): ResolveType!
  deleteProductById(_id: ID!): ResolveType!
}
`;

