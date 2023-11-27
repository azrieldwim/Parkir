const User = require('../models/UserModel');

module.exports = {
    create: async (data) => {
        try {
            let user = new User(data);
            let result = await user.save();
            return { success: true, result: result };
        } catch (err) {
            return { success: false, result: err };
        }
    },
    getAll: async () => {
        try {
            let users = await User.findAll();
            return { success: true, result: users };
        } catch (err) {
            return { success: false, result: err };
        }
    },
    findByID: async (user_id) => {
        try {
            let result = await User.findByPk(user_id);
            if (result === null) {
                return { success: false, result: "User not found!" };
            } else {
                return { success: true, result: result };
            }
        } catch (err) {
            return { success: false, result: err };
        }
    },

    updateByID: async (user_id, data) => {
        try {
            let result = await User.update(data, {
                where: { user_id: user_id }
            });
            return { success: true, result: result };
        } catch (err) {
            return { success: false, result: err };
        }
    },

    deleteByID: async (user_id) => {
        try {
            let result = await User.destroy({ where: { user_id: user_id } });
            return { success: true, result: result };
        } catch (err) {
            return { success: false, result: err };
        }
    }
};
