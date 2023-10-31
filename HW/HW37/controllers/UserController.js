const SendMail = require("../jobs/SendMail");
const Event = require("../core/Event");
module.exports = {
  verify: (req, res) => {
    res.render("users/verify");
  },

  handleVerify: async (req, res) => {
    const { email, name } = req.body;
    new Event(
      new SendMail({
        name,
        email,
      }),
    );

    res.send("Hello");
  },
};
