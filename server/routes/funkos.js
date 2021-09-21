// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
// const permission = require('../middlewares/permission');

const {
    getFunkos,
    getFunkosFandom,
    getFunkoName,
    newFunko,
    updateFunko,
    deleteFunko
} = require('../controllers/funkosController');

router.get('/', getFunkos);
router.get('/fandom/:fandom', getFunkosFandom);
router.get('/name/:name',getFunkoName);

router.post('/', newFunko);

router.put('/', updateFunko);

router.delete('/', deleteFunko);

module.exports = router;