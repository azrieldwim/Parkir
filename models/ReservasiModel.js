const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const Reservasi = sequelize.define('reservasi', {
    reservasi_id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    user_id: { type: Sequelize.INTEGER, allowNull: false },
    parkir_id: { type: Sequelize.INTEGER, allowNull: false },
    waktu_reservasi: { type: Sequelize.DATE },
    createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    comment: "This is the table for reservations",
    timestamps: true,
    freezeTableName: true,
    tableName: 'reservasi',
});

module.exports = Reservasi;
 