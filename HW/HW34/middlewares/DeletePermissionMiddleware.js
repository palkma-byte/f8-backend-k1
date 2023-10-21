module.exports = (req, res, next) => {
  const permissions = req.session.permissions;

  if (permissions.indexOf("users.delete") === -1) {
    res.redirect("/roles");
  } else {
    next();
  }
};
