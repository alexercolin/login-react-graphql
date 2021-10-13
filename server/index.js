const { users } = require("./db");
const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Users {
    id: ID!
    slug: String!
    username: String
    password: String
    attempts: Int
  }

  type Query {
    users: [Users]
    user(slug: String!): Users
  }
`;

//nos resolvers que vai a lógica/regras de negócio
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args, ctx) => {
      return users.find((user) => {
        return user.slug === args.slug;
      });
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
