// file: server/app.js
const express = require('express');
const sequelize = require('sequelize');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db/models');


db.sequelize.sync();

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/api/authors', require('./routes/authors'));
app.use('/api/blogs', require('./routes/blogs'))
app.get('/', (req, res) => {
    res.status(200).send("HELP ME!!!!");
});

module.exports = app;

