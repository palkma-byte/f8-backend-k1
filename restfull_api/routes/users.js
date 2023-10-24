var express = require("express");
var router = express.Router();

const CheckUserPermission = require("../middleware/CheckUserPermission")

const UserController = require("../controllers/UserController")
/* GET users listing. */
router.get("/",UserController.index);
router.get("/:id",CheckUserPermission,UserController.view)
router.post("/",UserController.store);
router.patch("/:id",CheckUserPermission,UserController.edit)
router.put("/:id",CheckUserPermission,UserController.renew);
router.delete("/:id",CheckUserPermission,UserController.delete)
module.exports = router;
