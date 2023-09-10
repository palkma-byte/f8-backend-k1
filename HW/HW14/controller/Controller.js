module.exports = {
    
  index(req, res) {
    const msg = req.flash("msg");
    
   res.render("index/home",{msg});
  },
  success(req,res){
    const msg = req.flash("msg");
    res.render("index/success",{msg})
  },
  verify(req,res){
    const msg = req.flash("msg");
    res.render("index/verify",{msg})
  }
};
