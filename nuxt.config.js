export default defineNuxtConfig({
  css: ["@/assets/base.css"],
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