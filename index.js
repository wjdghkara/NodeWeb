var express = require('express');
var app = express();
var port = 3000;

app.get('/', (req, res, next) => {
	res.send('hello world!');
});

app.listen(port, () => {
	console.log('Server is running at ${port}');
});
