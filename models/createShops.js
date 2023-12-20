const Shop = require('./shops');

const createShops = async (name, voucher, price, userId) => {
  try {
    const newShop = await Shop.create({
      name,
      voucher,
      price,
      id_user: userId, // Menyertakan id_user saat membuat toko baru
    });
    return newShop;
  } catch (error) {
    throw error;
  }
};

module.exports = createShops;
