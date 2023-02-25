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
  transpile: [
    "three"
  ],
  // modules: [
  //   ['@nuxtjs/google-fonts', {
  //     families: {
  //       'Nunito': true,
  //       download: true,
  //       inject: true
  //     }
  //   }]
  // ]
  // buildModules: [
  //   '@nuxtjs/google-fonts'
  // ],
  // googleFonts: {
  //   families: {
  //     Ubuntu: true,
  //     // Roboto: true,
  //     // 'Josefin+Sans': true,
  //     // Lato: [100, 300],
  //     // Raleway: {
  //     //   wght: [100, 400],
  //     //   ital: [100]
  //     // },
  //   }
  // }
})