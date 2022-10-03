import { createContext } from "react";

interface UnityContextInterface {
  unityInstance?: UnityInstance;
  unityLoaded: boolean;
  progressUnity: number;
  setUnityInstance: (unityInstance: UnityInstance) => void;
  setProgressUnity: (progress: number) => void;
  setUnityLoaded: (loaded: boolean) => void;
}

const defaultContext: UnityContextInterface = {
  progressUnity: 0,
  unityLoaded: false,
  setUnityInstance: () => {},
  setProgressUnity: () => {},
  setUnityLoaded: () => {},
};

const UnityContext = createContext<UnityContextInterface>(defaultContext);

export default UnityContext;
