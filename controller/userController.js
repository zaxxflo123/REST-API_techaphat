const db = require("../db");
exports.getUsers = (req, res) => {
    db.query("SELECT * FROM user", (err, result) => {
        if (err) {
            res.status(404).json({ error: err.message });
        } else {
            res.json(result[0]);
        }
    });
};

exports.getUsersID = (req, res) => {
    const { id } = req.params;
    db.query("SELECT * FROM users WHERE id = ?", [id], (err, result) => {
        if (err) {
            res.status(404).json({ error: err.message });
        } else {
            res.json(result[0]);
        }
    });
};


exports.createUsers = (req, res) => {
    const { name, email } = req.body;
    db.query("INSERT INTO users(name, email) VALUES(?, ?)", [name, email], (err, result) => {
        if (err) {
            res.status(404).json({ error: err.message });
        } else {
            res.status(201).json({ message: "User created successfully", userId: result.insertId });
        }
    });
};


exports.updateUsers = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, id], (err, result) => {
        if (err) {
            res.status(404).json({ error: err.message });
        } else {
            res.json({ message: "User updated successfully" });
        }
    });
};


exports.deleteUsers = (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM users WHERE id = ?", [id], (err, result) => {
        if (err) {
            res.status(404).json({ error: err.message });
        } else {
            res.json({ message: "User deleted successfully" });
        }
    });
};