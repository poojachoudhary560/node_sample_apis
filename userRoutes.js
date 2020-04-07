const express = require('express');

const userRouter = express.Router();

userRouter.route('/')
  .get((req, res) => {
    res.send('users');
  });

userRouter.route('/:userId')
  .get((req, res) => {
    res.send('indi users');
  });

module.exports = userRouter;
