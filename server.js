const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware untuk mengurai JSON
app.use(bodyParser.json());

// Middleware untuk melayani file statis
app.use(express.static('public'));

// Endpoint untuk menerima langganan email
app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        console.log('Tidak ada email yang diterima');
        return res.status(400).json({ error: 'Email is required' });
    }

    console.log('New subscriber:', email);

    res.status(200).json({ message: 'Subscription successful' });
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
