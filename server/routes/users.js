// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
// const permission = require('../middlewares/permission');

const {
    getUsers,
    newUser,
    updateUser,
    deleteUser
} = require('../controllers/usersController');

router.get('/', getUsers);

router.post('/', newUser);

router.put('/', updateUser);

router.delete('/', deleteUser);

module.exports = router;