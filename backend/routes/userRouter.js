const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");
const auth = require("../middleware/auth");

//Register User
router.post("/register", userCtrl.registerUser);
router.post("/login", userCtrl.loginUser);
router.delete("/delete", auth, userCtrl.deleteUser);
router.get("/verify", userCtrl.verifyToken);

module.exports = router;
