const Shop = require("./shops");


const createShops = async ( name, voucher, price) => {
    try {
        const newShop = await Shop.create({
            name,
            voucher,
            price,
        });
        return newShop;
    } catch (error) {
        throw error;
    }
};

module.exports = createShops;


