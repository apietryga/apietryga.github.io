export default defineNuxtConfig({
  css: [ "@/assets/base.css", "@/assets/animations.css" ],
  experimental: { payloadExtraction: false },
  render: { spaScripts: false },
  modules: [ '@nuxtjs/sitemap' ], // sitemap must be at the end
  transpile: [ "three" ],
  vite: { css: { preprocessorOptions: { scss: { additionalData: '@import "@/assets/base.scss";' }}}},
})