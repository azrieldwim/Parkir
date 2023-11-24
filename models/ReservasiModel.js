const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const Reservasi = sequelize.define('reservasi', {
    reservasi_id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    waktu_reservasi: { type: Sequelize.DATE }
}, {
    comment: "This is the table for reservations",
    timestamps: true,
    freezeTableName: true,
    tableName: 'reservasi',
});

module.exports = Reservasi;

Reservasi.belongsTo(User, { foreignKey: 'user_id' });
 
Reservasi.belongsTo(SlotParkir, { foreignKey: 'parkir_id' });
