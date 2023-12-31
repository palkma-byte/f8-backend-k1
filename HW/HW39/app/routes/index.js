var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home");
});
router.get("/profile", function (req, res, next) {
  const user = req.cookies.user;
  if (!user) {
    res.redirect("/");
  } else {
    res.render("index", { user });
  }
  // console.log(req.user);
});
router.get("/logout", function (req, res) {
  res.clearCookie("user");
  res.redirect("http://localhost:3000/logout");
});

module.exports = router;
