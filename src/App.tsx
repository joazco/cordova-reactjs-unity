import React, { useEffect, useState } from "react";

import { UnityContext } from "./contexts";
import { useScreenOrientationConfig, useStatusBarConfig } from "./hooks";
import { UnityView } from "./pages";

const App: React.FC = () => {
  /** Unity context vars */
  const [unityInstance, setUnityInstance] = useState<
    UnityInstance | undefined
  >();
  const [unityLoaded, setUnityLoaded] = useState<boolean>(false);
  const [progressUnity, setProgressUnity] = useState<number>(0);

  useScreenOrientationConfig();
  useStatusBarConfig();

  useEffect(() => {
    console.log(`Unity loading ${progressUnity}%`);
  }, [progressUnity]);

  return (
    <UnityContext.Provider
      value={{
        unityInstance,
        unityLoaded,
        progressUnity,
        setUnityInstance,
        setProgressUnity,
        setUnityLoaded,
      }}
    >
      <UnityView />
    </UnityContext.Provider>
  );
};

export default App;
