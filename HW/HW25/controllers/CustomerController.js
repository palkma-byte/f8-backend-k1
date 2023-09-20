const Customer = require("../models/Customer");
const Province = require("../models/Province");
const moment = require("moment");
const { Op } = require("sequelize");
const { PER_PAGE } = process.env;
const { getPaginateUrl } = require("../utils/url");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");
const md5 = require("md5");
module.exports = {
  //Get lists
  index: async (req, res) => {
    const { keyword, status } = req.query;

    const customer = await Customer;

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
        ["created_at", "DESC"],
        ["name", "ASC"],
      ],
      where: filters,
      limit: +PER_PAGE,
      offset: offset,
    });

    const msg = req.flash("msg");
    // const confirmDelete = async (email) => {
    //  let confirmation = confirm("Are you sure you want to delete this customer?");
    //  if(confirmation){
    //    await customer.destroy({where: {email:email},truncate:true});
    //    req.flash("msg", "Xóa khách hàng thành công");
    //  }

    // }

    res.render("customers/index", {
      customerList,
      moment,
      req,
      totalPage,
      page,
      getPaginateUrl,
      msg,
    });
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
      req.body.password = md5(req.body.password);
      await customer.create(req.body);
      req.flash("msg", "Thêm khách hàng thành công");
      res.redirect("/customers");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect("/customers/create");
    }
  },

  //Get update
  update: async (req, res) => {
    const customerEmail = req.query.email;
    const customer = await Customer;
    const customerData = await customer.findOne({
      where: { email: customerEmail },
    });
    const province = await Province;
    const provinceList = await province.findAll();
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    const msgSuccess = req.flash("msg-success");
    res.render("customers/update", {
      provinceList,
      msg,
      errors,
      validate,
      customerData,
      msgSuccess,
    });
  },

  //Post update
  save: async (req, res) => {
    const email = req.query.email;
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      //Thêm dữ liệu
      const customer = await Customer;
      req.body.password = md5(req.body.password);
      await customer.update(req.body, {
        where: {
          email: email,
        },
      });
      req.flash("msg-success", "Chỉnh sửa thông tin thành công");
      res.redirect(`/customers/update/?email=${email}`);
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Cập nhật thông tin không thành công");
      res.redirect(`/customers/update/?email=${email}`);
    }
    console.log(req.body);
  },

  delete: async (req, res) => {
    const { email } = req.query;
    const customer = await Customer;
    
    let confirmation = true;

    if (confirmation) {
      await customer.destroy({ where: {email:email} });
      req.flash("msg", "Xóa khách hàng thành công");
    } else {
      req.flash("msg", "Đã hủy xóa khách hàng");
    }

    res.redirect("/customers");
  },
};
