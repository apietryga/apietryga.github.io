export default defineNuxtConfig({
  css: [
    "@/assets/base.css",
    "@/assets/animations.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/base.scss";',
        },
      },
    },
  },
})