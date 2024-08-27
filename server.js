const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Bhuvana@2004',
    database: 'blood'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the database');
});

// Route to handle registration
app.post('/register', (req, res) => {
    const { firstName, lastName, age, gender, fatherName, state, district, email, phoneNumber, bloodGroup, country, address, pincode } = req.body;

    const query = 'INSERT INTO donors (firstName, lastName, age, gender, fatherName, state, district, email, phoneNumber, bloodGroup, country, address, pincode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(query, [firstName, lastName, age, gender, fatherName, state, district, email, phoneNumber, bloodGroup, country, address, pincode], (err, result) => {
        if (err) {
            return res.status(500).send('Error saving data');
        }
        res.status(200).send('Registration successful');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${5000}`);
});
