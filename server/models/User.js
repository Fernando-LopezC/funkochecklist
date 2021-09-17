const sequelize = require('sequelize');
const {DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize) => {
    const User = sequelize.define('users', {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        firstName: { type: DataTypes.STRING, allowNull: false },
        lastName: { type: DataTypes.STRING, allowNull: false },
        userName: { type: DataTypes.STRING, unique: true, allowNull: false },
        userType: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, unique: true, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE   
    }, {
        hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt);
            },
            beforeCreate: function (user, options, fn) {
                user.createdAt = new Date();
                user.updatedAt = new Date();
                fn(null, user);
            },
            beforeUpdate: function (user, options, fn) {
                user.updatedAt = new Date();
                fn(null, user);
            }
        }
    });
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    return User;
};
