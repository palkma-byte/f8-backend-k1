var express = require("express");
var router = express.Router();
const passport = require("passport");

const AuthController = require("../controllers/AuthController");
const GuestMiddleware = require ("../middlewares/GuestMiddleware")

router.get("/", GuestMiddleware, AuthController.login);
router.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/auth",
    failureFlash: true,
  }),
  AuthController.handleLogin
);
router.get("/register", GuestMiddleware, AuthController.register);
router.post("/register", AuthController.handleRegister);
router.get("/logout", AuthController.logout);

module.exports = router;
