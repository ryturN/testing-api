const createHistories = require('../../models/createHistories');
const History = require('../../models/histories');

exports.createHistories = async (req, res) => {
  try {
    const { shop_id, id_user, price, status } = req.body;
    const userId = req.id_user;

    // Perbarui nama kolom agar sesuai dengan model dan pastikan tidak ada kolom yang tidak diperlukan
    const newHistory = await createHistories({ shop_id, id_user, price, status });

    return res.status(201).json({ 
      status: 'success', 
      message: 'History created successfully', 
      data: {
        History_id: newHistory.id_history, // Pastikan nama kolom yang benar
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
    // Ubah nama variabel untuk menghindari konflik dengan model
    const histories = await History.findAll();
    return res.status(200).json({ status: 'success', message: 'Get all History success', data: histories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getHistoryById = async (req, res) => {
  try {
    const historyId = req.params.historyId; // Ubah nama variabel
    const history = await History.findOne({ where: { id_history: historyId } }); // Sesuaikan dengan nama kolom yang benar
    return res.status(200).json({ status: 'success', message: 'Get History by id success', data: history });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};
