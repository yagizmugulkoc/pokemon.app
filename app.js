const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('./config/database'),
    cors = require('cors');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('connected to db ' + config.database);
});

const app = express();
const routes = require('./routes/routes');

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);

app.listen(port, () => {
    console.log('Server running at : ' + port);
});