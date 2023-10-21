module.exports = (req, res, next) => {
    const permissions = req.session.permissions;
  
    if (permissions.indexOf("users.add") === -1) {
      res.redirect("/roles");
    } else {
      next();
    }
  };