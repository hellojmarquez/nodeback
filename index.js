const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.get('/api', (req, res) => {
	// res.writeHead(200, { 'Content-type': 'text/html' });
	res.json({ message: 'Hola desde el servidor!' });

	res.end();
});
app.post('/post', (req, res) => {
	if (req.method == 'POST') {
		console.log('conectado');
		// res.writeHead(200, { 'Content-type': 'text/html' });
		res.json({ message: 'Hola desde el servidor!' });
		// let f = console.log('conectado al server');
		// res.end(f);
	}
	if (req.method == 'GET') res.end('metodo get');
});

app.listen(3000);
console.log('corriendo server');
