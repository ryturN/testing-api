const express = require('express');
const router = express.Router();
const rewardController = require('./rewards.controller');


router.post('/', rewardController.createReward);
router.get('/', rewardController.getAllRewards);
router.get('/:rewardId', rewardController.getRewardById);


module.exports = router;
