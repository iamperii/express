const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
	{ id: 1, name: 'PERI', age: 20 },
	{ id: 2, name: 'MINURE', age: 21 },
	{ id: 3, name: 'Jim Doe', age: 22 },
];

app.get('/users', (req, res) => {
	res.json(users);
});
app.listen(PORT, () => {
	console.log('Example app listening on port', PORT);
});
