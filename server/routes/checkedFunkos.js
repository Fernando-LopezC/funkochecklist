const express = require('express');
const router = express.Router();
const sequelize = require('../db');

//Get all checked funkos
router.get('/', async (req, res) => {
    const users = await sequelize.models.checkedFunkos.findAndCountAll();
    return res.status(200).json({ data: checkedFunkos });
});

//Create a new checked funko
router.post('/', async (req, res) => {
    const { body } = req;
    const checkedFunko = await sequelize.models.checkedFunkos.create({
        userId: body.userId,
        funkoId: body.funkoId  
    });
    await checkedFunko.save();
    return res.status(200).json({ data: checkedFunko });
});

//Update a checked funko by id
router.put('/:id', async (req, res) => {
    const {body, params: {id} } = req;
    const checkedFunko = await sequelize.models.checkedFunkos.findByPk(id);
    if(!checkedFunko) {
        return res.status(404).json({code: 404, message: 'Checked funko not found'});
    }
    const updatedCheckedFunko = await user.update({
        userId: body.userId,
        funkoId: body.funkoId 
    });
    return res.json({ data: updatedCheckedFunko});
});

//Delete a checked funko by id
router.delete('/:id', async (req, res) => {
    const {params: {id}} = req;
    const checkedFunko = await sequelize.models.checkedFunkos.findByPk(id);
    if(!checkedFunko) {
        return res.status(404).json({code: 404, message: 'Checked funko not found'});
    }
    await checkedFunko.destroy();
    return res.json();
});

module.exports = router