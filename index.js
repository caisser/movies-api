const express = require('express');
const app = express();

const { config } = require('./config');
const moviesApi = require('./routes/movies.js');
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./util/middleware/errorHandlers.js');

const notFoundHandler = require('./util/middleware/notFoundHandler.js');

// Body parser
app.use(express.json());

// router
moviesApi(app);
// Catch 404
app.use(notFoundHandler);

// Error middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Listening on http://localhost:${config.port}`);
});
