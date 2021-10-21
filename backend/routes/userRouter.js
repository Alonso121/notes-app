const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

//Register User
router.post("/register", userCtrl.registerUser);
router.post("/login", userCtrl.loginUser);

module.exports = router;
