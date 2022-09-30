import { useCallback, useEffect } from "react";
import useStatusbar from "@awesome-cordova-library/statusbar/lib/react";
import config from "../../config";

const useStatusBarConfig = () => {
  const {
    overlaysWebView,
    styleDefault,
    styleLightContent,
    backgroundColorByHexString,
    hide,
    show,
  } = useStatusbar();

  const configStatusBar = useCallback(() => {
    const fullScreenConfig = config.fullscreen ? config.fullscreen : false;
    if (fullScreenConfig) {
      overlaysWebView(true);
      hide();
      return;
    }
    const showConfig = config.statusbar?.show || true;

    const overlaysWebViewConfig = config.statusbar?.overlaysWebView || true;
    const backgroundColorConfig =
      config.statusbar?.backgroundColor || "#000000";
    const contentStyleConfig = config.statusbar?.contentStyle || "default";

    /** */
    if (showConfig) {
      show();
    } else {
      hide();
    }
    overlaysWebView(overlaysWebViewConfig);
    backgroundColorByHexString(backgroundColorConfig);

    switch (contentStyleConfig) {
      case "lightContent":
        styleLightContent();
        break;
      case "default":
      default:
        styleDefault();
        break;
    }
  }, [
    overlaysWebView,
    styleDefault,
    styleLightContent,
    backgroundColorByHexString,
    hide,
    show,
  ]);

  useEffect(() => {
    configStatusBar();
  }, [configStatusBar]);
};

export default useStatusBarConfig;
