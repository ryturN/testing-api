const express = require('express');
const multer = require('multer');
const uploadController = require ('./upload.controller');
const { uploadFile } = require('../../config/storage');



const router = express.Router();


router.post('/upload', uploadFile.single('file'), uploadController);
router.get('/', (req, res) => {
    res.send('Hello World!');
})
module.exports = router;
