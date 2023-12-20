const Reward = require('../../models/rewards');
const createReward = require('../../models/createReward');

exports.createReward = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;

    const newReward = await createReward(name, description, price, stock);

    return res.status(201).json({ status: 'success', message: 'Reward created successfully', data: newReward });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getAllRewards = async (req, res) => {
  try {
    const rewards = await Reward.findAll();
    return res.status(200).json({ status: 'success', message: 'Get all rewards success', data: rewards });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};

exports.getRewardById = async (req, res) => {
  try {
    const rewardId = req.params.rewardId;
    const reward = await Reward.findOne({ where: { id_reward: rewardId } });
    return res.status(200).json({ status: 'success', message: 'Get reward by id success', data: reward });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Internal server error' });
  }
};


