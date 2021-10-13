const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const { users } = require("./db");


const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation
  },
  context:{
    users
  }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
