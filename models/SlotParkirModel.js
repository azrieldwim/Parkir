const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const SlotParkir = sequelize.define('slot_parkir', {
    parkir_id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    area: { type: Sequelize.STRING(5) },
    nomor_slot_parkir: { type: Sequelize.INTEGER, allowNull: false },
    status: { type: Sequelize.BOOLEAN, allowNull: false },
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
    comment: "This is the table for parking ",
    timestamps: true,
    freezeTableName: true,
    tableName: 'slot_parkir',
});

module.exports = SlotParkir;
