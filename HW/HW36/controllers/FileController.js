const { where } = require("sequelize");
const { File } = require("../models");
module.exports = {
  upload: async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({
        status: "error",
        message: "No file chosen!",
      });
    }

    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.sampleFile;
    const author = req.user.username;
    const { name, data, md5, mimetype } = sampleFile;
    try {
      await File.create({
        name: name,
        data: data,
        md5: md5,
        mimetype: mimetype,
        author: author,
      });
    } catch (error) {
      res.status(400).json({
        status: "error",
        message: "File upload failed!",
      });
      return;
    }

    res.json({
      status: "success",
      link: "http://localhost:3000/" + md5,
    });
  },
  readAll: async (req, res) => {
    const author = req.user.username;
    const files = await File.findAll({
      where: { author: author },
      attributes: ["md5", "name"],
    });
    const response = {};
    files.forEach((file) => {
      response[file.name] = "http://localhost:3000/" + file.md5;
    });
    res.json({ response });
  },

  read: async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const files = await File.findOne({ where: { md5: id } });
    if (!files) {
      res.status(404).json({
        status: "error",
        message: "File not found!",
      });
      return;
    }
    const { data, mimetype } = files;
    res.setHeader("Content-Type", mimetype);
    res.send(data);
  },
};
