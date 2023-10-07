const { register,login } = require("../controllers/user_controller.js");

const router = require("express").Router();

var pool = require('../query.js');

router.post("/register", register);
router.post('/login', login);

module.exports = router;
