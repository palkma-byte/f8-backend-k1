var express = require('express');
var router = express.Router();

const AuthController = require("../controllers/AuthController")
/* GET home page. */
router.post('/login',AuthController.login);
router.post('/logout',AuthController.logout);

module.exports = router;
