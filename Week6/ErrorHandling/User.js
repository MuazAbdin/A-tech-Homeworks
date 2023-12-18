const {
  InvalidUsernameError,
  DuplicatedResourceError,
  MissingFieldError,
  InvalidAgeError,
  NotFoundError,
} = require("./CustomErrors");

function User() {
  const users = require("./users");

  const addUser = function (newUser) {
    const userName = newUser.username;
    if (!userName) {
      throw new MissingFieldError("userName is missed");
    }
    if (!userName.match(/^[a-z]+$/i)) {
      throw new InvalidUsernameError();
    }
    let doesExist = users.some((w) => w.username === userName);
    if (doesExist) {
      throw new DuplicatedResourceError();
    }
    if (!newUser.name) {
      throw new MissingFieldError("name is missed");
    }
    if (!newUser.country) {
      throw new MissingFieldError("country is missed");
    }
    if (!newUser.age) {
      throw new MissingFieldError("age is missed");
    }
    if (typeof newUser.age !== "number") {
      throw new InvalidAgeError("Age must be a number");
    }
    users.push(newUser);
  };

  const getUser = function (username) {
    const user = users.find((u) => u.username === username);
    if (!user) {
      throw new NotFoundError("user not found");
    }
    return user;
  };

  const deleteUser = function (username) {};

  const getAll = function () {
    return users;
  };

  return {
    add: addUser,
    get: getUser,
    delete: deleteUser,
    getAll: getAll,
  };
}

module.exports = User;
