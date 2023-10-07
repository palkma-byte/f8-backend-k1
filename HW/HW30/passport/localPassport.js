const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models");
const bcrypt = require("bcrypt");
module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  async function (email, password, done) {
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      done(null, false, { message: "Email ko ton tai" });
      return;
    }
    const hash = user.password;
    
    bcrypt.compare(password, hash, (error, result) => {
      
      if (result) {
        done(null, user);
        return;
      }
      done(null, false,{ message: "Mat khau khong chinh xac" });
    });
  }
);
