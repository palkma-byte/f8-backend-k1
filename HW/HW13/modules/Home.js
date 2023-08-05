const Base = require("../core/Base");

class Home extends Base {
  index = (req, res) => {
    const desc = [`"Hello!",`, `"This my website",`, `"Looks like json",`];
    const address = [`123 add, ress`, `Ha Noi`, `VietNam`];
    const contact = [
      `office`,
      `F8 BackEnd`,
      `phone`,
      `0946587953`,
      `email`,
      `phamhoangbhaz@gmail.com`,
    ];
    const profile = [
      `<a href="https://www.facebook.com" target="_blank">facebook</a>`,
      `
            <a href="https://twitter.com" target="_blank">twitter</a>`,
      `
            <a href="https://www.instagram.com" target="_blank">instagram</a>`,
      `
            <a href="https://www.linkedin.com" target="_blank">linkedin</a>`,
      `
            <a href="https://stackoverflow.com" target="_blank"
              >stackoverflow</a
            >`,
      `
            <a href="https://github.com" target="_blank">github</a>`,
    ];

    this.render(req, res, { desc, address, contact, profile });
  };
}

module.exports = new Home();
