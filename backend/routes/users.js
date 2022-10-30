var express = require('express');
const user = require("../controllers/user");
var router = express.Router();

const AUTH = require("../middleware/auth");

/* GET users listing. */
router.post('/register', user.registerUser);
router.post("/login", user.login);
router.get('/get-users', AUTH, user.getUsers);

module.exports = router;
