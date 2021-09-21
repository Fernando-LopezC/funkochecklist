const User = require('../models/User');
const sequelize = require('../db');

//Get all users
const getUsers = async (req, res) => {
    const users = await sequelize.models.users.findAndCountAll();
    return res.status(200).json({ data: users });
};

//Create a new user

const newUser = async (req, res) => {
    const { body } = req;
    const user = await sequelize.models.users.create({
        firstName: body.firstName,
        lastName: body.lastName,
        userName: body.userName,
        userType: body.userType,
        email: body.email,
        password: body.password
    });
    await user.save();
    return res.status(200).json({ data: user});
};

//Update an user by id
const updateUser = async (req, res) => {
    const {body, params: {id} } = req;
    const user = await sequelize.models.users.findByPk(id);
    if(!user) {
        return res.status(404).json({code: 404, message: 'User not found'});
    }
    const updatedUser = await user.update({
        firstName: body.firstName,
        lastName: body.lastName,
        userName: body.userName,
        userType: body.userType,
        email: body.email,
        password: body.password
    });
    return res.json({ data: updatedUser});
};

//Delete an user by id
const deleteUser = async (req, res) => {
    const {params: {id}} = req;
    const user = await sequelize.models.users.findByPk(id);
    if(!user) {
        return res.status(404).json({code: 404, message: 'User not found'});
    }
    await user.destroy();
    return res.json();
};

module.exports = {
    getUsers,
    newUser,
    updateUser,
    deleteUser
}