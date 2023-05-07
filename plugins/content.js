export default defineNuxtPlugin( app => {
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
        description: "I am self-taught programmer works with WEB and IoT projects,<br> additionally I teach web application programming",
        cta: "See my full experience",
        code: {
          title: "<b>Code</b> was my first <b>love</b>",
          description: "In 2010, I started Googling in order to create a game. Since then, web development has captured me completely.",
          cta: "see my code projects",
        },
        teaching: {
          title: "<b>Teaching</b> - the best way of <b>learning</b>",
          description: "I started my adventure with training with a computer skills course for seniors.",
          cta: "see my teach experience",
        },
        business: {
          title: "<b>Business</b> is <b>business</b>",
          description: "In 2018, I started my first business, which resulted in some of the projects and a lot of experience featured on this page.",
          cta: "see my business projects",
        },
      },
      contact: {
        title: "Contact details",
        icons: {
          phone : "+48 732 012 715",
          mail: "antek.pietryga@gmail.com",
          messenger: "https://www.messenger.com/t/antoni.pietryga",
          instagram: "http://instagram.com/antek_pietryga",
          facebook: "https://www.facebook.com/antoni.pietryga/",
          youtube: "https://www.youtube.com/channel/UCB5bhBYgly7udyjyjj0K_UQ?view_as=subscriber",
          linkedin: "https://www.linkedin.com/in/apietryga/",
          github: "https://github.com/apietryga",
          stackoverflow: "https://stackoverflow.com/users/5252704/antek-pietryga",
        }
      },
      projects: {
        cta: "Watch ",
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
    },
    all: {
      stack:[
        'HTML',
        'CSS',
        'SCSS',
        'PHP',
        'JavaScript',
        'Node.js',
        'jQuery',
        'CPP',
        'Arduino',
        'Python',
        'django',
        'Flask',
        'Java',
        'Spring',
        'MySQL',
        'iOT',
        'SEO',
        'ReactJS',
        // ---
        'Vue',
        'Nuxt',
        'Docker',
        'Kubernetes',
        'Linux',
        'Slim',
        'Twig'

      ],
    }
  }

  const t = trans_key => {
    let a = trans_key.replace(/\[(\w+)\]/g, '.$1').replace(/^\./, '').split('.')
    let o = {...content[lang], ...content.all }
    for (let i = 0, n = a.length; i < n; ++i) {
      if (a[i] in o){ o = o[a[i]] }else{ return }
    }
    return o;
  }

  const p = ( url, selector ) => {
    const project = app.$appData.projects.find(p => p.url == url)
    if(!project){ return console.error(`Project "${url}" does not exists`) }
    if(project[selector]){ return project[selector] }
    if(project.lang[lang][selector]){ return project.lang[lang][selector] }
    return console.error(`Selector "${selector}" does not exist on project "${url}"`)
  }

  return { provide: { t, p } }
})