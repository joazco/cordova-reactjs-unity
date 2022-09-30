const config: CordovaConfig = {
  name: "CordovaReact",
  build: {
    version: "1.0.0",
    id: "com.joazco.reactcordova",
    android: {
      versionCode: "1",
    },
    ios: {
      CFBundleVersion: "1",
    },
  },
  author: {
    email: "jazoulay@joazco.com",
    link: "https://joazco.com",
    name: "Jordan AZOULAY",
  },
  fullscreen: true,
  statusbar: {
    show: true,
    backgroundColor: "#3498db",
    overlaysWebView: false,
    contentStyle: "lightContent",
  },
  screenOrientation: "any",
  splashscreen: {
    fadeSplashscreen: true,
    fadeSplashscreenDuration: 750,
    splashscreenDelay: 3000,
  },
};

export default config;
