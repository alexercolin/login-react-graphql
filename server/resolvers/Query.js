//nos resolvers que vai a lógica/regras de negócio

const Query = {
  users: (parent, args, { users }) => users,
  user: (parent, args, { users }) => {
    return users.find((user) => {
      return user.slug === args.slug;
    });
  },
  login: (parent, { username, password }, { users }) => {
    return users.find((user) => {
      return user.username === username && user.password === password
        ? true
        : false;
    });
  },
};

module.exports = Query;
