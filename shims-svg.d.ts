/// <reference types="vite-svg-loader" />

declare module "*.svg" {
  const content: any;
  export default content;
}
