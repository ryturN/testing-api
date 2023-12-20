const express = require('express');
const router = express.Router();
const historyController = require('./histories.controller');


router.post('/', historyController.createHistories);
router.get('/', historyController.getAllHistory);
router.get('/:historyId', historyController.getHistoryById);


module.exports = router;
