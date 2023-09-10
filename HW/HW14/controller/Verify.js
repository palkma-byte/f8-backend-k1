const fs = require("fs");
const path = require("path");

module.exports = {
  handleNewPhone(req, res) {
    const newPhoneNum = req.body.phone;

    
    if (newPhoneNum.indexOf("0") !== 0) {
      req.flash("msg", "Phone number must contain 0 as the first digit.");
      return res.redirect("/");
    }
    if (
      isNaN(newPhoneNum) ||
      newPhoneNum.length < 9 ||
      newPhoneNum.length > 11
    ) {
      req.flash("msg", "Invalid phone number. It must have 9 to 11 digits.");
      return res.redirect("/");
    }

    const filePath = path.join(__dirname, "../data/phone.json"); 

    // Load phone data from the JSON file
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        req.flash("msg", "Error reading phone data.");
        return res.redirect("/");
      }

      const phoneData = JSON.parse(data);
      const phoneActivateds = phoneData.active;

      // Check if the phone number is verified or not
      if (phoneActivateds.includes(newPhoneNum)) {
        req.flash("msg", "Phone number is already verified.");
        return res.redirect("/success");
      } else {
        // Set the focus phone number
        phoneData.focus = { phone: newPhoneNum };

        
        fs.writeFile(filePath, JSON.stringify(phoneData), (err) => {
          if (err) {
            console.error(err);
            req.flash("msg", "Error writing phone data.");
            return res.redirect("/");
          }
          req.flash("msg", "Please enter the OTP code.");
          return res.redirect("/verify");
        });
      }
    });
  },

  verifyOtp(req, res) {
    const filePath = path.join(__dirname, "../data/phone.json"); 

    // Load phone data from the JSON file
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        req.flash("msg", "Error reading phone data.");
        return res.redirect("/");
      }

      const phoneData = JSON.parse(data);
      const otps = phoneData.otp;
      const focusPhone = phoneData.focus.phone;
      const otpInput = req.body.otp;

      if (otps.includes(otpInput)) {
        // Mark the phone number as verified
        phoneData.active.push(focusPhone);

        // Clear the focus phone
        phoneData.focus = {};

        // Save the updated data back to the file
        fs.writeFile(filePath, JSON.stringify(phoneData), (err) => {
          if (err) {
            console.error(err);
            req.flash("msg", "Error writing phone data.");
            return res.redirect("/");
          }
          req.flash("msg", "Phone number verification successful.");
          return res.redirect("/success");
        });
      } else {
        req.flash("msg", "Incorrect OTP. Please try again.");
        return res.redirect("/verify");
      }
    });
  },
};
