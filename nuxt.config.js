export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  css: [ "@/assets/base.css", "@/assets/animations.css" ],
  experimental: { 
    payloadExtraction: false,
    viewTransition: true,
  },
  modules: [ 'nuxt-simple-sitemap' ], // sitemap must be at the end
  render: { spaScripts: false },
  runtimeConfig: {
    public: {
      siteUrl: process.env.ORIGIN || 'https://apietryga.github.io',
    }
  },
  transpile: [ "three" ],
  purgeCSS: { whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"] }
})