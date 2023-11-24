 const Parkir = require('../models/SlotParkirModel');

module.exports = {
    create: async (data) => {
        try {
            let parkir = new Parkir(data);
            let result = await parkir.save();
            return { success: true, result: result };
        } catch (err) {
            return { success: false, result: err };
        }
    },
    
    getAll: async () => {
        try {
            let parkirs = await Parkir.findAll();
            return { success: true, result: parkirs };
        } catch (err) {
            return { success: false, result: err };
        }
    },

    findByID: async (slotID) => {
        try {
            let result = await Parkir.findByPk(slotID);
            if (result === null) {
                return { success: false, result: "Slot not found!" };
            } else {
                return { success: true, result: result };
            }
        } catch (err) {
            return { success: false, result: err };
        }
    },

    updateByID: async (slotID, data) => {
        try {
            let result = await Parkir.update(data, {
                where: { parkir_id: slotID }
            });
            return { success: true, result: result };
        } catch (err) {
            return { success: false, result: err };
        }
    },

    deleteByID: async (slotID) => {
        try {
            let result = await Parkir.destroy({ where: { parkir_id: slotID } });
            return { success: true, result: result };
        } catch (err) {
            return { success: false, result: err };
        }
    }
};
