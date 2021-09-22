// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
// const permission = require('../middlewares/permission');

const {
    getFunkos,
    getFunkosFandom,
    getFunkoName,
    getFunkoCategory,
    getFunkoId,
    getFunkoBoolean,
    getFunkoStore,
    newFunko,
    updateFunko,
    deleteFunko
} = require('../controllers/funkosController');

router.get('/', getFunkos);
router.get('/fandom/:fandom', getFunkosFandom);
router.get('/name/:name',getFunkoName);
router.get('/category/:category', getFunkoCategory);
router.get('/id/:id', getFunkoId);
router.get('/exclusive/:exclusive', getFunkoBoolean);
router.get('/exclusivestore/:exclusiveStore', getFunkoStore);

router.post('/', newFunko);

router.put('/:id', updateFunko);

router.delete('/:id', deleteFunko);

module.exports = router;