var express = require("express");
var router = express.Router();
const hash = require("../utils/hash");
const { User, Role, Permission } = require("../models");
const _ = require('lodash');
/* GET home page. */
const AuthMiddleware = require("../middlewares/AuthMiddleware");

router.get("/", AuthMiddleware, async function (req, res, next) {
  // hash.make("123456");
  const { id } = req.user;
  const user = await User.findOne({
    where: {
      id,
    },
    include: {
      model: Role,
    },
  });
  const roles = user.Roles;
  //Lấy tất cả permission của từng role
  let permissions = await Promise.all(
    roles.map(async ({ id }) => {
      const role = await Role.findOne({
        where: {
          id,
        },
        include: {
          model: Permission,
        },
      });

      return role.Permissions;
    })
  );

  permissions = permissions.map((item) => {
    return item.map(({ value }) => value);
  });
  permissions = _.uniqBy(_.flatMap(permissions))

//   permissions = [...new Set(permissions.flat(Infinity))];
// console.log(permissions);
 req.session.permissions = permissions;
 req.cookies.permissions = permissions;
 req.user.permissions = permissions;
 console.log(req.user.permissions);
  

  res.render("index", { title: "Express" });
});

module.exports = router;
