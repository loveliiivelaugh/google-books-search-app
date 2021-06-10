const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/:query', async (req, res) => {

  const query = req.params.query;

  console.log(query);

  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=AIzaSyDX0AkFlYKSwPlr-BOhGdpH9O6lxiWBDNE`;

  await axios.get(url)
    .then(({data}) => {
      // console.log(data.items);
      res.status(200).json(data.items);
    })
    .catch(error => console.error(error))

});

// app.get('/api/books/:query', async (req, res) => {

//   const query = req.params.query;

//   console.log(query);

//   const url = `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&key=AIzaSyDX0AkFlYKSwPlr-BOhGdpH9O6lxiWBDNE`;

//   await axios.get(url)
//     .then(({data}) => {
//       console.log(data.items);
//       res.status(200).json(data.items);
//     })
//     .catch(error => console.error(error))

// });


module.exports = router;