var express = require('express');
var router = express.Router();

const Controller = require('../controller/Controller');
const Verify = require ('../controller/Verify')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/',Controller.index);
router.get('/success',Controller.success);
router.get('/verify',Controller.verify)
router.post('/phonenumber',Verify.handleNewPhone);
router.post('/otp',Verify.verifyOtp);

module.exports = router;
