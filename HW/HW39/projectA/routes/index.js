var express = require("express");
var router = express.Router();
var passport = require("passport");

const AuthController = require("../controllers/AuthController");

/* GET home page. */
router.get("/login", function (req, res, next) {
  res.cookie("a", "abc");
  const message = req.flash("error")
 
  res.render("auth/login",{message});
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/handle-login",
    failureRedirect: "/login",
  })
);
router.get("/handle-login", function (req, res) {
  res.user = req.user;
  res.cookie("user", req.user);
  res.redirect("/users");
});
router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("http://localhost:3001");
  });
});

module.exports = router;
