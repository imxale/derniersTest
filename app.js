const express = require('express');
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api/some-endpoint', (req, res) => {
    res.status(200).send({ message: 'This is a GET request' });
});

app.post('/api/addresses', (req, res) => {
    const { streetName, streetNumber } = req.body;
    res.status(201).send({ streetName, streetNumber });
});

app.get('/action', (req, res) => {
    const { name } = req.query;
    if (name) {
        res.status(200).send({ message: `hello ${name}!` });
    } else {
        res.status(400).send({ error: 'Name is required' });
    }
});

// Lancer le serveur seulement si ce n'est pas un module importé
if (!module.parent) {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}

module.exports = app;
