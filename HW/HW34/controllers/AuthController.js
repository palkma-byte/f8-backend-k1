const bcrypt = require("bcrypt");
const { User } = require("../models");

module.exports = {
  login: async (req, res) => {
    res.render("auth/login");
  },
  handleLogin: async (req, res) => {
    res.redirect("/");
  },
  register: async (req, res) => {
    res.render("auth/register");
  },
  handleRegister: async (req, res) => {
    const saltRounds = 10;
    const { email, name, password } = req.body;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      await User.create({ email: email, name: name, password: hash });
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
