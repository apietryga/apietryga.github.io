export default defineNuxtConfig({
  modules: [
    '@nuxt/ui'
  ],
// export default {
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/base.scss";',
        },
      },
    },
  },
    // modules: [
    //   '@nuxt/ui'
    // ],
    // plugins: ['~/plugins/data.js'],
  // }

})