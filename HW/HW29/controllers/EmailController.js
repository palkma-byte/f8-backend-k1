const transporter = require("../utils/transporter");
const { Email } = require("../models");
const moment = require("moment");

module.exports = {
  createForm: async (req, res) => {
    //console.log(transporter);
    res.render("email/create");
  },
  handlePostForm: async (req, res) => {
    // console.log(req.body);
    const { clientEmail, title, content } = req.body;
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: clientEmail,
      subject: title,
      text: content,
      html: content,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    // Save email sent to database
    await Email.create({
      clientEmail: clientEmail,
      title: title,
      content: content,
    });

    // Send email complete
    res.redirect("/history");
  },
  checkHistory: async (req, res) => {
    const emailHistory = await Email.findAll();
    res.render("email/history", { emailHistory, moment });
  },
  checkDetail: async (req, res) => {
    const emailInfo = await Email.findByPk(req.query.id);

    res.render("email/detail", { emailInfo, moment });
  },
};
