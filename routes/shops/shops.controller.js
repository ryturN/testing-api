const Shop = require('../../models/shops');
const createShop = require('../../models/createShops');


exports.createShop = async (req, res) => {
  try {
    const { shop_id, id_user, id_reward, jumlahProduct, status} = req.body;
    const userId = req.id_user; 

    const newShop = await createShop(shop_id, id_user, id_reward, jumlahProduct, status);

    return res.status(201).json({ 
      status: 'success', 
      message: 'Shop created successfully', 
      data: {
        shop_id: newShop.shop_id,
        id_user: newShop.id_user,
        id_reward: newShop.id_reward,
        jumlahProduct: newShop.jumlahProduct,
        status: newShop.status,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};


exports.getAllShops = async (req, res) => {
  try {
    const shops = await Shop.findAll();
    return res.status(200).json({ status: 'success', message: 'Get all shops success', data: shops });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getShopById = async (req, res) => {
  try {
    const shopId = req.params.shopId;
    const shop = await Shop.findOne({ where: { shop_id: shopId } });
    return res.status(200).json({ status: 'success', message: 'Get shop by id success', data: shop });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.redeemShop = async (req, res) => {
  try {
    const shopId = req.params.shopId;
    const shop = await Shop.findOne({ where: { shop_id: shopId } });
    const { shop_id, id_user, id_reward, jumlahProduct, status } = req.body;
    const redeemShop = {
      shop_id,
      id_user,
      id_reward,
      jumlahProduct,
      status,
    };
    await shop.update(redeemShop);
    return res.status(200).json({
      status: 'success',
      message: 'Code successfully redeemed',
      data: {
        shop_id: shop.shop_id,
        id_user: shop.id_user,
        id_reward: shop.id_reward,
        jumlahProduct: shop.jumlahProduct,
        status: shop.status,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};
