const path = require("path");
const fs = require("fs");
const { exec } = require("child_process");
const { XMLParser, XMLBuilder } = require("fast-xml-parser");

const options = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  suppressBooleanAttributes: false,
};
const parser = new XMLParser(options);
const builder = new XMLBuilder({ format: true, ...options });
const configXmlPath = path.resolve(__dirname, "../../config.xml");

const loadFile = () => {
  return fs.readFileSync(configXmlPath, "utf8");
};

const saveFile = (xml) => {
  fs.writeFileSync(configXmlPath, builder.build(xml));
};

const editGlobal = (xml) => {
  const config = require("./config").default;
  xml.widget.name = config.name;
  xml.widget.description = config.description || "";
};

const editWdiget = (xml) => {
  const config = require("./config").default;
  xml.widget["@_id"] = config.build.id;
  xml.widget["@_version"] = config.build.version;
  xml.widget["@_android-versionCode"] = config.build.android.versionCode;
  xml.widget["@_ios-CFBundleVersion"] = config.build.ios.CFBundleVersion;
};

const editAuthor = (xml) => {
  const config = require("./config").default;
  if (!config.author) return;
  xml.widget.author["#text"] = config.author.name;
  xml.widget.author["@_email"] = config.author.email;
  xml.widget.author["@_href"] = config.author.link;
};

const editSplashScreen = (xml) => {
  const config = require("./config").default;
  xml.widget.preference.forEach((preference, i) => {
    switch (preference["@_name"]) {
      case "AutoHideSplashScreen":
        xml.widget.preference[i]["@_value"] = String(
          xml.widget.preference[i]["@_value"]
        );
        break;
      case "SplashScreenDelay":
        xml.widget.preference[i]["@_value"] =
          config.splashscreen && config.splashscreen.splashscreenDelay
            ? String(config.splashscreen.splashscreenDelay)
            : "3000";
        break;
      case "FadeSplashScreen":
        xml.widget.preference[i]["@_value"] =
          config.splashscreen &&
          typeof config.splashscreen.fadeSplashscreen !== undefined
            ? String(config.splashscreen.fadeSplashscreen)
            : "true";
        break;
      case "FadeSplashScreenDuration":
        xml.widget.preference[i]["@_value"] =
          config.splashscreen && config.splashscreen.fadeSplashscreenDuration
            ? String(config.splashscreen.fadeSplashscreenDuration)
            : "750";
        break;
      default:
        return;
    }
  });
};

const execEditConfig = () => {
  return new Promise((resolve, reject) => {
    exec(
      "./node_modules/typescript/bin/tsc src/config.ts --outDir hooks/modules",
      () => {
        const data = loadFile();
        const xml = parser.parse(data);
        editGlobal(xml);
        editWdiget(xml);
        editAuthor(xml);
        editSplashScreen(xml);
        saveFile(xml);
        resolve();
      }
    );
  });
};

module.exports = execEditConfig;
