const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  pages: Number,
  genres: [String],
  rating: Number,
});

module.exports = mongoose.model("Book", bookSchema);
