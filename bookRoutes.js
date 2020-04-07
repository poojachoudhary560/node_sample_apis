const express = require('express');
const books = require('./data/books');

const bookRouter = express.Router();

bookRouter.route('/')
  .get((req, res) => {
    res.send(books);
  });

bookRouter.route('/:bookId')
  .get((req, res) => {
    const { bookId } = req.params;
    const book = books.find((obj) => {
      console.log(obj);
      return obj.id === bookId;
    });
    res.send(`book indi ${book.name} ${JSON.stringify(book)}`);
  });

module.exports = bookRouter;
