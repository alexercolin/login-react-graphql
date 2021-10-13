const { v4 } = require("uuid");

const Mutation = {
  addUser: (parent, { username, password }, { users }) => {
    let newUser = {
      id: v4(),
      username,
      password,
    };
    users.push(newUser);

    return newUser;
  },
  resetLoginAttempts: (parent, { username }, { users }) => {
    let userReset = users.find((user) => {
      return user.username === username;
    });

    userReset.attempts = 0;

    return true;
  },
};

module.exports = Mutation;
