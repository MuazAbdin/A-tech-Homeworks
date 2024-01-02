const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  hair: String,
  eyes: String,
  weight: Number,
  height: Number,
  salary: Number,
  numKids: Number,
  kids: [],
});

module.exports = mongoose.model("Person", personSchema);
