const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  authors: {
    type: Array,
    required: true
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true
  },
  link: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
