const Reward = require('./rewards');

const createReward = async (name, description, price) => {
  try {
    const newReward = await Reward.create({
      name,
      description,
      price,

    });
    return newReward;
  } catch (error) {
    throw error;
  }
};

module.exports = createReward;
