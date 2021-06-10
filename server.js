const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const mongoose = require("mongoose");
require('dotenv').config();
const Book = require('./server/models/Book.js');


const port = process.env.PORT || 8000;
const app = express();

app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// connectDB();
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactBooks",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// app.post('/api/books', async (req, res) => {
//   const book = req.body;

//   console.log(book);

//   Book.create(book)
//     .then(response => res.status(200).json(response))
//     .catch(error => res.status(500).json(error));
// })


app.use('/', require("./server/routes"));

app.listen(port, function() {
  console.log(`🌎 ==> API server now on port ${port}!`);
});