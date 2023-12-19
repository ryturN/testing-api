const Shop = require('../../models/shops');
const createShop = require('../../models/createShops');



exports.createShop = async (req, res) => {
  try {
    const { name, voucher, price } = req.body;
    const userId = req.userId; 

   
    const newShop = await createShop(name, voucher, price, userId);

    return res.status(201).json({ status: 'success', message: 'shop created successfully', data: newShop });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
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

exports.redeemShop = async (req, res) => {
  try {
    const shopId = req.params.shopId;
    const shop = await Shop.findOne({ where: { shop_id: shopId } });
    const { name, voucher, price } = req.body;
    const redeemShop = {
      name,
      voucher,
      price,
    };
    await shop.update(redeemShop);
    return res.status(200).json({
       status: 'success', 
       message: 'Code successfully redeemed',
       data: {
         name: shop.name,
         voucher: shop.voucher,
         price: shop.price,
       },
       });
  } catch (error) {
    throw error;
  }
};
