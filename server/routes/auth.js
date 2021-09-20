const express = require('express');
const router = express.Router();
const sequelize = require('../db');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    const { body } = req;
    const user = await sequelize.models.users.findOne({ where: {
        email: body.email
    }});
    
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    if (!user.validPassword(body.password)) {
        return res.status(401).json({ message: 'Wrong Password' });
    }

    //Generate token
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRETKEY, {
        expiresIn: process.env.JWT_EXPIRESIN
    });

    return res.json({
        message: 'Authenticated successfully ',
        token
    });
});

router.post('/signup', async (req, res) => {
    const { body } = req;
    let user = await sequelize.models.users.findOne({ where: {
        email: body.email
    }});

    //Validation to know if user's email already exists
    if (user) {
        return res.status(400).json({ message: 'This email is already registered'})
    }

    //Creating the new user
    user = await sequelize.models.users.create({
        firstName: body.firstName,
        lastName: body.lastName,
        userName: body.userName,
        userType: 'client',
        email: body.email,
        password: body.password
    });

    //Saving user
    await user.save();
    return res.json({ message: 'Your account has been created succesfully' })
});

module.exports = router;
