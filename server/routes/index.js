const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authentication');

//Add requires routes 
router.use('/auth', require('./auth'));
router.use('/funkos', /*authenticate,*/ require('./funkos'));
router.use('/users', /*authenticate,*/ require('./users'));
router.use('/checked-funkos', /*authenticate,*/ require('./checkedFunkos'));

module.exports = router;