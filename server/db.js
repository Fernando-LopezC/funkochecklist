// db.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

//Importing models
const Funko = require('./models/Funko');
const User = require('./models/User');
const CheckedFunko = require('./models/CheckedFunko');

//Database connection
const sequelize = new Sequelize(process.env.JAWSDB_DATABASE, process.env.JAWSDB_USER, process.env.JAWSDB_PASSWORD, {
    host: process.env.JAWSDB_HOST,
    dialect: 'mariadb',
    logging: false
});

//Getting models

const models = [
    Funko, 
    User,
    CheckedFunko
];

//Registering models into Sequelize
for (let model of models) {
    model(sequelize);
}

//Configuring relations
const {funkos, users, checkedFunkos} = sequelize.models;
checkedFunkos.belongsTo(funkos);
checkedFunkos.belongsTo(users);

module.exports = sequelize;