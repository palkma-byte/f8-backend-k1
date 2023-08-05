const fs = require("fs");
class Base {
  render = (req, res, data = {}) => {
    fs.readFile(`./index.html`, "utf8", (err, viewContent) => {
      const result = viewContent.match(/{.+?}/g);
      let result2 = [];

      if (result.length) {
        for (let i = 0; i < result.length; i++) {
          const item = result[i];
          const itemKey = item.replaceAll("{", "").replaceAll("}", "");

          if (!result2.includes(itemKey)) {
            result2.push(itemKey);
          }
        }
      }

      for (let i = 0; i < result2.length; i++) {
        for (let j = 0; j < data[result2[i]].length; j++) {
          viewContent = viewContent.replace(
            `{` + result2[i] + `}`,
            data[result2[i]][j]
          );
        }
      }

      res.end(viewContent); //Response Message Body
    });
  };
}

module.exports = Base;
