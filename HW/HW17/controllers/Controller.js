const About = require("../models/about");
const Banner = require("../models/banner");
const Gallery = require("../models/gallery");
const Services = require("../models/services");
const Testimonial = require("../models/testimonial");

module.exports = {
  index(req, res) {
    const aboutText = About.getList();
    const banners = Banner.get();
    const testimonial1 = Testimonial.getSection1();
    const testimonial2 = Testimonial.getSection2();
    const gallery1 = Gallery.getSection1();
    const gallery2 = Gallery.getSection2();
    const services1 = Services.getSection1();
    const services2 = Services.getSection2();
    res.render("view/index", { layout: "layout", banners, aboutText,testimonial1,testimonial2,gallery1,gallery2,services1,services2 });
  },
  about(req, res) {
    const aboutText = About.getList();
    res.render("view/about", { layout: "layout", aboutText });
  },
  contact(req, res) {
    res.render("view/contact", { layout: "layout" });
  },
  gallery(req, res) {
    const gallery1 = Gallery.getSection1();
    const gallery2 = Gallery.getSection2();
    res.render("view/gallery", { layout: "layout", gallery1, gallery2 });
  },
  services(req, res) {
    const services1 = Services.getSection1();
    const services2 = Services.getSection2();

    res.render("view/services", { layout: "layout", services1, services2 });
  },
};
