// const History = require('../../models/histories');
const Shop = require('../../models/shops');

// const createHistory = require('../../models/createHistories');

exports.getAllHistory = async (req, res) => {
  try {
    const histories = await Shop.findAll({
      // attributes: ['shop_id', 'name', 'voucher', 'price'],
    });

   
    const result = histories.map(shop => {
      return {
        shop_id: shop.shop_id,
        name: shop.name,
        voucher: shop.voucher,
        price: shop.price,
      };
    });

    return res.status(200).json({
      status: 'success',
      message: 'Get all histories success',
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getHistoryById = async (req, res) => {
  try {
    const historyId = req.params.historyId;
    const history = await History.findOne({ where: { history_id: historyId } });
    if (!history) {
      return res.status(404).json({ status: 'fail', message: 'History not found' });
    }
    return res.status(200).json({ status: 'success', message: 'Get history by id success', data: history });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.updateHistory = async (req, res) => {
  try {
    const historyId = req.params.historyId;
    const history = await History.findOne({ where: { history_id: historyId } });
    if (!history) {
      return res.status(404).json({ status: 'fail', message: 'History not found' });
    }
    

    const { user_id, shop_id } = req.body;

    await history.update({ user_id, shop_id });

    return res.status(200).json({ status: 'success', message: 'Update history success' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.deleteHistory = async (req, res) => {
  try {
    const historyId = req.params.historyId;
    const history = await History.findOne({ where: { history_id: historyId } });
    if (!history) {
      return res.status(404).json({ status: 'fail', message: 'History not found' });
    }


    await history.destroy();

    return res.status(200).json({ status: 'success', message: 'Delete history success' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};
