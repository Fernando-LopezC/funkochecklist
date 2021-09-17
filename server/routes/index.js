const express = require('express');
const router = express.Router();

//Add requires routes 
router.use('/auth', require('./auth'));
router.use('/funkos', require('./funkos'));
router.use('/users', require('./users'));
router.use('/checked-funkos', require('./checkedFunkos'));

module.exports = router;