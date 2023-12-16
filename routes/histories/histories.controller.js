const History = require('../../models/histories');
const createHistory = require('../../models/createHistories');


exports.createHistory = async (req, res) => {
  try {
    const { user_id, shop_id } = req.body;
    const newHistory = await History.create({ user_id, shop_id });
    return res.status(201).json({ status: 'success', message: 'History created successfully', data: newHistory });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getAllHistory = async (req, res) => {
  try {
    const histories = await History.findAll();
    return res.status(200).json({ status: 'success', message: 'Get all histories success', data: histories });
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
