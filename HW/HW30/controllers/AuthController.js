const bcrypt = require("bcrypt");
const { User } = require("../models");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const transporter = require("../utils/transporter");
const jwt = require("jsonwebtoken");

module.exports = {
  index: async (req, res) => {
    res.render("auth/index", { req });
  },
  login: async (req, res) => {
    const msgPassport = req.flash("error");
    const msg = req.flash("msg");
    const msgType = msgPassport ? "danger" : "success";
    res.render("auth/login", {
      pageTitle: "Đăng nhập",
      msg,
      msgType,
      msgPassport,
    });
  },

  register: async (req, res) => {
    const msg = req.flash("msg");
    res.render("auth/register", { pageTitle: "Đăng ký", msg });
  },
  handleLogin: async (req, res) => {
    res.redirect("/auth/index");
  },
  handleRegister: async (req, res) => {
    const { name, email, password } = req.body;
    const userInfo = await User.findOne({ where: { email: email } });
    if (userInfo) {
      req.flash("msg", "Email đã tồn tại");
      res.redirect("/auth/login");
    } else {
      const salt = 10;
      try {
        bcrypt.hash(password, salt, async function (err, hash) {
          await User.create({ name: name, email: email, password: hash });
        });
      } catch (error) {
        console.log("Error");
        req.flash("msg", "Đăng ký thất bại");
        res.redirect("/auth/login");
      }

      req.flash("msg", "Đăng ký thành công");
      res.redirect("/auth/login");
    }
  },
  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
  forgetPassword: (req, res) => {
    res.render("auth/forget-password");
  },
  handleForgetPassword: async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (user) {
      const token = jwt.sign({ email: email }, process.env.PRIVATE_KEY, {
        expiresIn: "15m",
      });
      const changePasswordLink = `http://localhost:3000/auth/new-password?token=${token}`;
      const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: "Changing Password",
        html: `<p><a href="${changePasswordLink}">Click here to change to new password</a></p>`,
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      req.flash("msg", "Đã gửi Email thay đổi mật khẩu");
      res.redirect("/auth/login");
    } else {
      req.flash("msg", "Tài khoản không tồn tại");
      res.redirect("/auth/login");
    }
  },
  changePassword: (req, res) => {
    res.render("auth/change-password");
  },
  handleChangePassword: async (req, res) => {
    const token = req.query.token;
    try {
      const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
      console.log(decoded.email);
      const salt = 10;
      bcrypt.hash(req.body.password, salt, async function (err, hash) {
        await User.update(
          { password: hash },
          {
            where: {
              email: decoded.email,
            },
          }
        );
      });

      req.flash("msg", "Đổi mật khẩu thành công");
      res.redirect("/auth/login");
    } catch (error) {
      req.flash("msg", "Đổi mật khẩu thất bại");
      res.redirect("/auth/login");
    }
  },
  loginGoogle: async (req, res) => {
    res.send("Google");
  },
};

/**
Quy trình xử lý đăng nhập dùng bcrypt 

Bước 1 : Lấy email, password từ Form
Bước 2 : Từ email lấy ra passwordHash trong Database
Bước 3 : Dùng hàm compare của bcrypt để so sánh password từ form và hash trong Database 

=>TH1: Khớp => Set session để đăng nhập
=>TH2: Không khớp => Thông báo lỗi 
 */
