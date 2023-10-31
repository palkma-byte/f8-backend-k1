const { User, Blacklist } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    if(!email||!password){
        res.status(400).json({
            status: "error",
            message: "Authentication Failed",
          });
          return;
    }
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }
    const { password: hash } = user;
    const status = bcrypt.compareSync(password, hash);
    if (!status) {
      res.status(400).json({
        status: "error",
        message: "Authentication Failed",
      });
      return;
    }

    //Tạo accessToken và refreshToken
    const token = jwt.createToken({ userId: user.id });
    const refreshToken = jwt.createRefresh();
    //Lưu refreshToken vào Database
    const updateStatus = await User.update(
      {
        refresh_token: refreshToken,
      },
      {
        where: {
          id: user.id,
        },
      }
    );

    if (!updateStatus) {
      res.status(500).json({
        status: "error",
        message: "Server Error",
      });
      return;
    }

    res.json({
      status: "success",
      accessToken: token,
      refreshToken,
    });
  },
  logout: async (req, res) => {
    const authorization = req.headers["authorization"];
    if (!authorization) {
      res.status(401).json({
        status: "error",
        message: "Require Authorization",
      });
      return;
    }
    const token = authorization.split(" ")[1];

    try {
      await Blacklist.create({ token: token });
      const userId = jwt.decode(token).userId;
      await User.update({ refresh_token: null }, { where: { id: userId } });
      res.json({
        status:"success",
        message:"Logout success"
      })
    } catch (error) {
        res.status(404).json({
            status:"error",
            message:"Logout failed."
        })
    }
  },
};
