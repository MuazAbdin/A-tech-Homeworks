const express = require("express");
const router = express.Router();

const Person = require("../models/Person");

router.get("/people", function (req, res) {
  Person.find({}).then(function (people) {
    res.send(people);
  });
});

router.post("/person", function (req, res) {
  const newPerson = new Person(req.body);
  newPerson.save().then(function () {
    res.send(newPerson);
  });
});

router.patch("/person/:id", function (req, res) {
  Person.findByIdAndUpdate(req.params.id, { age: 80 }, { new: true }).then(
    function (person) {
      res.send(person);
    }
  );
});

router.delete("/apocalypse", function (req, res) {
  Person.deleteMany({}).then(function () {
    res.send({ msg: "collection has been emptied" });
  });
});

module.exports = router;
