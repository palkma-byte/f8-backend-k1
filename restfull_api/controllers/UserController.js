const { Op } = require("sequelize");
const { User } = require("../models");
const { response } = require("express");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
module.exports = {
  index: async (req, res) => {
    
    const {
      query,
      order = "asc",
      sort = "createdAt",
      limit,
      page = 1,
    } = req.query;
    
    const options = {
      attributes: ["id", "name", "email", "createdAt", "updatedAt"],
      order: [[sort, order]],
    };
    if (query) {
      options.where = {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${query}`,
            },
          },
          {
            email: {
              [Op.like]: `%${query}`,
            },
          },
        ],
      };
    }
    if (limit && Number.isInteger(+limit)) {
      options.limit = +limit;
      const offset = (page - 1) * limit;
      options.offset = offset;
    }

    const { rows, count } = await User.findAndCountAll(options);
    const response = {
      status: "success",
      data: rows,
      count,
    };
    res.json(response);
  },
  view: async (req, res) => {
    const { id } = req.params;
  
    const user = await User.findByPk(id, {
      attributes: ["id", "name", "email", "createdAt", "updatedAt"],
    });
    if (!user) {
      res.status(404).json({ Error: "Not found" });
      return;
    }
    res.json({ user });
  },

  store: async (req, res) => {
    const { name, email } = req.body;

    const errors = {};
    if (!name) {
      errors.name = "Tên bắt buộc phải nhập";
    }
    if (!email) {
      errors.email = "Email bắt buộc phải nhập";
    } else if (!validateEmail(email)) {
      errors.email = "Email không hợp lệ";
    } else {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        errors.email = "Email đã tồn tại";
      }
    }
    const response = {};
    if (Object.keys(errors).length) {
      Object.assign(response, {
        status: "error",
        errorText: "Validation",
        errors,
      });
      res.status(400).json(response);
      return;
    }

    const user = await User.create({ name, email });
    if (user) {
      Object.assign(response, {
        status: "success",
        data: user,
      });
      res.status(201).json(response);
      return;
    }

    response = {
      status: "error",
      errorText: "Server Error",
    };
    res.status(500).json(response);
  },
  edit: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id, {
      attributes: ["id", "name", "email", "createdAt", "updatedAt"],
    });
    const { name, email } = req.body;
    const errors = {};
    if (!user) {
      errors.id = "User không tồn tại";
    } else if (email) {
      const emailCheck = await User.findOne({ where: { email: email } });
      if (emailCheck) {
        errors.email = "Email đã tồn tại";
      }
    } else if (email && !validateEmail(email)) {
      errors.email = "Email không hợp lệ";
    }
    const response = {};
    if (Object.keys(errors).length) {
      Object.assign(response, {
        status: "error",
        errorText: "Validation",
        errors,
      });
      res.status(400).json(response);
      return;
    }
    const userUpdate = await user.update({ name, email });
    if (userUpdate) {
      Object.assign(response, {
        status: "success",
        data: userUpdate,
      });
      res.status(201).json(response);
      return;
    }
    response = {
      status: "error",
      errorText: "Server Error",
    };
    res.status(500).json(response);
  },
  renew: async (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;
    const errors = {};
    if (!name) {
      errors.name = "Tên bắt buộc phải nhập";
    }
    if (!email) {
      errors.email = "Email bắt buộc phải nhập";
    } else if (!validateEmail(email)) {
      errors.email = "Email không hợp lệ";
    } else {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (user) {
        errors.email = "Email đã tồn tại";
      }
    }
    const response = {};
    if (Object.keys(errors).length) {
      Object.assign(response, {
        status: "error",
        errorText: "Validation",
        errors,
      });
      res.status(400).json(response);
      return;
    }

    const userUpdate = await User.update(
      { name, email },
      { where: { id: id } }
    );
    if (userUpdate) {
      Object.assign(response, {
        status: "success",
        data: await User.findByPk(id, {
          attributes: ["id", "name", "email", "createdAt", "updatedAt"],
        }),
      });
      res.status(201).json(response);
      return;
    }

    response = {
      status: "error",
      errorText: "Server Error",
    };
    res.status(500).json(response);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const userDelete = await User.destroy({ where: { id: id } });
    const response={}
    if(userDelete) {
     response["status"] = "success";
     
     res.status(201).json(response);
     return;
      } else {
        Object.assign(response,{
          status: "error",
          errorText:"Can't find user"
        });
        res.status(400).json(response);
        return;
      }
    
    
  },
};
