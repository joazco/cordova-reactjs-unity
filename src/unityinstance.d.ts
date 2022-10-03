interface UnityInstanceModule {
  canvas: HTMLCanvasElement;
}

interface UnityInstance {
  Module: UnityInstanceModule;
  SendMessage: (
    unityObject: string,
    callFunction: string,
    ...values: any
  ) => void;
}

interface UnityConfig {
  dataUrl: string;
  frameworkUrl: string;
  codeUrl: string;
  streamingAssetsUrl: string;
  companyName: string;
  productName: string;
  productVersion: string;
  showBanner: (msg: string) => void;
}

declare const createUnityInstance: (
  canvas: HTMLCanvasElement,
  config: UnityConfig,
  callbackProgress: (progress: number) => void
) => Promise<any>;
