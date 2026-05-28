export const common = {
  author: 'Antoni Pietryga',
  role: 'Fullstack & Trainer',
  nav: { home: 'Home', projects: 'Projects', contact: 'Contact' },
}

export const stack = [
  'HTML','CSS','SCSS','PHP','JavaScript','Node.js','jQuery','CPP','Arduino',
  'Python','django','Flask','Java','Spring','MySQL','iOT','SEO','ReactJS',
  'Vue','Nuxt','Docker','Kubernetes','Linux','Slim','Twig',
]

export const contact = {
  title: 'Contact details',
  phone: '+48 732 012 715',
  mail: 'antek.pietryga@gmail.com',
  messenger: 'https://www.messenger.com/t/antoni.pietryga',
  instagram: 'http://instagram.com/antek_pietryga',
  facebook: 'https://www.facebook.com/antoni.pietryga/',
  youtube: 'https://www.youtube.com/channel/UCB5bhBYgly7udyjyjj0K_UQ?view_as=subscriber',
  linkedin: 'https://www.linkedin.com/in/apietryga/',
  github: 'https://github.com/apietryga',
  stackoverflow: 'https://stackoverflow.com/users/5252704/antek-pietryga',
}

export const home = {
  title: 'Software Developer<br>which will do the job',
  description: 'Self-taught programmer working with WEB and IoT projects, additionally teaching web application programming.',
  cta: 'See my full experience',
  code: {
    title: 'Code was my first love',
    description: 'In 2010, I started Googling in order to create a game. Since then, web development has captured me completely.',
    cta: 'see code projects',
  },
  teaching: {
    title: 'Teaching — the best way of learning',
    description: 'I started my adventure with training with a computer skills course for seniors. Since then I\'ve conducted over 1000 training hours.',
    cta: 'see teaching projects',
    reviews: [
      { name: 'ERNABO', content: 'Mr. Antoni causes change, commitment to work, responsibility and a large amount of patience', source: '/docs/1.pdf' },
      { name: 'Fundacja Partycypacji Społecznej', content: 'Mr. Antoni not only implemented the program, but also showed ingenuity — expanding the classes with original initiatives.', source: '/docs/6.pdf' },
      { name: 'KUŹNIA EKSPERTÓW', content: 'Based on the cooperation so far, I certify that Mr. Antoni is worth recommending as a trainer.', source: '/docs/3.pdf' },
      { name: 'OPS Krzyżanowice', content: 'Mr. Antoni proved to be a reliable, competent, professional person with a great sense of humor.', source: '/docs/5.pdf' },
    ],
  },
  business: {
    title: 'Business is business',
    description: 'In 2018, I started my first business, which resulted in some of the projects and a lot of experience featured on this page.',
    cta: 'see business projects',
  },
}

export const cv = {
  download: 'Download CV',
  contact: { title: 'Contact', webpage: 'https://apietryga.github.io', social_name: 'apietryga' },
  main_skills: {
    title: 'Main Skills',
    items: [
      { name: 'JavaScript', ico: 'js' },
      { name: 'Vue', ico: 'vue' },
      { name: 'Node.js', ico: 'nodejs' },
      { name: 'Nuxt', ico: 'nuxt' },
      { name: 'Python', ico: 'python' },
      { name: 'PHP', ico: 'php' },
    ],
  },
  languages: {
    title: 'Languages',
    items: [
      { name: 'English', desc: 'EFSET CEFR B1/B2', ico: 'us' },
      { name: 'Polish', desc: 'Native', ico: 'pl' },
    ],
  },
  summary: {
    title: 'Summary',
    content: 'I started programming in 2014 to develop a speedway game. As my needs grew, I became familiar with the LAMP stack, which enabled me to secure my first freelance projects. In 2018, I founded a business focused on digital skills training. After two years, I began conducting front-end programming courses. Since May 2022, I have been working as a B2B contractor while occasionally continuing to teach programming courses.',
  },
  experience: {
    title: 'Experience',
    items: [
      {
        date_from: '05.2022', date_to: 'Present',
        title: 'Linkhouse.co', role: 'Fullstack',
        desc: 'Development and maintenance of a marketplace monolith, API integrations, AI implementation, microservices, and the creation of innovative solutions for the SEO industry.',
        stack: ['Vue', 'Twig', 'PHP', 'Slim', 'Docker', 'Kubernetes', 'Linux', 'Laravel'],
      },
      {
        date_from: '12.2020', date_to: '04.2022',
        title: 'Ernabo, RECON Consulting, Business Masters, LG PROJECT, Everest Consulting',
        role: 'Programming Trainer',
        desc: 'Conducting courses in front-end programming, as well as PHP, Java, and Python. Additionally, leading training sessions on Social Media and SEO.',
        stack: ['HTML', 'SCSS', 'JS', 'Vue', 'PHP', 'Python'],
      },
      {
        date_from: '11.2018', date_to: '08.2021',
        title: 'Kuźnia Ekspertów', role: 'Digital Skills Trainer',
        desc: 'Conducting digital technology courses for seniors (65+), covering Windows and Android operation, as well as online information verification.',
        stack: ['Courses'],
      },
      {
        date_from: '12.2014', date_to: '10.2018',
        title: 'Good Lock, Kluczdowszystkiego, Gigant.pl, YanoMebel',
        role: 'Freelance Fullstack',
        desc: 'Modernization of a WordPress website, development of the educational music game TOMIGra, creation of a CMS and booking system for an escape room, and development of an order configurator.',
        stack: ['Wordpress', 'PHP', 'JS', 'jQuery', 'LAMP'],
      },
    ],
  },
}

export const projects = [
  {
    name: 'Praktykody', url: 'praktykody',
    img: 'praktykody.webp', date: '2022-08-25', color: '#ffffff',
    media: ['https://praktykody.github.io', { type: 'github', href: 'https://github.com/praktykody' }],
    category: ['teaching', 'code', 'HTML', 'CSS', 'JavaScript', 'Node.js'],
    desc: 'A website leading in easy way to learn the front-end',
    content: [
      'After every front-end course I optimized my presentations. One day I had idea to change presenting form from *.pptx to website and there she is.',
      'I published there the easiest way to learn about front-end technology. Every time I conduct another course, contents are evolving.',
    ],
  },
  {
    name: 'Anadar', url: 'anadar',
    img: 'anadar.webp', date: '2018-09-01', color: '#ffffff',
    media: ['https://www.youtube.com/embed/X7MoF4tvf2Q', 'anadar_restauracje.webp', 'anadar_locals.webp'],
    category: ['business', 'code', 'education', 'movie', 'HTML', 'CSS', 'JavaScript', 'Node.js', 'PHP', 'MySQL'],
    desc: 'A web platform for entrepreneurs to control and develop business',
    content: [
      'Anadar is a digital synthesis of management science theory. Its flexible interface allows CEOs of large companies, but also people in their small businesses to reduce expenses and increase profits.',
      'In October 2018, the program was expanded with a plug-in for a restaurant that integrates the kitchen with the counter and automatically analyzes the company\'s situation.',
      'In 2021, Bombel Tyj Anadar was awarded a plug "Anadar Locals", which is integrated with the cash register and the kitchen, making ordering and production processes faster.',
    ],
  },
  {
    name: 'Webions', url: 'webions',
    img: 'webions.webp', date: '2021-08-01', color: '#222222',
    media: ['https://www.youtube.com/embed/vgn3TVi4fU0', 'webions_1.webp', { type: 'github', href: 'https://github.com/apietryga/webions' }],
    category: ['game', 'code', 'HTML', 'SCSS', 'JavaScript', 'Node.js', 'Redis'],
    desc: 'Webions is a MMORPG game, available in browsers',
    content: [
      'In school age, I spent a lot of time playing Tibia. When I met Node.js, I decided to create a version of Tibia that could be played on all devices.',
      'Webions offers a small world with a few monsters, items, looting, quests, fist fighting, distance fighting, mwalls, automation shooting — all after entering the website in the browser.',
      'A public repository is available so every Tibia fan can enjoy the game. Just open sewer.js with Node.js.',
    ],
  },
  {
    name: 'uFlash', url: 'uflash',
    img: 'uflash.webp', date: '2020-03-23', color: '#ffffff',
    media: ['uflash_praca.webp', { type: 'igpost', id: 'B5P0GPLhPoZ' }, { type: 'instagram', href: 'https://www.instagram.com/uflashon/' }, { type: 'github', href: 'https://github.com/apietryga/uFlash' }],
    category: ['business', 'code', 'IoT', 'HTML', 'CSS', 'PHP', 'JavaScript'],
    desc: 'Interactive photo-mirror created for events or cultural places',
    content: [
      'A mirror measuring 160×80cm — one of the largest of its kind on the Polish market. Thanks to the simple WEB interface, it can communicate with any browser-enabled device.',
      'In 2023, I switched technology to Node.js and optimized the program to run on Raspberry Pi 3+. Added TensorFlow.js for face and emotion recognition.',
    ],
  },
  {
    name: 'Bombel Tyj', url: 'bombeltyj',
    img: 'bombeltyj.webp', date: '2021-03-23', color: '#DC468E',
    media: ['bombeltyj_1.webp', 'bombeltyj_2.webp'],
    category: ['renovations', 'business', 'code'],
    desc: 'Restaurant serving bubble-tea',
    content: [
      'We turned an industrial space into a gastronomic establishment — it took a lot of design and planning, for which we used 3D projects.',
      'We also did product photoshoots at Sanctuarium.',
    ],
  },
  {
    name: 'Pinky', url: 'pinky',
    img: 'pinky.webp', date: '2021-01-24', color: '#F6B9ED',
    media: ['pinky_server.webp', 'pinky_nest.webp'],
    category: ['IoT', 'code', 'Python', 'django', 'CPP', 'Arduino', 'HTML', 'CSS'],
    desc: 'Interactive home assistant for remote control of electrical appliances',
    content: [
      'Pinky is easy to adapt to your apartment — just switch on the server on a computer or Raspberry Pi. Equipped with speech recognition and the hotword "Pinky" based on PocketSphinx.',
      'The system consists of a server (Python + django) and a socket system "Pinky Nest", built on ESP8266 modules.',
      'At Sanctuarium, I used Pinky Nest Hidden — the same construction, but hidden in the wall.',
    ],
  },
  {
    name: 'Sanctuarium', url: 'sanctuarium',
    img: 'sanctuarium.webp', date: '2020-08-15', color: '#ffffff',
    media: ['https://www.youtube.com/embed/bjks8oaKip4', 'sanctuarium_2.webp', 'sanctuarium_3.webp'],
    category: ['renovations', 'code', 'IoT'],
    desc: 'An interactive showroom where I create and test projects',
    content: [
      'Having access to a room of approximately 30m², I decided to create a place where I will develop my projects.',
      'In addition to interactive projects such as uFlash and Wellton, the Sanctuarium is equipped with the Pinky system, which controls the light and the folding and unfolding of the bed.',
      'Although it serves as an office by default, the place is great for any type of initiative such as photo shoots or a recording studio.',
    ],
  },
  {
    name: 'Wellton', url: 'wellton',
    img: 'wellton.webp', date: '2017-12-12', color: '#729AAA',
    media: ['wellton_visualisation.webp', 'https://www.youtube.com/embed/lNKEEGrVEEw', 'https://www.youtube.com/embed/x2LeWqEt27g', 'wellton_visualisation2.webp'],
    category: ['business', 'IoT', 'code', 'HTML', 'CSS', 'PHP', 'JavaScript', 'Android'],
    desc: 'Interactive tables for restaurants',
    content: [
      'The table software is aimed at restaurants. Thanks to the Anadar plugin, it allows immediate analysis of orders in terms of product strategy.',
      'Two prototypes were built. The first with a classic table look on wooden legs and a 32" matrix.',
      'The second is a taller table based on a projector, making the worktop thickness just 8mm — two P4 toughened glass panes.',
    ],
  },
  {
    name: 'Kurs Front-end Dev', url: 'kurs-front-end',
    img: 'sfedev.webp', date: '2020-01-22', color: '#4F9690',
    media: ['/reference/1.webp'],
    category: ['teaching', 'code', 'HTML', 'CSS', 'SCSS', 'JavaScript', 'Node.js', 'jQuery', 'SEO'],
    desc: 'Course of the basics of WEB application programming',
    content: [
      'I have conducted over 1000 hours of front-end developer programming training. The courses are aimed at people looking for their professional path.',
      'The course includes: HTML5, CSS3 with SCSS preprocessors, Bootstrap 4, JavaScript + jQuery, AngularJS basics, ReactJS basics, SEO, PHP (for WordPress), CMS WordPress, GIT, NPM, Node.js.',
      'The course is flexible and comprehensive. I collect very positive references.',
    ],
  },
  {
    name: 'Śląska Akademia Senior@', url: 'slaska-akademia-seniora',
    img: 'slaskaakademiaseniora.webp', date: '2018-11-01', color: '#FFD1F2',
    media: ['/reference/4.webp', '/reference/3.webp', 'https://www.youtube.com/embed/SgVNov7eCq0', '/reference/5.webp'],
    category: ['teaching', 'social', 'movie'],
    desc: 'Course of digital competences for seniors',
    content: [
      'I started my career as a trainer with computer skills courses for seniors. The student group of this age is really thankful and overflowing with life experience.',
      'I conducted over 1000 training hours across the entire region of Silesia, getting to know lots of great seniors and collecting positive references.',
    ],
  },
  {
    name: 'Kurs Cyfrowy.pl', url: 'kurscyfrowy-pl',
    img: 'kurscyfrowy.webp', date: '2020-04-10', color: '#ADFFAD',
    media: ['kurscyfrowy_plakat.webp', 'https://www.youtube.com/embed/fYKp4NstrBQ'],
    category: ['teaching', 'social', 'HTML', 'CSS', 'JavaScript'],
    desc: 'Course of digital competences',
    content: [
      'After the courses at Silesian Senior@ Academy, we got many questions from alumni on their independent digital path. We decided to construct a project for knowledge exchange even after the course.',
      'We created a Facebook group where everyone hungry for digital knowledge can join. Graduates ask questions and answer each other.',
    ],
  },
  {
    name: 'LOB MasterKey', url: 'masterkey',
    img: 'masterkey.webp', date: '2016-02-15', color: '#F78F1D',
    media: ['masterkey_1.webp', 'masterkey_2.webp'],
    category: ['webdevelopment', 'code', 'HTML', 'CSS', 'JS', 'jQuery', 'PHP'],
    desc: 'Order configurator for the MasterKey key manufacturer',
    content: [
      'Masterkey technology allows you to open multiple locks with one key. We created a configurator for creating locks and keys and then determining the dependencies between them.',
      'I created a system that replaces the entered information on the standard manufacturer form *.xml and automatically sends the order.',
    ],
  },
  {
    name: 'GoodLock', url: 'goodlock',
    img: 'goodlock.webp', date: '2016-05-01', color: '#bbbbbb',
    media: ['goodlock_1.webp', 'goodlock_2.webp', 'goodlock_ulotka.webp'],
    category: ['webdevelopment', 'code', 'HTML', 'CSS', 'JS', 'PHP', 'MySQL'],
    desc: 'Website + reservation system + admin panel for escape room',
    content: [
      'I created a website for the escape room — a company showcase with presented services.',
      'Plus a simple visit booking form with a CMS that allows you to add non-working days and verify reservations.',
      'I also created the escape-room logo and advertising materials such as banners and leaflets.',
    ],
  },
  {
    name: 'TOMIgra', url: 'tomigra',
    img: 'tomigra.webp', date: '2015-09-03', color: '#B2EF6B',
    media: ['tomigra1.webp', 'tomigra2.webp'],
    category: ['teaching', 'code', 'HTML', 'CSS', 'JS', 'jQuery'],
    desc: 'Educational game for children of music and elementary schools',
    content: [
      'The design led the user through successive boards with musical tasks. Depending on the selected module and user\'s advancement, the tasks were of varying difficulty.',
      'I wrote all the game mechanics — moving notes onto the staff with field verification, instrument selection. Everything in JS and jQuery, backend in Laravel.',
    ],
  },
  {
    name: 'YanoMebel', url: 'yanomebel',
    img: 'yanomebel.webp', date: '2014-05-10', color: '#F1BF00',
    media: ['yano_1.webp'],
    category: ['webdevelopment', 'HTML', 'CSS', 'PHP', 'Wordpress'],
    desc: 'Editing of the furniture manufacturer\'s website',
    content: [
      'My first commercial commission — adding the option to change languages on the already prepared translation. I also improved site navigation.',
      'Everything is based on WordPress and the page with my modifications works to this day.',
    ],
  },
  {
    name: 'Polish Makers', url: 'polish-makers',
    img: 'polishmakers.webp', date: '2016-02-15', color: '#ff0000',
    media: ['https://www.youtube.com/embed/fDDymBgEMLk', 'https://www.youtube.com/embed/rsp7LJa7-Fc'],
    category: ['movie'],
    desc: 'Team taking part in RedBull Can You Make It',
    content: [
      '"We Can Make It" — the slogan that guided us during creating a film and during a promotional campaign.',
      'The film aroused considerable interest among the student community and we gained experience in marketing.',
    ],
  },
  {
    name: 'Szalejemy Budujemy', url: 'szalejemy-budujemy',
    img: 'szalejemybudujemy.webp', date: '2020-04-04', color: '#93AAC9',
    media: ['https://www.youtube.com/embed/htItjXAqpDo'],
    category: ['YouTube', 'movie'],
    desc: 'YouTube channel about construction',
    content: [
      'In this project, I was responsible for the implementation. I prepared the intro for the channel, which is still used today, and I edited the first episode.',
    ],
  },
  {
    name: 'LiveShare', url: 'liveshare',
    img: 'liveshare.webp', date: '2015-12-05', color: '#B05111',
    media: ['https://www.youtube.com/embed/-ziFSL_WbiY'],
    category: ['IoT', 'code', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    desc: 'A program for transferring items between screens',
    content: [
      'Lets you upload text, video from YouTube/CDA, photo or website between phone/computer/TV screen.',
      'There is no screen limit and it is easy to adjust to the content sent.',
    ],
  },
  {
    name: 'Jerzy Malcher Film', url: 'jerzy-malcher-film',
    img: 'jmalcher.webp', date: '2017-10-11', color: '#464A35',
    media: ['jerzymalcher_foto1.webp', 'https://www.youtube.com/embed/2FYxPa2Uv2Y', 'https://www.youtube.com/embed/iqlRAYE5ys0'],
    category: ['movie', 'acting'],
    desc: 'A film commemorating the hero Jerzy Malcher',
    content: [
      'The title character came from the town where I was born. My participation in the film is mainly technical — setting lights, making smoke, recording sound. Besides, I played the role of a University of Silesia student.',
    ],
  },
]
