const { check } = require("express-validator");
const Customer = require("../models/Customer");
module.exports = () => {
  return [
    check("name", "Tên phải từ 5 ký tự trở lên").isLength({ min: 5 }),
    check("email", "Email không đúng định dạng").isEmail(),
    check("password", "Mật khẩu không đủ mạnh").isStrongPassword({
      minLength: 6,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    }),
    
  ];
};
