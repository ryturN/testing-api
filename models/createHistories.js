const History = require("./histories");

const createHistories = async (user_id, shop_id) => {
    try {
        const newHistory = await History.create({
            user_id,
            shop_id,
            
        });
        return newHistory;
    } catch (error) {
        throw error;
    }
};

module.exports = createHistories;
