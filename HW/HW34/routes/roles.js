var express = require("express");
var router = express.Router();

const RoleController = require("../controllers/RoleController");
const DeletePermissionMiddleware = require("../middlewares/DeletePermissionMiddleware");
const UpdatePermissionMiddleware = require("../middlewares/UpdateMiddleware");
const CreatePermissionMiddleware = require("../middlewares/CreateMiddleware");

router.get("/", RoleController.index);
router.get("/add", CreatePermissionMiddleware, RoleController.add);
router.post("/add", CreatePermissionMiddleware, RoleController.handleAdd);

router.get("/edit/:id", UpdatePermissionMiddleware, RoleController.edit);
router.post("/edit/:id", UpdatePermissionMiddleware, RoleController.handleEdit);

router.post("/delete/:id", DeletePermissionMiddleware, RoleController.delete);

module.exports = router;
