class InvalidUsernameError extends Error {
  constructor(msg) {
    super(msg);
  }
}

class DuplicatedResourceError extends Error {
  constructor(msg) {
    super(msg);
  }
}

class MissingFieldError extends Error {
  constructor(msg) {
    super(msg);
  }
}

class InvalidAgeError extends Error {
  constructor(msg) {
    super(msg);
  }
}

class NotFoundError extends Error {
  constructor(msg) {
    super(msg);
  }
}

module.exports = {
  InvalidUsernameError,
  DuplicatedResourceError,
  MissingFieldError,
  InvalidAgeError,
  NotFoundError,
};
