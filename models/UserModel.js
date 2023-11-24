const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('users', {
    user_id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    username: { type: Sequelize.STRING(25), allowNull: false },
    password: { type: Sequelize.STRING(25), allowNull: false },
    nomor_plat: { type: Sequelize.STRING(20), allowNull: false },
    nomor_telp: { type: Sequelize.INTEGER }
}, {
    comment: "This is the table for all user",
    timestamps: true,
    freezeTableName: true,
    tableName: 'users',
});

module.exports = User;
