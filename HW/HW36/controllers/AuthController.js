const {User} = require ("../models");
const jwt = require("jsonwebtoken")
module.exports = {
    login: async (req,res) => {
        const { username, password } = req.body;
        const user = await User.findOne({
          where: {
            username,
          },
        });
        if (!user) {
          res.status(400).json({
            status: "error",
            message: "Authentication Failed",
          });
          return;
        }
        const {password:realPass} = user;
        
        if (password!== realPass) {
          res.status(400).json({
            status: "error",
            message: "Authentication Failed",
          });
          return;
        }
        const { JWT_SECRET, JWT_EXPIRE } = process.env;
        const token = jwt.sign(
          {
            data: {
              userId: user.id,
            },
          },
          JWT_SECRET,
          { expiresIn: JWT_EXPIRE  },
        );
    
        res.json({
          status: "success",
          accessToken: token,
        });
    }
}