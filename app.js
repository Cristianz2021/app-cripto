const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const morgan = require('morgan');
require("dotenv").config();

//Settings
const port = process.env.PORT || 3000;
//Motor de plantilla
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Static files.
app.use(express.static(__dirname + '/public'));

//middlewares
app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//routes
app.use('/', require('./routes/router'));
//Server is listenning
app.listen(port, () => {
	console.log('Todo esta bien');
});