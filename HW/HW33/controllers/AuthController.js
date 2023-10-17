const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = {
  login: async (req, res) => {
    res.render("auth/login");
  },
  handleLogin: async (req, res) => {
    console.log(req.body);
    res.redirect("/");
  },
  register: async (req, res) => {
    res.render("auth/register");
  },
  handleRegister: async (req, res) => {
    const saltRounds = 10;
    const { username, password } = req.body;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      await User.create({ username: username, password: hash });
    });
    res.redirect("/auth");
  },
  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth");
    });
  },
};
