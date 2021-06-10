const express = require('express');
const router = express.Router();

const bookRoutes = require('./bookRoutes');
const libraryRoutes = require('./libraryRoutes');

router.use('/api/books', bookRoutes);
router.use('/api/library', libraryRoutes);

//api routes...

module.exports = router;