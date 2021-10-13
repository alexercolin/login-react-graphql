//nos resolvers que vai a lógica/regras de negócio

const Query = {
  users: (parent, args, { users }) => users,
  user: (parent, args, { users }) => {
    return users.find((user) => {
      return user.slug === args.slug;
    });
  },
};

module.exports = Query;
