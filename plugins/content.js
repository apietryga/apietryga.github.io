export default defineNuxtPlugin((/* nuxtApp */) => {
  const lang = 'en'
  const content = {
    en: {
      title: "apietryga",
      nav: {
        home: 'Home',
        projects: 'Projects',
        contact: 'Contact',
      },
      home: {
        title: "hello <br> im apietryga",
        description: "I am self-taught programming, I work as a Software Developer. I feel best in Node and Nuxt. I create WEB and IoT projects. I also conduct trainings in programming web applications. I am happy to talk about interesting projects.",
        cta: "See my experience",
      },
    },
    pl: {
      title: "apietryga",
      nav: {
        home: 'Home',
        projects: 'Projekty',
        contact: 'Kontakt',
      },
      home: {
        title: "hello <br> im apietryga",
        description: "Jestem samoukiem programowania, pracuję jako Software Developer. Najlepiej czuje się w Node i Nuxt. Tworzę projekty WEB i IoT. Prowadzę również szkolenia z programowania aplikacji internetowych. Chętnie porozmawiam o ciekawych projektach.",
        cta: "See my experience",
      }
    }
  }
  return { provide: { c: content[lang] } }
})