const Reward = require('./rewards');

const createReward = async (name, description, price, stock) => {
  try {
    const newReward = await Reward.create({
      name,
      description,
      price,
      stock,

    });
    return newReward;
  } catch (error) {
    throw error;
  }
};

module.exports = createReward;
