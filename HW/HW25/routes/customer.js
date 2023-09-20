var express = require("express");
var router = express.Router();

const CustomerValidate = require("../middlewares/CustomerValidate");
const UpdateCustomerValidate = require("../middlewares/UpdateCustomerValidate");

const CustomerController = require("../controllers/CustomerController");

router.get("/", CustomerController.index);

router.get("/create", CustomerController.create);
router.post("/create", CustomerValidate(), CustomerController.store);

router.get("/update", CustomerController.update);
router.post("/update", UpdateCustomerValidate(), CustomerController.save);

router.get("/delete", CustomerController.delete);

module.exports = router;
