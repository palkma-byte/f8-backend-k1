var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

const Controller = require('../controller/Controller')

router.get('/', Controller.login);
router.post('/', Controller.handleLogin)
router.get('/home', Controller.index)
router.get('/logout', Controller.logout)

module.exports = router;
