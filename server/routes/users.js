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

router.get('/',/*permission('admin'),*/ getUsers);

router.post('/',/*permission('admin'),*/ newUser);

router.put('/:id',/*permission('admin', 'client'),*/ updateUser);

router.delete('/:id',/*permission('admin, 'client'),*/ deleteUser);

module.exports = router;