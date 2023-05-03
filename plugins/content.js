export default defineNuxtPlugin((/* nuxtApp */) => {
  const lang = 'en'
  const content = {
    en: {
      title: "apietryga",
      author: "Antoni Pietryga",
      nav: {
        home: 'Home',
        projects: 'Projects',
        contact: 'Contact',
      },
      home: {
        title: "You found <b>Software Developer</b><br><b>which will do</b> the job",
        description: "I am <b>self-taught</b> programmer works with <b>WEB</b> and <b>IoT projects</b>,<br> additionally I teach <b>web application programming</b>.",
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