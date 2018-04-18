const {config} = require('./config.js');
const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.json('Hello hello');
});


app.listen(config.port, () => console.log('listening on port ' + config.port)); // eslint-disable-line no-console