const express = require('express');
const app = express();

const { config } = require('./config')
const moviesApi = require('./routes/movies.js');

moviesApi(app);

app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`);
});