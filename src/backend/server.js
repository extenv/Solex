const express = require('express');
const path = require('path');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// Create MySQL connection
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root', // Ganti dengan username MySQL Anda
    password: '', // Ganti dengan password MySQL Anda
    database: 'SolexDB', // Ganti dengan nama database Anda
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database!');
});

// API routes
app.get('/api', (req, res) => {
    // Contoh query ke MySQL
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Failed to fetch data from database' });
            return;
        }
        console.log('Query results:', results);
        res.json(results); // Mengirimkan hasil query ke klien
    });
});

// Serve static files for production
app.use(express.static(path.join(__dirname, '../dist')));

// Handle all other requests by sending index.html (for SPA)
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
