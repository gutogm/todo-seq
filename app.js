const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// setup express app

const app = express()

// log requests to the console
app.use(logger('dev'));

// parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extend: false}));

// setup a default catch-all route that sends back a welcome message in JSON format
require('./server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
	message: 'welcome to the beginning of nothingness.'
}));

module.exports = app;
