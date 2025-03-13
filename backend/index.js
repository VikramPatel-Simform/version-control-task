const express = require('express');

const app = express();


let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

app.get('/items', (req, res) => {
    res.json(items);
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});