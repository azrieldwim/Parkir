const { Sequelize } = require('sequelize');
const sequelize = require('../database');

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - username
 *          - password
 *          - nomor_plat
 *          - nomor_telp
 *        properties:
 *          username:
 *            type: string
 *            description: Username 
 *          password:
 *            type: string
 *            description: Password
 *          nomor_plat:
 *            type: string
 *            description: Nomor Plat
 *          nomor_telp:
 *            type: int
 *            description: Nomor Telepon
 *        example:
 *           username: John
 *           password: John123
 *           nomor_plat: B 123 JH
 *           nomor_telp: 080808080
 *      Parkir:
 *        type: object
 *        required:
 *          - area
 *          - nomor_slot_parkir
 *          - status
 *        properties:
 *          area:
 *            type: string
 *            description: Area
 *          nomor_slot_parkir:
 *            type: string
 *            description: Nomor Parkir
 *          status:
 *            type: string
 *            description: Status
 *        example:
 *           area: A1
 *           nomor_slot_parkir: 1
 *           status: true
  *      Reservasi:
 *        type: object
 *        required:
 *          - user_id
 *          - parkir_id
 *          - waktu_reservasi
 *        properties:
 *          user_id:
 *            type: string
 *            description: User ID
 *          parkir_id:
 *            type: string
 *            description: Parkir ID
 *          waktu_reservasi:
 *            type: string
 *            description: Waktu Reservasi
 *        example:
 *           user_id: 1
 *           parkir_id: 1
 *           waktu_reservasi: "2023-11-26T12:00:00Z" 
 */

const User = sequelize.define('users', {
    user_id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    username: { type: Sequelize.STRING(25), allowNull: false },
    password: { type: Sequelize.STRING(25), allowNull: false },
    nomor_plat: { type: Sequelize.STRING(20), allowNull: false },
    nomor_telp: { type: Sequelize.INTEGER },
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
    comment: "This is the table for all user",
    timestamps: true,
    freezeTableName: true,
    tableName: 'users',
});

module.exports = User;
