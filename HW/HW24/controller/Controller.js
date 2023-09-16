const md5 = require("md5");
const Customer = require("../models/Customer");
module.exports = {
  index(req, res) {
    if (req.cookies.auth) {
      res.render("home/home");
    } else {
      res.redirect("/");
    }
  },
  login(req, res) {
    const msg = req.flash("msg");
    if (req.cookies.auth) {
      res.render("home/home");
    }
    res.render("login/login", { msg, previousEmail:req.session.previousEmail });
  },
  register(req, res) {
    const msg = req.flash("msg");
    res.render("register/register", { msg, previousEmail:req.session.previousEmail,previousName:req.session.previousName });
  },
  handleLogin: async (req, res) => {
    const emailForm = /^[A-Za-z0-9.@]+$/;
    const { username, password } = req.body;
    req.session.previousEmail = username;
    const passwordEncode = md5(password);
    const customer = await Customer;
    const customerInfo = await customer.findOne({ where: { email: username } });
    if(emailForm.test(username)=== false){
      req.flash("msg", "Email không phù hợp");
      res.redirect("/");
    }
    else if (username === "" && password === "") {
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
    } else if (customerInfo.password !== passwordEncode) {
      req.flash("msg", "Nhập sai password");
      res.redirect("/");
    }else if (customerInfo.status === 0){
      req.flash("msg", "Tài khoản chưa kích hoạt");
      res.redirect("/");
    } else {
      res.cookie("auth", "logged");
      res.redirect("/home");
    }
  },
  handleRegister: async (req, res) => {
    const emailForm = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/;
    const { newName, newEmail, newPassword } = req.body;
    req.session.previousEmail = newEmail;
    req.session.previousName = newName;
    const encodePass = md5(newPassword);
    const customer = await Customer;
    const customerCheck = await customer.findOne({
      where: { email: newEmail },
    });
    if (customerCheck) {
      req.flash("msg", "Email đã tồn tại");
      res.redirect("/register");
    }else if (emailForm.test(newEmail)===false){
      req.flash("msg", "Email không phù hợp");
      res.redirect("/register");
    } else {
      const newUser = await customer.create({
        name: newName,
        email: newEmail,
        password: encodePass,
      });
      req.flash("msg", "Đăng ký thành công");
      res.redirect("/");
    }
  },
  logout(req, res) {
    req.flash("msg", "Đăng xuất thành công");
    res.clearCookie("auth");
    res.redirect("/");
  },
};
