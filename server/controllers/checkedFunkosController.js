const sequelize = require('../db');

//Get all checked funkos
const getCheckedFunkos = async (req, res) => {
    const checkedFunkos = await sequelize.models.checkedFunkos.findAndCountAll();
    return res.status(200).json({ message: 'List of all funkos checked', data: checkedFunkos });
};

//Get all checked funkos of an user
const getCheckedFunkosUser = async (req, res) => {
    const {userId} = req.params;
    const checkedFunkos = await sequelize.models.checkedFunkos.findAndCountAll({ where: {
        userId:userId,
    }});
    if(!checkedFunkos) {
        return res.status(404).json({code: 404, message: 'User not found'});
    }
    return res.status(200).json({message: `All funkos checked by userId: ${userId}`, data: checkedFunkos });
}

//Get all users to have a specific funko
const getCheckedFunkosFunko = async (req, res) => {
    const {funkoId} = req.params;
    const checkedFunkos = await sequelize.models.checkedFunkos.findAndCountAll({ where: {
        funkoId:funkoId
    }});
    return res.status(200).json({message: `All users that have checked funko id: ${funkoId}`, data: checkedFunkos});
}

//Create a new checked funko
const newCheckedFunko = async (req, res) => {
    const { body } = req;
    const checkedFunko = await sequelize.models.checkedFunkos.create({
        userId: body.userId,
        funkoId: body.funkoId  
    });
    await checkedFunko.save();
    return res.status(200).json({ message: `Funko id: ${body.funkoId} added to collection of user id: ${body.userId}`, data: checkedFunko });
};

//Update a checked funko by id
const updateCheckedFunko = async (req, res) => {
    const {body, params: {id} } = req;
    const checkedFunko = await sequelize.models.checkedFunkos.findByPk(id);
    if(!checkedFunko) {
        return res.status(404).json({code: 404, message: 'Checked funko not found'});
    }
    const updatedCheckedFunko = await checkedFunko.update({
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
    return res.status(200).json({message: 'Checked Funko deleted succesfully', data: checkedFunko});
};

module.exports = {
    getCheckedFunkos,
    newCheckedFunko,
    updateCheckedFunko,
    deleteCheckedFunko,
    getCheckedFunkosUser,
    getCheckedFunkosFunko
}
