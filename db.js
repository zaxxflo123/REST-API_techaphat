const mysql = require('mysql2');
require('dotenv').config();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed: " + err.cause.stack);
    }
    console.log("Connected to MySQL Database");
});

module.exports = db;