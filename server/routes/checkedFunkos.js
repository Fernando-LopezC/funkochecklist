// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
// const permission = require('../middlewares/permission');

const {
    getCheckedFunkos,
    getCheckedFunkosUser,
    getCheckedFunkosFunko,
    newCheckedFunko,
    updateCheckedFunko,
    deleteCheckedFunko
} = require('../controllers/checkedFunkosController');

router.get('/',/*permission('admin', 'client'),*/ getCheckedFunkos);
router.get('/userid/:userId',/*permission('admin', 'client'),*/ getCheckedFunkosUser);
router.get('/funkoid/:funkoId',/*permission('admin', 'client'),*/ getCheckedFunkosFunko)

router.post('/',/*permission('admin', 'client'),*/ newCheckedFunko);

router.put('/:id',/*permission('admin', 'client'),*/ updateCheckedFunko);

router.delete('/:id',/*permission('admin', 'client'),*/ deleteCheckedFunko);

module.exports = router