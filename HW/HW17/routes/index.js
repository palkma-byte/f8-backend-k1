var express = require('express');
var router = express.Router();

const Controller = require ("../controllers/Controller")

router.get("/index", Controller.index);
router.get("/about", Controller.about);
router.get("/gallery", Controller.gallery);
router.get("/contact", Controller.contact);
router.get("/services", Controller.services);


module.exports = router;
