const { User } = require("../models");
const transporter = require("../utils/emailConfirm");
const { EMAIL } = process.env;
const jwt = require("jsonwebtoken");

module.exports = {
  login(req, res) {
    const msg = req.flash("msg");
    if (req.cookies.auth) {
      res.render("customers/index");
    }
    res.render("auth/login", {
      msg,
      previousEmail: req.session.previousEmail,
    });
  },
  register(req, res) {
    const msg = req.flash("msg");
    res.render("auth/register", {
      msg,
      previousEmail: req.session.previousEmail,
      previousName: req.session.previousName,
    });
  },
  handleLogin: async (req, res) => {
    const emailForm = /^[A-Za-z0-9.@]+$/;
    const { username, password } = req.body;
    req.session.previousEmail = username;

    const customer = await User;
    const customerInfo = await customer.findOne({ where: { email: username } });
    console.log(typeof customerInfo.status + "  asdad " + customerInfo.id);
    if (emailForm.test(username) === false) {
      req.flash("msg", "Email không phù hợp");
      res.redirect("/");
    } else if (username === "" && password === "") {
      req.flash("msg", "Vui long nhap thong tin");
      res.redirect("/");
    } else if (username === "") {
      req.flash("msg", "Vui long nhap email");
      res.redirect("/");
    } else if (password === "") {
      req.flash("msg", "Vui long nhap mat khau");
      res.redirect("/");
    } else if (customerInfo === null) {
      req.flash("msg", "Nhập sai email");
      res.redirect("/");
    } else if (customerInfo.password !== password) {
      req.flash("msg", "Nhập sai password");
      res.redirect("/");
    } else if (customerInfo.status !== 1) {
      req.flash("msg", "Tài khoản chưa được kích hoạt");
      res.redirect("/");
    } else {
      res.cookie("auth", "logged");
      req.session.role = customerInfo.role;
      req.session.userId = customerInfo.id;
      res.redirect("/customers");
    }
  },
  handleRegister: async (req, res) => {
    const emailForm = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
    const { newName, newEmail, newPassword } = req.body;
    req.session.previousEmail = newEmail;
    req.session.previousName = newName;

    const customer = await User;
    const customerCheck = await customer.findOne({
      where: { email: newEmail },
    });
    if (customerCheck) {
      req.flash("msg", "Email đã tồn tại");
      res.redirect("/register");
    } else if (emailForm.test(newEmail) === false) {
      req.flash("msg", "Email không phù hợp");
      res.redirect("/register");
    } else {
      const newUser = await customer.create({
        name: newName,
        email: newEmail,
        password: newPassword,
        //generate key
        verificationToken: jwt.sign({ email: newEmail }, "afuzzycat", {
          expiresIn: "10h",
        }),
      });

      req.flash("msg", "Đăng ký thành công");
      res.redirect("/");
      //Gửi mail (tạo token)

      const token = newUser.verificationToken;
      console.log(newUser);
      console.log("Token: " + token);
      const verificationLink = `http://localhost:3000/verify?token=${token}`;

      const mailOptions = {
        from: EMAIL,
        to: newEmail,
        subject: "Registration Confirmation",
        html: `
    <p>Hello ${newName},</p>
    <p>Thank you for registering on our website! Please click the following link to verify your email:</p>
    <p><a href="${verificationLink}">Click here to verify</a></p>
  `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
  },
  logout(req, res) {
    req.flash("msg", "Đăng xuất thành công");
    res.clearCookie("auth");
    res.redirect("/");
  },
  verify: async (req, res) => {
    const token = req.query.token;
    try {
      const decoded = jwt.verify(token, "afuzzycat");
      console.log(decoded.email);
      const customer = await User;
      await User.update(
        { status: 1 },
        {
          where: {
            email: decoded.email,
          },
        }
      );
      const customerInfo = await customer.findOne({
        where: { email: decoded.email },
      });
      res.cookie("auth", "logged");
      req.session.role = customerInfo.role;
      req.session.userId = customerInfo.id;
      req.flash("msg", "Tài khoản kích hoạt thành công");
      res.redirect("/customers");
    } catch (error) {
      req.flash("msg", "invalid token");
      res.redirect("/");
    }
  },
};
