const express = require('express');
const router = express.Router();
const shopController = require('./shops.controller');

router.post('/', shopController.createShop);
router.get('/', shopController.getAllShops);
router.get('/:shopId', shopController.getShopById);
router.put('/:shopId', shopController.updateShop);


module.exports = router;




