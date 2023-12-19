const express = require("express");
const router = express.Router();

const auth = require("./users.controller");
// const { isAdmin } = require("../../middleware/isAdmin");

// router.get('/', UserController.getAllUsers);
router.get("/", auth.getAllUser);
router.post("/login", auth.login);
router.post("/register", auth.register);
router.patch("/:userId", auth.updateUser);
// router.route("/:userId").delete(isAdmin, auth.deleteUser);

module.exports = router;    
