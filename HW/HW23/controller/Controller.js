const md5 = require("md5");
const Customer = require("../models/Customer");
module.exports = {
  index(req, res) {
    res.render("home/home");
  },
  login(req, res) {
    const msg = req.flash("msg");
    res.render("login/login", { msg });
  },
  handleLogin: async (req, res) => {
    let { username, password } = req.body;
    password = md5(password);
    const customer = await Customer;
    const customerInfo = await customer.findOne({ where: { email: username } });
    if (customerInfo === null) {
      req.flash("msg", "Nhập sai email");
      res.redirect("/");
    } else if(customerInfo.password !== password){
      req.flash("msg", "Nhập sai password");
      res.redirect("/");}
      else {
        res.redirect("/home");
      }
    
  },
  logout(req, res) {
    req.flash("msg", "Đăng xuất thành công");
    res.redirect("/");
  },
};
