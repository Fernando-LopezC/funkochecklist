const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const permission = require('../middlewares/permission');

//Get all funkos
router.get('/', permission('admin', 'client'), async (req, res) => {
    const funkos = await sequelize.models.funkos.findAndCountAll();
    return res.status(200).json({ data: funkos });
})

//Create a new funko
router.post('/', permission('admin'), async (req, res) => {
    const { body } = req;
    const funko = await sequelize.models.funkos.create({
        name: body.name,
        number: body.number,
        upc: body.upc,
        fandom: body.fandom,
        category: body.category,
        releadeDate: body.releadeDate,
        exclusive: body.exclusive,
        exclusiveStore: body.exclusiveStore,
        image: body.image
    });
    await funko.save();
    return res.status(200).json({ data: funko});
});

//Update a funko by id
router.put('/:id', permission('admin'), async (req, res) => {
    const {body, params: {id} } = req;
    const funko = await sequelize.models.funkos.findByPk(id);
    if(!funko) {
        return res.status(404).json({code: 404, message: 'Funko not found'});
    }
    const updatedFunko = await funko.update({
        name: body.name,
        number: body.number,
        upc: body.upc,
        fandom: body.fandom,
        category: body.category,
        releadeDate: body.releadeDate,
        exclusive: body.exclusive,
        exclusiveStore: body.exclusiveStore,
        image: body.image
    });
    return res.json({ data: updatedFunko});
});

//Delete a funko by id
router.delete('/:id', permission('admin'), async (req, res) => {
    const {params: {id}} = req;
    const funko = await sequelize.models.funkos.findByPk(id);
    if(!funko) {
        return res.status(404).json({code: 404, message: 'Funko not found'});
    }
    await funko.destroy();
    return res.json();
});

module.exports = router;