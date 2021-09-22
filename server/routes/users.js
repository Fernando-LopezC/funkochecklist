// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const permission = require('../middlewares/permission');

const {
    getUsers,
    newUser,
    updateUser,
    deleteUser
} = require('../controllers/usersController');

router.get('/', getUsers);

router.post('/', newUser);

router.put('/:id', updateUser);

router.delete('/:id', deleteUser);

module.exports = router;