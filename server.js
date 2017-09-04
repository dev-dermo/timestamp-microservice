var express = require('express');
var app = express();

app.get('/:date', function(req, res) {
	var timestamp = parseInt(req.params.date);
	if (timestamp) {
		console.log('A number');
	} else {
		console.log('A date string');
	}

	res.send('Hello, World!');
});

app.listen(8080, function() {
	console.log('App listening on port 8080.');
});