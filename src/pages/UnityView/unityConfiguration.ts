export const buildUrl = "unity/Build";
export const configUnity: UnityConfig = {
  dataUrl: `${buildUrl}/unity.data.unityweb`,
  frameworkUrl: `${buildUrl}/unity.framework.js.unityweb`,
  codeUrl: `${buildUrl}/unity.wasm.unityweb`,
  streamingAssetsUrl: "unity/StreamingAssets",
  companyName: "DefaultCompany",
  productName: "Cordova Unity ReactJs",
  productVersion: "0.1",
  showBanner: (msg: string) => {
    console.log("showBanner", msg);
  },
};
