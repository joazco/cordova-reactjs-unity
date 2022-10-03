import { useCallback, useContext } from "react";
import { UnityContext } from "../../contexts";

const useUnity = () => {
  const { unityInstance } = useContext(UnityContext);

  const sendMessage = useCallback(
    (unityObject: string, callFunction: string, ...values: any) => {
      if (!unityInstance) return;
      unityInstance.SendMessage(unityObject, callFunction, values);
    },
    [unityInstance]
  );

  const listenEvent = useCallback(
    (eventName: string, callback: (detail: any) => void) => {
      document.addEventListener(eventName, (event) => {
        // @ts-ignore
        callback(event.detail);
      });
    },
    []
  );

  return {
    sendMessage,
    listenEvent,
  };
};

export default useUnity;
