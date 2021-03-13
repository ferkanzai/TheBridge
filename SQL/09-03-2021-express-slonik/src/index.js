const express = require('express');
const morgan = require('morgan');
// Required db config to pass through all middlewares
const type = process.argv[2].split(':')[1];
const db =
  process.argv[2].split(':')[1] === 'postgres'
    ? require('../config/postgres')
    : require('../config/mongo');
const app = express();

app.use(morgan('combined'));

// Don't forget middleware to parse json body!

// Main route passing db configuration as argument because THAT 'require' returns a function
app.use('/', require('./services')(db));

// Middleware in case no routes matching
app.use((_, __, next) => {
  next(new Error('path not found'));
});

// Middleware to manage errors
app.use((error, _, res, __) => {
  res.status(400).json({
    status: false,
    message: error.message,
  });
});

app.listen(3000, () => {
  console.info('> listening at http://localhost:3000');
});
