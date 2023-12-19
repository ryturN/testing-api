const express = require("express");
const router = express.Router();
const newsController = require("./news.controller");

// Endpoint untuk mendapatkan berita dari web
router.get("/", newsController.getNews);

module.exports = router;






