const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

/**
 * @api saveBook()
 * @descr save a book
 * @method POST /api/library
 */
router.post('/', async (req, res) => {
  const book = req.body;

  console.log(book);

  Book.create({
    title: book.details.title,
    authors: book.details.authors,
    description: book.details.description,
    image: book.details.imageLinks.thumbnail,
    link: book.details.previewLink
  })
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500).json(error));
});

/**
 * @api getSavedBooks()
 * @descr get all the saved books
 * @method GET /api/library
 */
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});

    console.log(books);
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * @api deleteSavedBook()
 * @descr delete a saved book by id
 * @method DELETE /api/library
 */
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Book.deleteOne({ _id: req.params.id });

    console.log(deletedBook);
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;