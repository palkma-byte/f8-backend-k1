var express = require("express");
var router = express.Router();

const EmailController = require("../controllers/EmailController");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", EmailController.createForm);
router.post("/", EmailController.handlePostForm);
router.get("/history", EmailController.checkHistory);
router.get("/detail", EmailController.checkDetail);

module.exports = router;
