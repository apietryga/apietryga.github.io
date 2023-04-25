export default defineNuxtConfig({
  css: [ "@/assets/base.css", "@/assets/animations.css" ],
  experimental: { payloadExtraction: false },
  modules: [ 'nuxt-simple-sitemap' ], // sitemap must be at the end
  render: { spaScripts: false },
  runtimeConfig: {
    public: {
      siteUrl: process.env.ORIGIN || 'https://apietryga.github.io',
    }
  },
  transpile: [ "three" ],
  // vite: { css: { preprocessorOptions: { scss: { additionalData: '@import "@/assets/base.scss";' }}}},
})