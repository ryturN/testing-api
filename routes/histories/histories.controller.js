const Shop = require('../../models/histories');
const createHistories = require('../../models/createHistories');
const History = require('../../models/histories');


exports.createHistories = async (req, res) => {
  try {
    const { History_id, shop_id, id_user, price, status} = req.body;
    const userId = req.id_user; 

    const newHistory = await createShop(History_id, shop_id, id_user, price, status);

    return res.status(201).json({ 
      status: 'success', 
      message: 'History created successfully', 
      data: {
       History_id: newHistory.History_id,
       shop_id: newHistory.shop_id,
       id_user: newHistory.id_user,
       price: newHistory.price,
       status: newHistory.status,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};


exports.getAllHistory = async (req, res) => {
  try {
    const History = await History.findAll();
    return res.status(200).json({ status: 'success', message: 'Get all History success', data: History });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getHistoryById = async (req, res) => {
  try {
    const History_id = req.params.historyId;
    const shop = await Shop.findOne({ where: { History_id: historyId } });
    return res.status(200).json({ status: 'success', message: 'Get shop by id success', data: history });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};
