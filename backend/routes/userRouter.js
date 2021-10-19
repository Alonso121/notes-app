const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

//Register User
router.post("/register", userCtrl.registerUser);

module.exports = router;
