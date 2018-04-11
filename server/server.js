'use strict';
const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
// const scraper = require('./scraper');

// scraper.getRedditData();
app.use(express.static(path.join(__dirname, '../public/index.html')));
app.use('/', bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/newHeadline', (req, res) => {
    const headlines = JSON.parse(fs.readFileSync(__dirname + '/data/headlines.json'));
    res.json(headlines);
});

app.listen(8080, () => {
    console.log('starting server on port 8080');
});