const execBuildReact = require("./modules/buildreact");
const execBuildResources = require("./modules/buildresources");
const execEditConfig = require("./modules/editconfig");
const removeUnityUseless = require("./modules/removeUnityUseless");

module.exports = () => {
  return new Promise((resolve, reject) => {
    Promise.all([
      execEditConfig(),
      execBuildReact(),
      execBuildResources(),
      removeUnityUseless(),
    ])
      .then(resolve)
      .catch(reject);
  });
};
