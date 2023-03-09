export default defineNuxtConfig({
  css: [ "@/assets/base.css", "@/assets/animations.css" ],
  experimental: { payloadExtraction: false },
  render: { spaScripts: false },
  transpile: [ "three" ],
  vite: { css: { preprocessorOptions: { scss: { additionalData: '@import "@/assets/base.scss";' }}}},
})