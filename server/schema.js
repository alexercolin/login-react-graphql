const { gql } = require("apollo-server");

const typeDefs = gql`
  type Users {
    id: ID!
    slug: String
    username: String!
    password: String!
    attempts: Int
  }

  type Query {
    users: [Users]
    user(slug: String!): Users
  }

  type Mutation {
    addUser(username: String, password: String): Users
    resetAttempts(username: String): Users
  }
`;

module.exports = typeDefs;
