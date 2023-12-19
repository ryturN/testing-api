const History = require("./histories");

const createHistories = async (id_user, shop_id) => {
    try {
        const newHistory = await History.create({
            id_user,
            shop_id,
            
        });
        return newHistory;
    } catch (error) {
        throw error;
    }
};

module.exports = createHistories;
