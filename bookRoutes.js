const express = require('express');

const bookRouter = express.Router();

bookRouter.route('/')
  .get((req, res) => {
    res.send('books');
  });

bookRouter.route('/:bookId')
  .get((req, res) => {
    res.send('book indi');
  });

module.exports = bookRouter;
