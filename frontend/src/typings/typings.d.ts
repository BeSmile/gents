interface Window {
  //在这里声明xxx之后就能在文件中 window.xxx这样调用了
   // xxx: any;
}

declare module '*.svg';
declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';


declare var ENV_PATH: string;
declare var MODELS_PATH: Array<string>;