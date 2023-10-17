var express = require("express");
var router = express.Router();

const ShortenLinkController = require("../controllers/ShortenLinkController");

const isLogout = (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth");
  }
  next();
};

/* GET home page. */
router.get("/", isLogout, ShortenLinkController.index);
router.post("/", ShortenLinkController.handlePostLink);
router.get("/srtlink/:urlcode", isLogout, ShortenLinkController.getShortedLink);
router.get("/update/:urlcode", isLogout, ShortenLinkController.updateLink);
router.post("/update/:urlcode", ShortenLinkController.handleUpdateLink);
router.post("/delete/:urlcode", ShortenLinkController.deleteLink);

module.exports = router;
