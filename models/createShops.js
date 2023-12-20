const Shop = require('./shops');

const createShops = async (shop_id, id_user, id_reward, jumlahProduct, status) => {
  try {
    const newShop = await Shop.create({
        shop_id,
        id_user,
        id_reward,
        jumlahProduct,
        status,
    });
    return newShop;
  } catch (error) {
    throw error;
  }
};

module.exports = createShops;
