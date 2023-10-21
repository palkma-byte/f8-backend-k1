module.exports = (req, res, next) => {
    const permissions = req.session.permissions;
  
    if (permissions.indexOf("users.update") === -1) {
      res.redirect("/roles");
    } else {
      next();
    }
  };