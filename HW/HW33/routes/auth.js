var express = require("express");
var router = express.Router();
const passport = require("passport");

const AuthController = require("../controllers/AuthController");
const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/");
  }

  next();
};

router.get("/", isLogin, AuthController.login);
router.post(
  "/",
  passport.authenticate("local", {
    failureRedirect: "/auth",
    failureFlash: true,
  }),
  AuthController.handleLogin
);
router.get("/register", isLogin, AuthController.register);
router.post("/register", AuthController.handleRegister);
router.get("/logout", AuthController.logout);

module.exports = router;
