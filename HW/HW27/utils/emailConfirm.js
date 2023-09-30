const nodemailer = require('nodemailer');
const {EMAIL,PASS} = process.env;
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  });
  module.exports = transporter;