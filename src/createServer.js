const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.send('pong\n');
});

app.post('/request', (req, res) => {
    request(req.body, (err, response) => {
        if (err) throw err;
        res.json(response.toJSON());
    });
});

module.exports = app;
