const express = require('express');
const db = require('./db'); // Import the db connection
const app = express();
const PORT = 3000;

// A simple health check route
app.get('/', (req, res) => {
    res.send('Express server is running and ready to test the DB.');
});

// Route to test database connection and fetch all users
app.get('/users', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM users ORDER BY id ASC');
        res.status(200).json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving users from the database.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});
