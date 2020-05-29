import { gql } from "https://deno.land/x/oak_graphql/mod.ts";
// @ts-ignore
export const types = gql`
type Product {
  _id: OId
  name: String!
  desc: String!
  price: Int!
}

type OId {
  oid: ID!
}

input ProductInput {
  name: String!
  desc: String!
  price: Int!
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
  updateProductById(input: ID!): ResolveType!
  deleteProductById(input: ID!): ResolveType!
}
`;

