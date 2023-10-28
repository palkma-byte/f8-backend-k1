var express = require('express');
var router = express.Router();

const AuthMiddleware = require("../middlewares/AuthMiddleware")
const FileController = require("../controllers/FileController")
/* GET home page. */
router.get('/',AuthMiddleware(), FileController.readAll);
router.get("/:id", FileController.read)

router.post("/upload",AuthMiddleware(),FileController.upload)

module.exports = router;
