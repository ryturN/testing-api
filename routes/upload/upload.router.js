const express = require('express');
const multer = require('multer');
const uploadController = require ('./upload.controller');
const { uploadFile } = require('../config/storage');


const router = express.Router();
const uploadFile = multer();


router.post('/upload', uploadFile.single('file'), uploadController);

module.exports = router;
