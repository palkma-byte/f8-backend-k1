var express = require('express');
var router = express.Router();

const AuthController = require("../controllers/AuthController")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/",AuthController.login);
router.post("/",AuthController.handleLogin);

router.get("/register",AuthController.register);
router.post("/register",AuthController.handleRegister);

router.get("/logout",AuthController.logout);

module.exports = router;
