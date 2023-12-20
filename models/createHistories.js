const History = require("./histories");

const createHistories = async (History_id, shop_id, user_id, price, status) => {
    try {
        const newHistory = await History.create({
           History_id,  
           shop_id,
           user_id,
           price,  
           status,
            
        });
        return newHistory;
    } catch (error) {
        throw error;
    }
};

module.exports = createHistories;
