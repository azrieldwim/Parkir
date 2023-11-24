const Reservasi = require('../models/ReservasiModel');

module.exports = {
    create: async (data) => {
        try {
            let reservasi = new Reservasi(data);
            let result = await reservasi.save();
            return { success: true, result: result };
        } catch (err) {
            return { success: false, result: err };
        }
    },
    
    getAll: async () => {
        try {
            let reservasis = await Reservasi.findAll();
            return { success: true, result: reservasis };
        } catch (err) {
            return { success: false, result: err };
        }
    },

    findByID: async (reservasiID) => {
        try {
            let result = await Reservasi.findByPk(reservasiID);
            if (result === null) {
                return { success: false, result: "Reservasi not found!" };
            } else {
                return { success: true, result: result };
            }
        } catch (err) {
            return { success: false, result: err };
        }
    },

    deleteByID: async (reservasiID) => {
        try {
            let result = await Reservasi.destroy({ where: { reservasi_id: reservasiID } });
            return { success: true, result: result };
        } catch (err) {
            return { success: false, result: err };
        }
    }
};
