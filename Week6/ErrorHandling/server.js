const express = require("express");
const app = express();
const User = require("./User");
const user = new User();
const {
  InvalidUsernameError,
  DuplicatedResourceError,
} = require("./CustomErrors");

app.use(express.json());

app.get("/users", function (req, res) {
  res.send(user.getAll());
});

app.get("/users/:username", function (req, res) {
  const userName = req.params.username;
  try {
    const newUser = user.get(userName);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(404).send({ Error: error.message });
  }
});

app.post("/users", function (req, res) {
  const newUser = req.body;
  const username = newUser.username;
  try {
    user.add(newUser);
    res.status(201).end();
  } catch (error) {
    if (error instanceof InvalidUsernameError) {
      res.status(400).send({ Error: `${username} is not a valid name` });
    } else if (error instanceof DuplicatedResourceError) {
      res.status(409).send({ Error: `User ${username} already exist` });
    } else {
      res.status(400).send({ Error: error.message });
    }
  }
});

// app.delete("/users/:username", function (req, res) {
//   let username = req.params.username;
//   let userIndex = users.findIndex((user) => user.username === username);

//   if (userIndex === -1) {
//     res.status(404).send({ Error: `User ${username} does not exist` });
//   } else {
//     users.splice(userIndex, 1);
//     res.status(204).end();
//   }
// });

const port = 3000;
app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
