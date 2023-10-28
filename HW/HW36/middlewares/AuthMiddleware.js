const jwt = require("jsonwebtoken");
const { User } = require("../models");
const AuthMiddleware = () => {
  return async (req, res, next) => {
    try {
      const { JWT_SECRET } = process.env;
      const authorization = req.headers["authorization"];
      const token = authorization.split(" ")[1];
      const decoded = jwt.verify(token, JWT_SECRET);

      if (decoded) {
        const { userId } = decoded.data;
        const user = await User.findByPk(userId);
        if (!user) {
          res.json({
            status: "error",
            message: "User not exist",
          });
          return;
        }
        
       
        req.user = user;
      }
    
    } catch (error) {
      res.status(403).json({
        status: "error",
        message: "Authorize failed",
      });
      return;
    }

    next();
  };
};
module.exports = AuthMiddleware;
