const express = require('express');
const router = express.Router();
const historyController = require('./histories.controller');


router.post('/', historyController.createHistory);
router.get('/', historyController.getAllHistory);
router.get('/:historyId', historyController.getHistoryById);
router.put('/:historyId', historyController.updateHistory);
router.delete('/:historyId', historyController.deleteHistory);

module.exports = router;
