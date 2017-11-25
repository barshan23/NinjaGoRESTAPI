const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// setup the express app
const app = express();


mongoose.connect('mongodb://root:14768925@ds113435.mlab.com:13435/ninja');
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyParser.json());

//initialize routes
app.use('/api',require('./routes/api'));

app.use(function(err, req, res, next) {
	res.status(422).send({error: err.message});
});

app.listen(3000, function() {
	console.log("Now listening to port 30000!");
});
