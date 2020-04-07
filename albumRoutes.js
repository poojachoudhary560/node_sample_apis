const express = require('express');

const albumRouter = express.Router();

albumRouter.route('/')
  .get((req, res) => {
    res.send('albums');
  });

albumRouter.route('/:albumId')
  .get((req, res) => {
    res.send('indi album');
  });

module.exports = albumRouter;
