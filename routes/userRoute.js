const express = require('express');
const { getUsers, getUsersID, createUsers, updateUsers, deleteUsers } =
require("../controller/userController");

const router = express.Router();
router.get('/users', getUsers);
router.get('/users/:id', getUsersID);
router.post('/users', createUsers);
router.put('/users', updateUsers);
router.delete('/users/:id', deleteUsers);

module.exports = router;