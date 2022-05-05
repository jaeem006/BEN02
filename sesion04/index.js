const express = require('express');
const path = require('path');

const app = express();

app.get('/', function (request, response){
	response
	.status(200)
	.set('Content-Type', 'text/html')
	.send('<h1>Hello World</h1>');
})

app.get('/file', function (request, response){
	response
	.status(200)
	.set('Content-Type', 'text/html')
	.sendFile(path.join(__dirname, '/test.html'))
})

app.get('/file/hola', function (request, response){
	response
	.status(200)
	.set('Content-Type', 'text/html')
	.send('hola')
})


app.listen(8080);

// app.post()
// app.put()
// app.delete()