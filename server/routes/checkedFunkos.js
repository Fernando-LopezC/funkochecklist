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

router.get('/', getCheckedFunkos);
router.get('/userid/:userId', getCheckedFunkosUser);
router.get('/funkoid/:funkoId', getCheckedFunkosFunko)

router.post('/', newCheckedFunko);

router.put('/:id', updateCheckedFunko);

router.delete('/:id', deleteCheckedFunko);

module.exports = router