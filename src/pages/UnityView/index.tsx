import { useContext, useEffect, useRef } from "react";

import { configUnity } from "./unityConfiguration";
import { UnityContext } from "../../contexts";

const UnityView: React.FC = () => {
  const { setUnityInstance, setUnityLoaded, setProgressUnity } =
    useContext(UnityContext);
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;
    createUnityInstance(canvas.current, configUnity, (progress: number) => {
      if (100 * progress === 100) {
        setProgressUnity(95);
        setTimeout(() => {
          setProgressUnity(100);
        }, 2200);
        setTimeout(() => {
          setUnityLoaded(true);
        }, 2500);
      } else {
        setProgressUnity(100 * progress);
      }
    })
      .then((UI) => {
        setUnityInstance(UI);
      })
      .catch((message) => {
        alert(message);
      });
  }, [canvas, setUnityInstance, setUnityLoaded, setProgressUnity]);

  return <canvas id="game" ref={canvas}></canvas>;
};

export default UnityView;
