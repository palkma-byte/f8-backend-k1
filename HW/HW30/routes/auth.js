var express = require("express");
var router = express.Router();
const passport = require("passport");

const AuthController = require("../controllers/AuthController");

const isLogin = (req, res, next) => {
  if (req.user) {
    res.redirect("/auth/index");
  }

  next();
};
const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  }

  next();
};

router.get("/login", isLogin, AuthController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
  }),
  AuthController.handleLogin
);
router.get("/register", isLogin, AuthController.register);
router.post("/register", AuthController.handleRegister);

router.get("/index", isLogout, AuthController.index);

router.get("/logout", AuthController.logout);

router.get("/forget-password",isLogin,AuthController.forgetPassword);
router.post("/forget-password",AuthController.handleForgetPassword);

router.get("/new-password", isLogin,AuthController.changePassword);
router.post("/new-password",AuthController.handleChangePassword);

module.exports = router;
