var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.cookie("a","abc")
 res.redirect("http://localhost:3001/profile")
});

module.exports = router;
