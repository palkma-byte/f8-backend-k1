module.exports = {
  index(req, res) {
    res.render("home/home");
  },
  login(req, res) {
    const msg = req.flash("error");
    res.render("login/login", { msg });
  },
  handleLogin(req, res) {
    const { username, password } = req.body;

    if (username === "admin@gmail.com" && password === "123456") {
      res.redirect("/home");
    } else {
      req.flash("error", "Vui lòng nhập đúng thông tin");
      res.redirect("/");
    }
  },
  logout(req, res) {
    req.flash("error", "Đăng xuất thành công");
    res.redirect("/");
    
  },
};
