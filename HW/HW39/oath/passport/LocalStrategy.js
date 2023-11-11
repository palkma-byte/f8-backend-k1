var passport = require("passport");
var LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const { User } = require("../models");
module.exports = new LocalStrategy({
  passReqToCallback: true
},async function verify(
  req,
  username,
  password,
  cb
) {
  
  const userInfo = await User.findOne({ where: { username: username } });
  if (!userInfo) {
    return cb(null, false,req.flash("error","Incorrect username or password.") );
  }
  if (!bcrypt.compareSync(password, userInfo.password)) {
    return cb(null, false, req.flash("error","Incorrect username or password."));
  }
  return cb(null, userInfo);
});
