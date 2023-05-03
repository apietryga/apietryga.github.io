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
        // description: "I am <b>self-taught</b> programmer works with <b>WEB</b> and <b>IoT projects</b>,<br> additionally I teach <b>web application programming</b>.",
        description: "I am self-taught programmer works with WEB and IoT projects,<br> additionally I teach web application programming",
        cta: "See my experience",
        code: {
          title: "<b>Code</b> was my first <b>love</b>",
          // description: "I started coding in 2010. I quickly realized that web development is what I should do, so I started learning."
          description: "In 2010, I started Googling in order to create a game. Since then, web development has captured me completely."
        }
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
        code: {
          title: "<b>Kod</b> był moją pierwszą <b>miłością</b>",
          description: "W 2010 roku w celu stworzenia gry zacząłem googlować. Od tamtego czasu web development wciągnął mnie bez reszty."
        }

      }
    }
  }
  return { provide: { c: content[lang] } }
})