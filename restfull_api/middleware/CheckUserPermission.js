const { blacklist, User } = require("../models");
module.exports = async (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  const user = await User.findByPk(req.params.id, { attributes: ["email"] });
  if (user) {
    const checkBlackList = await blacklist.findOne({
      where: { email: user.email },
    });
    if (checkBlackList) {
      const response = {
        status: "error",
        errorText: "Access denied",
      };
      res.status(403).json(response);
      return;
    }
  }
  console.log("Permist ok");
  next();
};
