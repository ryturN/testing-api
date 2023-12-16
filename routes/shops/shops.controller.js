const Shop = require('../../models/shops');
const createShop = require('../../models/createShops');


exports.createShop = async (req, res) => {
  try {
    const { name, voucher, price } = req.body;
    const newShop = await createShop(name, voucher, price);
    return res.status(201).json({ status: 'success', message: 'shop created successfully', data: newShop });
  } catch (error) {
    throw error;
  }
};

exports.getAllShops = async (req, res) => {
  try {
    const shops = await Shop.findAll();
    return res.status(200).json({ status: 'success', message: 'get all shops success', data: shops });
  } catch (error) {
    throw error;
  }
};

exports.getShopById = async (req, res) => {
  try {
    const shopId = req.params.shopId;
    const shop = await Shop.findOne({ where: { shop_id: shopId } });
    return res.status(200).json({ status: 'success', message: 'get shop by id success', data: shop });
  } catch (error) {
    throw error;
  }
};

exports.updateShop = async (req, res) => {
  try {
    const shopId = req.params.shopId;
    const shop = await Shop.findOne({ where: { shop_id: shopId } });
    const { name, voucher, price } = req.body;
    const updatedShop = {
      name,
      voucher,
      price,
    };
    await shop.update(updatedShop);
    return res.status(200).json({ status: 'success', message: 'update shop success' });
  } catch (error) {
    throw error;
  }
};
