const CheckedFunko = require('../models/CheckedFunko');
const sequelize = require('../db');

//Get all checked funkos
const getCheckedFunkos = async (req, res) => {
    const checkedFunkos = await sequelize.models.checkedFunkos.findAndCountAll();
    return res.status(200).json({ data: checkedFunkos });
};

//Get all checked funkos of an user
const getCheckedFunkosUser = async (req, res) => {
    const {userId} = req.params;
    const checkedFunkos = await sequelize.models.checkedFunkos.findAndCountAll({ where: {
        userId:userId
    }});
    if(!checkedFunkos) {
        return res.status(404).json({code: 404, message: 'User not found'});
    }
    return res.status(200).json({data: checkedFunkos})
}

//Create a new checked funko
const newCheckedFunko = async (req, res) => {
    const { body } = req;
    const checkedFunko = await sequelize.models.checkedFunkos.create({
        userId: body.userId,
        funkoId: body.funkoId  
    });
    await checkedFunko.save();
    return res.status(200).json({ data: checkedFunko });
};

//Update a checked funko by id
const updateCheckedFunko = async (req, res) => {
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
};

//Delete a checked funko by id
const deleteCheckedFunko = async (req, res) => {
    const {params: {id}} = req;
    const checkedFunko = await sequelize.models.checkedFunkos.findByPk(id);
    if(!checkedFunko) {
        return res.status(404).json({code: 404, message: 'Checked funko not found'});
    }
    await checkedFunko.destroy();
    return res.json();
};

module.exports = {
    getCheckedFunkos,
    newCheckedFunko,
    updateCheckedFunko,
    deleteCheckedFunko,
    getCheckedFunkosUser
}
