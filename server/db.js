// db.js
const { Sequelize } = require('sequelize');

//Importing models
const Funko = require('./models/Funko');
const User = require('./models/User');
const checkedFunko = require('./models/checkedFunko');

//Database connection
const sequelize = new Sequelize('funko_checklist', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    logging: false
});

//Getting models

const models = [
    Funko, 
    User,
    checkedFunko
];

//Registering models into Sequelize
for (let model of models) {
    model(sequelize);
}

//Configuring relations
const {funkos, users, checkedFunkos} = sequelize.models;
checkedFunkos.belongsTo(funkos);
checkedFunkos.belongsTo(users);