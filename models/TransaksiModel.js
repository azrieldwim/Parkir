const { Sequelize } = require('sequelize');
const sequelize = require('../database');

const RiwayatTransaksi = sequelize.define('riwayat_transaksi', {
    transaction_id: { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true },
    durasi: { type: Sequelize.TIME },
    waktu_keluar: { type: Sequelize.DATE },
    jumlah_pembayaran: { type: Sequelize.INTEGER }
}, {
    comment: "This is the table for transaction history",
    timestamps: true,
    freezeTableName: true,
    tableName: 'riwayat_transaksi',
});
 
RiwayatTransaksi.belongsTo(Reservasi, { foreignKey: 'reservasi_id' });

module.exports = RiwayatTransaksi;