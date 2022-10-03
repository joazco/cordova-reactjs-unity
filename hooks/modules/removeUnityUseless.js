const path = require("path");
const fs = require("fs");

const removeUnityUseless = () => {
  return new Promise((resolve) => {
    if (fs.existsSync(path.join(__dirname, "../../www/unity/TemplateData"))) {
      fs.rmSync(path.join(__dirname, "../../www/unity/TemplateData"), {
        recursive: true,
        force: true,
      });
    }
    if (fs.existsSync(path.join(__dirname, "../../www/unity/index.html"))) {
      fs.rmSync(path.join(__dirname, "../../www/unity/index.html"));
    }
    resolve();
  });
};
module.exports = removeUnityUseless;
