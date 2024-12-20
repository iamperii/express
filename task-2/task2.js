const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const products = [
	{ id: 1, products: 'Milk', price: 20 },
	{ id: 2, products: 'Bread', price: 10 },
	{ id: 3, products: 'Cheese', price: 30 },
	{ id: 4, products: 'Butter', price: 25 },
	{ id: 5, products: 'Eggs', price: 15 },
	{ id: 6, products: 'Yogurt', price: 25 },
	{ id: 7, products: 'Ice Cream', price: 50 },
	{ id: 8, products: 'Cereal', price: 15 },
	{ id: 9, products: 'Orange Juice', price: 20 },
	{ id: 10, products: 'Apple Juice', price: 20 },
];

app.get('/products', (req, res) => {
	const count = parseInt(req.query.count);
	const offset = parseInt(req.query.offset);

	if (!isNaN(count) && !isNaN(offset)) {
		res.json({
			products: products.slice(offset, offset + count),
			count: products.length,
		});
	} else {
		res.json(products);
	}
});

app.get('/products/:id', (req, res) => {
	let id = req.params.id;
	let product = products.find((product) => product.id == id);
	if (product) {
		res.json(product);
	} else {
		res.status(404).json({ error: 'Product not found' });
	}
});

app.listen(PORT, () => {
	console.log('Example app listening on port', PORT);
});
