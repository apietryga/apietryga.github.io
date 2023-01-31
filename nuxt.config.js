export default defineNuxtConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/base.scss";',
        },
      },
    },
  },
  publicRuntimeConfig: {
    ORIGIN: process.env.ORIGIN
  }
})