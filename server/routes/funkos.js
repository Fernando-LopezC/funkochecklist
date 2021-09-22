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

router.get('/',/*permission('admin', 'client'),*/ getFunkos);
router.get('/fandom/:fandom',/*permission('admin', 'client'),*/ getFunkosFandom);
router.get('/name/:name',/*permission('admin', 'client'),*/ getFunkoName);
router.get('/category/:category',/*permission('admin', 'client'),*/ getFunkoCategory);
router.get('/id/:id',/*permission('admin', 'client'),*/ getFunkoId);
router.get('/exclusive/:exclusive',/*permission('admin', 'client'),*/ getFunkoBoolean);
router.get('/exclusivestore/:exclusiveStore',/*permission('admin', 'client'),*/ getFunkoStore);

router.post('/',/*permission('admin'),*/ newFunko);

router.put('/:id',/*permission('admin'),*/ updateFunko);

router.delete('/:id',/*permission('admin'),*/ deleteFunko);

module.exports = router;