const express = require('express');
const app = express();

const { config } = require('./config')

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/json', function(req, res) {
    res.json({ hello: 'world' });
});


app.listen(config.port, () => {
    console.log(`Listening on http://localhost:${config.port}`);
});