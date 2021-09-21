const Funko = require('../models/Funko')
// const express = require('express')
// const router = express.Router
const sequelize = require('../db');

//Get all funkos
const getFunkos = async (req, res) => {
    const funkos = await sequelize.models.funkos.findAndCountAll();
    return res.status(200).json({ data: funkos });
}

//Get all funkos by fandom
const getFunkosFandom = async (req, res) => {
    const {fandom} = req.params;
    const funkos = await sequelize.models.funkos.findByPk(fandom);
    return res.status(200).json({data : funkos})
}

//Get funko by name
const getFunkoName = async (req, res) => {
    const {name} = req.params;
    const funko = await sequelize.models.funkos.findOne({ where: {
        name: name
    }});
    return res.status(200).json({data: funko})
}

//Get Funko by category


//Get Funko by id

//Get Funko by Exclusive = true or false

//Get Funko by Exclusive Store

//TO DO: Optimize endpoints in one function

//Create a new funko 
const newFunko = async (req, res) => {
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
};

//Update a funko by id
const updateFunko = async (req, res) => {
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
};

//Delete a funko by id
const deleteFunko = async (req, res) => {
    const {params: {id}} = req;
    const funko = await sequelize.models.funkos.findByPk(id);
    if(!funko) {
        return res.status(404).json({code: 404, message: 'Funko not found'});
    }
    await funko.destroy();
    return res.json();
};
    

module.exports = {
    getFunkos,
    getFunkosFandom,
    getFunkoName,
    newFunko,
    updateFunko,
    deleteFunko
}