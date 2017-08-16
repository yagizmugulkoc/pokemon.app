const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./config/database');

const port = 3000,
    app = express();

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('connected to db ' + config.database);
});

app.use(bodyParser.json());

app.listen(port, () => {
    console.log('Server running at : ' + port);
});