require('dotenv').config();

const defaultConfig = {
  username: process.env.JAWSDB_USER,
    password: process.env.JAWSDB_PASSWORD,
    database: process.env.JAWSDB_DATABASE,
    host: process.env.JAWSDB_HOST,
    dialect: 'mariadb'
};

// const productionConfig = {

//     username: process.env.JAWSDB_USER,
//     password: process.env.JAWSDB_PASSWORD,
//     database: process.env.JAWSDB_DATABASE,
//     host: process.env.JAWSDB_HOST,
//     dialect: 'mariadb'
// }

module.exports = {
  development: defaultConfig
  // production: productionConfig
};