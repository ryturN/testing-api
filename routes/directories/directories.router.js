const express = require('express');
const router = express.Router();
const directoryController = require('./directories.controller');


router.get('/', directoryController.getAllDirectory);
router.get('/:directoryId', directoryController.getDirectoryById);
router.post('/', directoryController.createDirectory);
router.put('/:directoryId', directoryController.updateDirectory);
router.delete('/:directoryId', directoryController.deleteDirectory);

module.exports = router;
