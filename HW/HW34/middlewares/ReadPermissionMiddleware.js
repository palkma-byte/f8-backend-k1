module.exports = (req, res, next) => {
  const permissions = req.session.permissions;

  if (permissions.indexOf("users.read") === -1) {
    res.redirect("/");
  }
  next();
};
