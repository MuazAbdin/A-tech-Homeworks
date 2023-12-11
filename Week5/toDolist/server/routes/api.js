const express = require("express");
const router = express.Router();

const Priority = Object.freeze({
  HIGH: "HIGH",
  MID: "MID",
  LOW: "LOW",
});

const togglePriority = (priority) => {
  switch (priority) {
    case Priority.HIGH:
      return Priority.LOW;
    case Priority.MID:
      return Priority.HIGH;
    default:
      return Priority.MID;
  }
};

const todos = [];
let id = 1;

router.get("/todos", function (req, res) {
  res.send(todos);
});

router.post("/todo", function (req, res) {
  const text = req.body.text;
  const newTodo = {
    _id: id++,
    text: text,
    complete: false,
    priority: Priority.LOW,
  };
  todos.push(newTodo);
  res.send(todos);
});

router.put("/todo/:todoID", function (req, res) {
  const todoID = parseInt(req.params.todoID);
  const idx = todos.findIndex((t) => t._id === todoID);
  const field = req.body.updateField;
  if (field === "complete") {
    todos[idx].complete = !todos[idx].complete;
  } else {
    todos[idx].priority = togglePriority(todos[idx].priority);
  }
  res.send(todos);
});

router.delete("/todo/:todoID", function (req, res) {
  const todoID = parseInt(req.params.todoID);
  const idx = todos.findIndex((t) => t._id === todoID);
  todos.splice(idx, 1);
  // console.log("hello");
  res.send(todos);
});

module.exports = router;
