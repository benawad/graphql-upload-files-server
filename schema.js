export default `

input Upload {
  name: String!
  type: String!
  size: Int!
  path: String!
}

type Mutation {
  uploadFile(file: Upload!): Boolean!
}

type Query {
  hello: String
}

`;
