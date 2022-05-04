const fs = require('fs');
const path = require('path');

fs.writeFile(
	path.join(__dirname,'/ejemplo01.txt'),
	'Este es el contenido de mi archivo',
	{encoding : 'utf-8'},
	(error) =>  {
		if (error) throw error;
		console.log('writeFile',"Archivo creado")
	})

fs.readFile(
	path.join(__dirname,'/ejemplo01.txt'), 
	{encoding: 'utf-8'},
	function (error, data) {
  		if (error) 
  			return console.error(error);
  		console.log('readFile:',data)
	})

fs.appendFile(
	path.join(__dirname, '/ejemplo01.txt'),
	'\nEsto es una nueva línea',
	(err) => {
		if (err) throw err;
		console.log('appendFile','Archivo actualizado!');
});








fs.writeFileSync(
	path.join(__dirname, '/ejemplo_1.txt'),
	'Este es el contenido de mi archivo', 
	{encoding: 'utf-8'});

console.log('writeFileSync:','Archivo creado!');

data = fs.readFileSync(
	path.join(__dirname, '/ejemplo_1.txt'), 
	{encoding: 'utf-8'});

console.log('readFileSync:', data)

fs.appendFileSync(
	path.join(__dirname, '/ejemplo_1.txt'),
	'\nEsto es una nueva línea');

console.log('appendFile:','Archivo actualizado!');