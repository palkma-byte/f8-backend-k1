var express = require("express");
var router = express.Router();

const UserController = require("../controllers/UserController");
const UpdatePermissionMiddleware = require("../middlewares/UpdateMiddleware");

/* GET users listing. */
router.get("/", UserController.index);

router.get("/permission/:id",UpdatePermissionMiddleware, UserController.permission);

router.post("/permission/:id",UpdatePermissionMiddleware, UserController.handlePermission);

module.exports = router;
