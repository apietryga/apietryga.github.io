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
          reviews: {
            
            cta: "see reference",
            list: [
              { name: "ERNABO",
                img: "reviews/ernabo.svg",
                content: "Mr. Antoni causes change, commitment to work, responsibility and a large amount of patience",
                source: "/docs/1.pdf",
              },
              { name: "Fundacja Partycypacji Społecznej",
                img: "reviews/fundacja.svg",
                content: "Mr. Antoni not only implemented the program of classes, but also showed ingenuity - expanding the classes with original initiatives, which always enjoyed the satisfaction of the participants.",
                source: "/docs/6.pdf",
              },
              { name: "KUŹNIA EKSPERTÓW",
                img: "reviews/kuznia_ekspertow.svg",
                content: "Based on the cooperation so far, I certify that Mr. Antoni is worth recommending as a trainer.",
                source: "/docs/3.pdf",
              },
              { name: "OPS Krzyżanowice",
                img: "reviews/ops.svg",
                content: "Mr. Antoni proved to be a reliable, competent, professional person with a great sense of humor.",
                source: "/docs/5.pdf",
              },
              { name: "ERNABO",
                img: "reviews/ernabo.svg",
                content: "He is an ideal trainer who effectively transfers his extensive knowledge and additionally quickly wins the sympathy of his listeners.",
                source: "/docs/1.pdf",
              },
              { name: "Fundacja Partycypacji Społecznej",
                img: "reviews/fundacja.svg",
                content: "Mr. Antoni proved to be an extremely committed person with high qualifications and interpersonal skills.",
                source: "/docs/6.pdf",
              },
              { name: "KUŹNIA EKSPERTÓW",
                img: "reviews/kuznia_ekspertow.svg",
                content: "He performed his duties and responsibilities diligently. He was known as a meticulous and trustworthy person.",
                source: "/docs/3.pdf",
              },
              { name: "OPS Krzyżanowice",
                img: "reviews/ops.svg",
                content: "The meetings were held in an atmosphere of pleasant relaxation with a sense of effective acquisition of knowledge.",
                source: "/docs/5.pdf",
              },
              { name: "ERNABO",
                img: "reviews/ernabo.svg",
                content: "Classes are each time well thought out and properly prepared, in addition to theoretical knowledge, they are also characterized by a large number of examples of application in everyday life. ",
                source: "/docs/1.pdf",
              },
              { name: "Fundacja Partycypacji Społecznej",
                img: "reviews/fundacja.svg",
                content: "The trainings were conducted in a professional manner and each time they were highly appreciated by the participants, who also emphasized the very good atmosphere prevailing during the classes.",
                source: "/docs/6.pdf",
              },
              { name: "KUŹNIA EKSPERTÓW",
                img: "reviews/kuznia_ekspertow.svg",
                content: "He has extensive knowledge related to the subject of the training, he passes it on to the participants in a clear and understandable way.",
                source: "/docs/3.pdf",
              },
              { name: "ERNABO",
                img: "reviews/ernabo.svg",
                content: "Professional approach to participants by Mr. Antoni and his extensive knowledge of the subject of the training translates into its clear and understandable transmission",
                source: "/docs/1.pdf",
              },
              { name: "KUŹNIA EKSPERTÓW",
              img: "reviews/kuznia_ekspertow.svg",
              content: "He cares about both the group's accreditation and the substantive value of each meeting",
              source: "/docs/3.pdf",
              },
              { name: "OPS Krzyżanowice",
                img: "reviews/ops.svg",
                content: "The topics discussed during the training were presented in an innovative and interesting way, which significantly raised the level of awareness of the participants",
                source: "/docs/5.pdf",
              },

            ],
          },
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
        cta: "See ",
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
        },
        teaching:{
          reviews:{
            // ! ORIGINALS
            // content: "Pana Antoniego cechuje sumienność, zaangażowanie do wykonywanej pracy, odpowiedzialność i duża doza cierpliwości, Dzięki otwartości i zdolności budowania dobrych relacji międzyludzkich, jest idealnym trenerem szkoleń skutecznie przekazującym swoją bogatą wiedzę i dodatkowo szybko zdobywającym sympatię słuchaczy.",
            // content: "Prowadzone przez p. Antoniego zajęcia są każdorazowo przemyślane i odpowiednio przygotowane, prócz wiedzy teoretycznej charakteryzują się również dużą ilością przykładów zastosowania w życiu codziennym. Dba on zarówno o aktywizację grupy, jak i dobre zrozumienie zagadnień przez uczestników.",
            // content: "Opierając się na dotychczasowej współpracy oraz profesjonalnym podejściu do uczestników pana Antoniego oraz jego bogatej wiedzy z tematyką szkolenia, co przekłada się na jej jasne i zrozumiałe przekazywanie, z przyjemnością polecam pana Antoniego Pietryga jako rzetelnego trenera i sam chętnie kontynuował będę współpracę z p. Antonim w przyszłości.",
            // content: "Pan Antoni Pietryga charakteryzuje się profesjonalnym podejściem do uczestników szkolenia i powierzonego zadania. Posiada bogatą wiedzę związaną z tematyką szkolenia, w sposób jasny i zrozumiały przekazuje ją uczestnikom zajęć. Dba zarówno o akrywizację grupy, jak i wartość merytoryczną każdego spotkania",
            // content: "W oparciu o dotychczasową współpracę zaświadczam, że Pan Antoni Pietryga jest godny polecenia jako trener. Rzetelnie wywiązał się z nałożonych na niego zadań i obowiązków. Dał się poznać jako osoba skrupulatna i warta zaufania.",
            // content: "Pan Antoni nie tylko realizował program zajęć, ale również wykazał się pomysłowością - poszerzając zajęcia o autorskie inicjatywy, któe zawsze cieszyły się zadowoloeniem uczestników. Z pełnym przekonaniem polecam Pana Antoniego Pietryga jako efektywnego szkoleniowca, który zapewni wysoki poziom prowadzonych zajęć.",
            // content: "Pan Antoni Pietryga dał się poznać jako osoba niezwykle zaangażowana, o wysokich kwalifikacjach oraz umiejętnościach interpersonalych. Szkolenia prowadzone zostały w sposób profesjonalny i każdorazowo wysoko oceniane przez uczestników, którzy podkreślali rówież bardzo dobrą atmosferę panującą na zajęciach.",
            list: [
              { name: "ERNABO",
                img: "reviews/ernabo.svg",
                content: "Pana Antoniego cechuje sumienność, zaangażowanie do wykonywanej pracy, odpowiedzialność i duża doza cierpliwości",
                source: "/docs/1.pdf",
              },
              { name: "ERNABO",
                img: "reviews/ernabo.svg",
                content: "Dzięki otwartości i zdolności budowania dobrych relacji międzyludzkich, jest idealnym trenerem szkoleń skutecznie przekazującym swoją bogatą wiedzę i dodatkowo szybko zdobywającym sympatię słuchaczy.",
                source: "/docs/1.pdf",
              },
              { name: "ERNABO",
                img: "reviews/ernabo.svg",
                content: "Zajęcia są każdorazowo przemyślane i odpowiednio przygotowane, prócz wiedzy teoretycznej charakteryzują się również dużą ilością przykładów zastosowania w życiu codziennym. Dba on zarówno o aktywizację grupy, jak i dobre zrozumienie zagadnień przez uczestników.",
                source: "/docs/1.pdf",
              },
              { name: "ERNABO",
                img: "reviews/ernabo.svg",
                content: "Profesjonalne podejście do uczestników przez pana Antoniego oraz jego bogata wiedzy z tematyki szkolenia, przekłada się na jej jasne i zrozumiałe przekazywanie",
                source: "/docs/1.pdf",
              },
              { name: "KUŹNIA EKSPERTÓW",
                img: "reviews/kuznia_ekspertow.svg",
                content: "Posiada bogatą wiedzę związaną z tematyką szkolenia, w sposób jasny i zrozumiały przekazuje ją uczestnikom zajęć. Dba zarówno o akrywizację grupy, jak i wartość merytoryczną każdego spotkania",
                source: "/docs/3.pdf",
              },
              { name: "KUŹNIA EKSPERTÓW",
                img: "reviews/kuznia_ekspertow.svg",
                content: "W oparciu o dotychczasową współpracę zaświadczam, że Pan Antoni Pietryga jest godny polecenia jako trener. Rzetelnie wywiązał się z nałożonych na niego zadań i obowiązków. Dał się poznać jako osoba skrupulatna i warta zaufania.",
                source: "/docs/3.pdf",
              },
              { name: "Fundacja Partycypacji Społecznej",
                img: "reviews/fundacja.svg",
                content: "Pan Antoni nie tylko realizował program zajęć, ale również wykazał się pomysłowością - poszerzając zajęcia o autorskie inicjatywy, które zawsze cieszyły się zadowoloeniem uczestników.",
                source: "/docs/6.pdf",
              },
              { name: "Fundacja Partycypacji Społecznej",
                img: "reviews/fundacja.svg",
                content: "Pan Antoni Pietryga dał się poznać jako osoba niezwykle zaangażowana, o wysokich kwalifikacjach oraz umiejętnościach interpersonalych.",
                source: "/docs/6.pdf",
              },
              { name: "Fundacja Partycypacji Społecznej",
                img: "reviews/fundacja.svg",
                content: "Szkolenia prowadzone zostały w sposób profesjonalny i każdorazowo wysoko oceniane przez uczestników, którzy podkreślali rówież bardzo dobrą atmosferę panującą na zajęciach.",
                source: "/docs/6.pdf",
              },
              
              { name: "OPS Krzyżanowice",
                img: "reviews/ops.svg",
                content: "Pan Antoni dał się poznać jako osoba rzetelna, kompetentna, fachowa, z ogromnym poczuciem humoru, dzięki czemu spotkania przebiegały w atmosferze przyjemnego relaksu z jednoczesnym poczuciem efektywnego pozyskania wiedzy.",
                source: "/docs/1.pdf",
              },
              { name: "OPS Krzyżanowice",
                img: "reviews/ops.svg",
                content: "Tematy omawiane podczas szkolenia zostały ujeęctye w nowatorski i interesuj ący sposób, przez co zacząco podniosły poziom świadomości uczestników",
                source: "/docs/1.pdf",
              },
            ],
          }
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