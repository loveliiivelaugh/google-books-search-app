const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");
require('dotenv').config();


const port =8000;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");


app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactBooks",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

// Use apiRoutes
app.get('/api/books/:query', async (req, res) => {

  const query = req.params.query;

  console.log(query);

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=AIzaSyDX0AkFlYKSwPlr-BOhGdpH9O6lxiWBDNE`;

  await axios.get(url)
    .then(({data}) => {
      console.log(data.items)
      res.json(data.items);
    })
    .catch(error => console.error(error))

});


// app.use("/api", apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(port, function() {
  console.log(`🌎 ==> API server now on port ${port}!`);
});