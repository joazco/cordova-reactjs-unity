import { useCallback, useEffect } from "react";
import useScreenOrientation from "@awesome-cordova-library/screen-orientation/lib/react";
import config from "../../config";

const useScreenOrientationConfig = () => {
  const { lock } = useScreenOrientation();

  const configScreenOrientation = useCallback(() => {
    const screenOrientationConfig = config.screenOrientation || "any";
    lock(screenOrientationConfig);
  }, [lock]);

  useEffect(() => {
    configScreenOrientation();
  }, [configScreenOrientation]);
};

export default useScreenOrientationConfig;
