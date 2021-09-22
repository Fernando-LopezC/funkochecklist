const sequelize = require('../db');

//Get all funkos
const getFunkos = async (req, res) => {
    const funkos = await sequelize.models.funkos.findAndCountAll();
    return res.status(200).json({ message: 'List of all Funkos:',data: funkos });
}

//Get all funkos by fandom
const getFunkosFandom = async (req, res) => {
    const {fandom} = req.params;
    const funkos = await sequelize.models.funkos.findAndCountAll({ where: {
        fandom:fandom
    }});
    return res.status(200).json({message: `${fandom} fandom Funkos:`, data : funkos})
}

//Get funko by name
const getFunkoName = async (req, res) => {
    const {name} = req.params;
    const funko = await sequelize.models.funkos.findOne({ where: {
        name: name
    }});
    if(!funko) {
        return res.status(404).json({code: 404, message: 'There are no funkos with that name'});
    }
    return res.status(200).json({data: funko})
}

//Get Funko by category
const getFunkoCategory = async (req, res) => {
    const {category} = req.params;
    const funkos = await sequelize.models.funkos.findAndCountAll({ where: {
        category:category
    }});
    return res.status(200).json({message: `${category} category Funkos:`, data: funkos}) 
}


//Get Funko by id
const getFunkoId = async (req, res) => {
    const {id} = req.params;
    const funko = await sequelize.models.funkos.findByPk(id);
    if(!funko) {
        return res.status(404).json({code: 404, message: 'Funko not found'});
    }
    return res.status(200).json({data: funko})
}

//Get Funko by Exclusive = true or false
const getFunkoBoolean = async (req, res) => {
    let {exclusive} = req.params;
    const funkos = await sequelize.models.funkos.findAndCountAll({ where: {
        exclusive:exclusive
    }})
    return res.status(200).json({message: `All funkos where exclusive status: ${exclusive}`, data: funkos})
}

//Get Funko by Exclusive Store
const getFunkoStore = async (req, res) => {
    const {exclusiveStore} = req.params;
    const funkos = await sequelize.models.funkos.findAndCountAll({ where: {
        exclusiveStore:exclusiveStore
    }});
    return res.status(200).json({message: `Funko Exclusives of: ${exclusiveStore}`, data: funkos})
}

//Create a new funko 
const newFunko = async (req, res) => {
    const { body } = req;
    let funko = await sequelize.models.funkos.findOne({ where: {
        upc: body.upc
    }});

    if (funko) {
        return res.status(400).json({message: 'This upc already exists'})
    }

    funko = await sequelize.models.funkos.create({
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
    return res.status(200).json({ message: 'Funko created succesfully', data: funko});
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
    return res.json({ message: 'Funko Updated succesfully', data: updatedFunko});
};

//Delete a funko by id
const deleteFunko = async (req, res) => {
    const {params: {id}} = req;
    const funko = await sequelize.models.funkos.findByPk(id);
    if(!funko) {
        return res.status(404).json({code: 404, message: 'Funko not found'});
    }
    await funko.destroy();
    return res.status(200).json({message: 'Funko deleted succesfully', data: funko});
};
    

module.exports = {
    getFunkos,
    getFunkosFandom,
    getFunkoName,
    newFunko,
    updateFunko,
    deleteFunko,
    getFunkoCategory,
    getFunkoId,
    getFunkoBoolean,
    getFunkoStore
}