const router = require("express").Router();
const auth = require("../middleware/auth");
const noteCtrl = require("../controllers/noteCtrl");

router.route("/").get(auth, noteCtrl.getNotes).post(auth, noteCtrl.createNote);
router.route("/:id").put(auth, noteCtrl.starNote);
router.route("/complete/:id").put(auth, noteCtrl.toggleCompleteNote);
router.route("/delete/:id").delete(auth, noteCtrl.deleteNote);
module.exports = router;
