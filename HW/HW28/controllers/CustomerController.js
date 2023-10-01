const { Customer } = require("../models");
const { User } = require("../models");
const { Province } = require("../models");
const moment = require("moment");
const { Op } = require("sequelize");
const { PER_PAGE } = process.env;
const { getPaginateUrl } = require("../utils/url");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");
const md5 = require("md5");
const createError = require("http-errors");
const { fileLoader } = require("ejs");
module.exports = {
  //Get lists
  index: async (req, res) => {
    const { keyword, status } = req.query;
    const { userId, role } = req.session;
    const customer = await Customer;
    const user = await User;
    const filters = {};
    if (status === "active" || status === "inactive") {
      filters.status = status === "active" ? 1 : 0;
    }

    if (keyword) {
      filters[Op.or] = [
        {
          name: {
            [Op.like]: `%${keyword}%`,
          },
        },
        {
          email: {
            [Op.like]: `%${keyword}%`,
          },
        },
      ];
    }
    if (role == 0) {
      filters.user_id = userId;
    }

    //Lấy tổng số bản ghi
    const totalCountObj = await customer.findAndCountAll({
      where: filters,
    });

    const totalCount = totalCountObj.count;

    //Tính tổng số trang
    const totalPage = Math.ceil(totalCount / PER_PAGE);

    //Lấy trang hiện tại
    let { page } = req.query;
    if (!page || page < 1 || page > totalPage) {
      page = 1;
    }

    //Tính offset
    const offset = (page - 1) * PER_PAGE;

    const customerList = await customer.findAll({
      // attributes: ["id", "name", "email", "status"],
      order: [
        ["createdAt", "DESC"],
        ["name", "ASC"],
      ],
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
      include: "user",
    });
   

    const msg = req.flash("msg");
    if (!req.cookies.auth) {
      res.redirect("/");
    } else if (role == 1) {
      res.render("admin/index", {
        customerList,
        moment,
        req,
        totalPage,
        page,
        getPaginateUrl,
        msg,
      });
    } else {
      res.render("customers/index", {
        customerList,
        moment,
        req,
        totalPage,
        page,
        getPaginateUrl,
        msg,
      });
    }
  },

  //Get Form
  create: async (req, res) => {
    const province = await Province;
    const provinceList = await province.findAll();
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    // console.log(validate.getError(errors, "name"));
    res.render("customers/create", { provinceList, msg, errors, validate });
  },

  //Post Create
  store: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      //Thêm dữ liệu
      const customer = await Customer;
      console.log(req.session.role);
      req.body.user_id = req.session.userId;
      console.log(req.body);
      customer.create(req.body);
      req.flash("msg", "Thêm khách hàng thành công");
      res.redirect("/customers");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đúng thông tin");
      res.redirect("/customers/create");
    }
  },

  edit: async (req, res, next) => {
    const { id } = req.params;
    const customer = await Customer;
    const customerDetail = await customer.findByPk(id);
    if (!customerDetail) {
      //Xử lý lỗi
      next(createError(404));
      return;
    }
    const province = await Province;
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    const provinceList = await province.findAll();

    res.render("customers/edit", {
      msg,
      errors,
      validate,
      provinceList,
      customerDetail,
    });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const customer = await Customer;
    const customerDetail = await customer.findByPk(id);

    if (!customerDetail) {
      //Xử lý lỗi
      next(createError(404));
      return;
    }

    //Xử lý update
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const customerData = req.body;
      if (customerData.password) {
        customerData.password = md5(customerData.password);
      } else {
        delete customerData.password;
      }

      await customer.update(customerData, {
        where: {
          id: id,
        },
      });

      req.flash("msg", "Cập nhật thành công");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
    }

    res.redirect("/customers/edit/" + id);
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    const customer = await Customer;
    await customer.destroy({
      where: {
        id: id,
      },
      force: false, //Xóa vĩnh viễn
    });
    req.flash("msg", "Xóa thành công");
    res.redirect("/customers");
  },
  destroyChecked: async (req, res) => {
    const selectedCustomerIds = JSON.parse(req.body.selectedCustomerIds);

    const customer = await Customer;
    await customer.destroy({
      where: {
        id: {
          [Op.or]: selectedCustomerIds,
        },
      },
      force: true,
    });

    req.flash("msg", "Xóa đã chọn thành công");
    res.redirect("/customers");
  },
};
