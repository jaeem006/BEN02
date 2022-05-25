const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4000;

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
});

app.get('/', (req, res) => {
	res.send("Hola mundo")
})

const gods = { 
  Zeus: { 
  	live: 'Olympus', 
  	symbol: 'Thunderbolt' 
  }, 
  Hades : { 
  	live : 'Underworld', 
  	symbol: 'Cornucopia' 
  } 
};

app.get('/gods', (req, res) => {
	res.send(gods);
})

// localhos:4001/gods/Hades
// localhos:4001/gods/Zeus
// localhos:4001/gods/Hermes
app.get('/gods/:name', (req, res) =>{
	console.log(req.query)
	res.send(gods[req.params.name])
})

app.put('/gods/:name', (req, res) =>{
	const god = req.body;
	gods[req.params.name] = god;
	res.send(gods)
})

app.post('/gods/:name', (req, res) => {
	const name = req.params.name;
	const body = req.body;
	gods[name] = body;
	res.send(gods);
})

app.delete('/gods/:name', (req, res) =>{
	const name = req.params.name;
	if (delete gods[name])
		res.send(gods)
	else 
		res.status(500);
})


