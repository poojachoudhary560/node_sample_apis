const express = require('express');

const app = express.Router();
const bookRouter = require('./bookRoutes');
const userRouter = require('./userRoutes');
const albumsRouter = require('./albumRoutes');

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/books', bookRouter);
app.use('/users', userRouter);
app.use('/albums', albumsRouter);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
