export default{
  projects:[
    { name: "Anadar",
      media:[
        "https://www.youtube.com/embed/X7MoF4tvf2Q",
        "anadar_restauracje.webp",
        "anadar_locals.webp"
      ],
      img: "anadar.webp",
      date: "2018-09-01",
      color: "#ffffff",
      url: "anadar",
      lang: {
        pl : {
          category: ["biznes", "nauka", "film", "kodowanie","HTML", "CSS","JavaScript", "JS", "Node.js","PHP", "MySQL"],
          desc: "Platforma dla przedsiębiorców, do kontrolowania i rozwijania swojego biznesu",
          content: [
            `Anadar jest cyfrową syntezą teorii nauki zarządzania. 
            Jego elastyczny interface pozwala korzystać z niego 
            prezesom wielkich firm, ale i osobom prowadzącym małe biznesy. 
            W obydwu przypadkach program pomoże przedsiębiorcy ograniczyć wydatki 
            i zwiększyć zyski.`,
            `W Październiku 2018 roku program został rozbudowany o wtyczkę dla restauracji, która 
            integruje kuchnię z ladą oraz automatycznie dokonuje analizy sytuacji firmy.`,
            `W grudnio 2018 roku powstał koncept kart rabatowych, wspomagających 
            kooperacje lokalnych przedsiębiorstw.`,
            `W 2021 roku, w związku z rozwojem projektu Bobel Tyj Anadar został porzeszony o wtyczkę
            "Anadar Locals", która jest zintegrowana z kasą fiskalną oraz kuchnią, co przyspiesza 
            procesy zamawiania i produkcji.`
          ],
        },
        en : {
          category: ["business", "education", "movie", "coding","HTML", "CSS","JavaScript", "JS", "Node.js","PHP", "MySQL"],
          desc: "A web platform for enterpeurs to control and developing business",
          content: [
            `Anadar is a digital synthesis of management science theory.
              Its flexible interface allows you to use it
              CEOs of large companies, but also people in their small businesses.
              In both cases, the program will help entrepreneurs to reduce expenses
              and increase profits.`,
              `In October 2018, the program was expanded with a plug-in for a restaurant that
              integrates the kitchen with the counter and automatically analyzes the company's situation.
              In December 2018, project get the concept of rebate cards which supports
              cooperation of local enterprises`,
              `In 2021, due to the development of the project, Bombel Tyj Anadar was awarded a plug
              "Anadar Locals", which is integrated with the cash register and the kitchen, which makes it faster
              ordering and production processes`,
          ],                
        }
      }
    },
    { name: "Webions",
      img: "webions.webp",
      date: "2021-08-01",
      color: "#222222",
      url: "webions",
      media:[
        'https://www.youtube.com/embed/vgn3TVi4fU0',
        'webions_1.webp',
        {
          type:'github',
          href: 'https://github.com/apietryga/webions',
        },
      ],
      lang: {
        pl: {
          category : ["gra","kodowanie","HTML", "SCSS","JavaScript", "JS", "Node.js","Redis"],
          desc : "Webions jest grą MMORPG, dostępną na przeglądarkach.",
          content : [
            `W wieku szkolnym mnóstwo czasu poświęcałem grze Tibia. Zawsze kiedy odchodziłem od komputera,
            bolało mnie to, że nie mogę wyciągnąć telefonu i rozwijać postaci poza komputerem. Kiedy poznałem
            technologię Node.js, uznałem ją za nieocenioną technologię (javascript everywhere) i postanowiłem 
            stworzyć coś ciekawego. Łącząc kropki padło na wersję Tibii, w którą dałoby się grać na wszystkich urządzeniach`,
            `Webions oferuje mały świat z kilkoma 
              potworami, itemami, lootingiem, questami 
              fist Fightigiem, distance Fightingiem, mwalls'ami, 
              automatycznym shootiniem i auto mwall'ami,
              - a to wszystko tylko po wejściu na stronę w przeglądarce`,
            `Aby każdy fan Tibii mógł cieszyć się tą grą - udostępniłem publiczne repozytorium z grą - wystarczy otworzyć serwer.js node.js'em . (lub wrzucić na heroku)`,
            `Chcesz zagrać? Wystarczy, że wejdziesz na <b><a href="http://webions.herokuapp.com/" target="_blank">http://webions.herokuapp.com/</a></b>`
          ]              
        },
        en: {
          category : ["game","coding","HTML", "SCSS","JavaScript", "JS", "Node.js","Redis"],
          desc : "Webions is a MMORPG game, avalible on browsers.",
          content : [
            `In school age, I spent a lot of time playing Tibia. Whenever I walked away from my computer
            it hurt me not being able to pull out my phone and develop characters outside of the computer. When i met
            Node.js technology, found it an invaluable technology (javascript everywhere) and decided to
            create something interesting. Connecting the dots i decide to make version of Tibia that could be played on all devices`,
            `Webions offers a small world with a few monsters, items, looting, quests 
            fist Fightig, distance Fighting, mwalls, 
            Automation shooting, Automaton Mwalls,
            - and all this only after entering the website in the browser`,
            `So that every Tibia fan can enjoy this game - I have made available a public repository - just open sewer.js by node.js (or push this repository to heroku)`,
            `Do you want to play? Just go to <b> <a href="http://webions.herokuapp.com/" target="_blank"> http://webions.herokuapp.com/ </a> </b>`,
          ]              
        },

      }
    },
    { name: "uFlash",
      color: "#ffffff",
      img: "uflash.webp",
      date: "2020-03-23",
      url: "uflash",
      media: [
        "uflash_praca.webp",
        {
          type:'igpost',
          id: 'B5P0GPLhPoZ'
        },
        {
          type:'igpost',
          id: 'B9bkKoyBGAI'
        },
      ],
      lang: {
        pl:{
          category: ["biznes","IoT","film","kodowanie","HTML", "CSS", "PHP", "JavaScript", "JS"],
          desc: "Interaktywne fotolustro przeznaczone na imprezy okolicznościowe lub do miejsc kultury",
          content : [
            `Lustro o wymiarach 160 x 80cm sprawia, że produkt 
            jest jednym z największych tego typu dostępnych na rynku.`,
            `Dzięki prostemu WEB interface lustro potrafi w prosty sposób
            komunikować się z urządzeniami obsługującymi przeglądarki (komputery, tablety, telefony)`,
            `Więcej informacji znajdziesz
            <a href='http://apietryga.web.app/uflash.pl/' target='_blank'>na tej stronie</a>`
          ],    
        },
        en : {
          category: ["business","IoT","movie","coding","HTML", "CSS", "PHP", "JavaScript", "JS"],
          desc: "Interactive photo-mirror created for events or cultural places",
          content : [
            `A mirror measuring 160 x 80cm makes the product
            is one of the largest of its kind available on the polish market.`,
            `Thanks to the simple WEB interface, the mirror can be used in a simple way
            communicate with devices that support browsers (computers, tablets, phones).`,
            `For more information
            <a href='http://apietryga.web.app/uflash.pl/' target='_blank'> see this website </a> `,
          ],    
        }
      },
    },
    { name: "Bombel Tyj",
      color:"#DC468E",
      img: "bombeltyj.webp",
      date: "2021-03-23",
      url: "bombeltyj",
      media:[
        'bombeltyj_1.webp',
        'bombeltyj_2.webp',
      ],
      lang:{
        pl:{
          category: ['biznes', 'remont', '3d'],
          desc: "Restauracja serwująca bubble-tea",
          content: [
            `Przekształciliśmy lokal przemysłowy w gastronomiczny - wymagało to mnóstwa
            projektowania i planowania, do czego używaliśmy projektów 3D`,
            `Robiliśmy też sesje zdjęciowe produktów, które odbywały się na </b>Sanctuarium<b>.`,
            `<a href="https://bombeltyj.pl">Sprawdź nasze menu tutaj!</a>`,
          ]
        },
        en:{
          category: ['renovations','business', '3d'],
          desc: "Restaurant serving bubble-tea",
          content: [
            `We turned an industrial into a gastronomic establishment - it took a lot
            design and planning, for which we used 3D projects`,
            `We also did product photoshoots at </b> Sanctuarium <b> .`,
            `<a href="https://bombeltyj.pl">Check our menu here!</a>`,
            ]
        },
      },
    },
    { name:"Pinky",
      color: "#F6B9ED",
      img: "pinky.webp",
      date: "2021-01-24",
      url: "pinky",
      media:[
        "pinky_server.webp",
        "pinky_nest.webp",
      ],
      lang: {
        pl: {
          category : ["iOT","kodowanie", "Python", "django", "CPP", "Arduino", "HTML", "CSS"],
          desc : "Interaktywny asystent domu, do zdalnego kontrolowania urządzeń elektrycznych",
          content : [
            `Pinky łatwo dostosować do swojego mieszkania, wystarczy włączyć 
            prosty w obsłudze serwer na komputerze lub raspberry pi. 
            System jest wyposażony w rozpoznawanie mowy oraz w hotword "Pinky" - oparty na PocketSphinx 
            - jedynym systemie jaki znalazłem, który nie wymaga połączenia z internetem (stąd decyzja o stworzeniu 
              projektu w Pythonie)`,
            `Cały system składa się z serwera (Python + django) oraz systemu gniazdek "Pinky Nest", 
            które zbudowałem na modułach ESP8266`,
            `Na Sanctuarium zastosowałem Pinky Nest Hidden - czyli te same konstrukcje, lecz ukryte 
            w ścianie.`
          ]              
        },
        en: {
          category : ["iOT","coding", "Python", "django", "CPP", "Arduino", "HTML", "CSS"],
          desc : "Interactive home assistant for remote control of electrical appliances",
          content : [
            `Pinky is easy to adapt to your apartment, just switch it on
            easy to use server on a computer or raspberry pi.
            The system is equipped with speech recognition and the hotword "Pinky" - based on PocketSphinx
            - the only system I found that does not require an internet connection (hence the decision to create
              this project in Python)`,
            `The whole system consists of a server (Python + django) and a socket system "Pinky Nest",
            which I built on ESP8266 modules`,
            `At Sanctuarium, I used Pinky Nest Hidden - the same constructions, but hidden
            in the wall`,
          ]              
        },

      }
    },
    { name:"Sanctuarium",
      color: "#ffffff",
      img: "sanctuarium.webp",
      date: "2020-08-15",
      url: "sanctuarium",
      media:[
        "https://www.youtube.com/embed/bjks8oaKip4",
        "sanctuarium_2.webp",
        "sanctuarium_3.webp",
      ],
      lang: {
        pl: {
          category : ['remont', 'kodowanie', 'iOT'],
          desc : "Interaktywny showroom, w którym tworzę i testuję projekty",
          content : [
            `Mając dostęp do pomieszczenia około 30m² postanowiłem stworzyć miejsce, gdzie będę rozwijał projekty.`,
            `Poza interaktywnymi projektami, jak uFlash czy Wellton, Sanctuarium wyposażone jest
            w system Pinky, który kontroluje światło oraz składanie i rozkładanie łóżka`,
            `Choć domyślnie służy jako biuro, miejsce świetnie sprawdza się w każdego rodzaju inicjatywach
            takich jak sesje zdjęciowe czy studio nagrań.`,
          ]
        },
        en: {
          category : ['renovations', 'coding', 'iOT'],
          desc : "An interactive showroom where I create and test projects",
          content : [
            `Having access to a room of approximately 30m², I decided to create a place where I will develop my projects.`,
            `In addition to interactive projects such as uFlash and Wellton, the Sanctuarium is equipped
            the Pinky system, which controls the light and the folding and unfolding of the bed,`,
            `Although it serves as an office by default, the place is great for any type of initiative
            such as photo shoots or a recording studio.`,
          ]
        },
        
      }
    },
    { name: "Wellton",
      img: "wellton.webp",
      date: "2017-12-12",
      color: "#729AAA",
      url: "wellton",
      media: [
        "wellton_visualisation.webp",
        "https://www.youtube.com/embed/lNKEEGrVEEw",
        "https://www.youtube.com/embed/x2LeWqEt27g",
        "wellton_visualisation2.webp"
      ],
      lang : {
        pl: {
          category: ["biznes","IoT","kodowanie","HTML","CSS","PHP","JavaScript","JS","Android"],
          desc: "Projekt interaktywnych stołów przeznaczonych do restauracji.",
          content : [
            `Oprogramowanie stołów jest skierowane do restauracji.
            Dzięki wtyczce projektu Anadar pozwala na natychmiastową analizę zamówień
            pod kątem strategii produktowej.`,
            `Powstały dwa prototypy tego produktu. Pierwszy z klasycznym wyglądem stołu
            na drewnianych nogach i matrycą o przekątnej 32'`,
            `Oraz wyższy stół oparty na projektorze, dzięki czemu grubość
            blatu wyniosła 8mm, co stanowiły dwie szyby hartowane P4 odprone na uszkodzenia
            mechaniczne`,
            `Projekt obecnie znajduje się w fazie prototypowej.`,
          ]

        },
        en: {
          category: ["business","IoT","coding","HTML","CSS","PHP","JavaScript","JS","Android"],
          desc: "Interactive tables for restaurants.",
          content : [
            `The table software is aimed at restaurants.
            Thanks to the plugin of the Anadar project, it allows you to analyze orders immediately
            in terms of the product strategy.`,
            `Two prototypes of this product were built. The first with a classic table look
            on wooden legs and a 32 '' matrix,`,
            `And a taller table based on the projector, making it thick
            of the worktop was 8mm, which was two P4 toughened glass panes resistant to damage
            mechanical`,
            `The project is currently in the prototype stage .`,
          ]

        },
      },
    },
    { name: "Polish Makers",
      img: "polishmakers.webp",
      date: "2016-02-15",
      color: "#ff0000",
      url: "polish-makers",
      media:[
        "https://www.youtube.com/embed/fDDymBgEMLk",
        "https://www.youtube.com/embed/rsp7LJa7-Fc",
      ],
      lang: {
        pl: {
          category: ["film"],
          desc: "Team startujący w RedBull Can You Make It",
          content: [
            `We Can Make It - to hasło które przyświecało nam podczas
            tworzenia filmu, ale i także w trakcie kampanii promocyjnej`,
            `Film wzbudził spore zainteresowanie wśród społeczności 
            studenckiej, a my zdobywaliśmy doświadczenie w 
            marketingu. W trakcie kampanii promocyjnej stworzyliśmy
            film walentynkowy w kooperacji z wtedy jeszcze raczkującym
            start-upem AbyssGlass.`,
            `Finalnie nie udało nam się pojechać na trip, ale nabyliśmy
            sporo doświadczenia.`,
          ],
        },
        en: {
          category: ["movie"],
          desc: "Team taking part in RedBull Can You Make It",
          content: [
            `We Can Make It - this is the slogan that guided us during
            creating a film, but also during a promotional campaign`,
            `The film aroused considerable interest among the community
            student, and we gained experience in
            marketing. During the promotional campaign, we created
            Valentine's Day film in cooperation with the then still fledgling film
            AbyssGlass start-up`,
            `Finally, we didn't make the trip, but we did
            a lot of experience.`,
          ],
        },
      },
    },
    { name: "LiveShare",
      img: "liveshare.webp",
      date: "2015-12-05",
      color: "#B05111",
      url: "liveshare",
      media: [
        "https://www.youtube.com/embed/-ziFSL_WbiY",
        {
          type: "igpost",
          id: "-ufmdAIfqq"
        },
        {
          type: "projects",
          name: "Sanctuarium"
        }
      ],
      lang:{
        pl:{
          category: ["IoT","kodowanie","HTML","CSS","JavaScript", "JS", "PHP"],
          desc: "Program do przesyłania elementów pomiędzy ekranami",
          content:[
            `Pozwala przesłać tekst, film z yt / cda, zdjęcie lub stronę internetową
            pomiędzy ekranem telefonu / komputera / telewizora.`,
            `Nie ma limitu ekranów i łatwo go dostosować co do przesyłanych treści`,
            `Projekt leży w ''szufladzie'', ale będzie użyty w projekcie ''Sanctuarium''`,
          ],
        },
        en:{
          category: ["IoT","coding","HTML","CSS","JavaScript", "JS", "PHP"],
          desc: "A program for transferring items between screens",
          content:[
            `Lets you upload text, video from yt / cda, photo or website
            between the phone / computer / TV screen.`,
            `There is no screen limit and it is easy to adjust to the content sent`,
            `The 'design is in a' drawer 'but will be used in a' Sanctuarium 'design`,
          ],
        }
      },
    },
    { name: "Tanker",
      color:"#D9BD90",
      img: "tanker.webp",
      date: "2012-05-15",
      url: "tanker",
      media: [
        "tanker_1.webp",
        "tanker_2.webp",
        "tanker_3.webp",
        "tanker_4.webp",
      ],
      lang: {
        pl: {
          category: ["motoryzacja"],
          desc: "Custom Chopper stworzony na bazie Rometa Kadetta",
          content: [
            `Projekt rozpocząłem w mając 16 lat od zmiany konstrukcji  ramy`,
            `Po kosmetycznej poprawie zrobiłem również koncept baku`,
            `Po malowaniu, modelowaniu i przerobieniu paru części
            motor zaczynał nabierać kształtów`,
            `Na tym etapie zakończyłem prace nad projektem`,
            `Projekt został sprzedany.`,
          ],
        },
        en: {
          category: ["moto"],
          desc: "Custom Chopper based on Romet Kadett",
          content: [
            `I started the project at the age of 16 with the change of the frame structure`,
            `After cosmetic improvement, I also made the concept of the fuel tank`,
            `After painting, modeling and reworking a few parts
            the bike was starting to take shape`,
            `At this stage, I have completed work on the project`,
            `The project has been sold .`,
          ],
        },
      },
    },
  // ],
  // exps:[
    { name: "Single Courses",
      img: "singlecourses.webp",
      date: "2020-03-15",
      color: "#ffffff",
      url: "single-courses",
      media: [
        {
          type:"github",
          href: "https://github.com/taicoders/kurspython"
        },
        {
          type:"github",
          href: "https://github.com/taicoders/kursjava"
        },
        {
          type:"github",
          href: "https://github.com/taicoders/kurseo"
        },
      ],
      lang:{
        pl:{
          category:["szkolenia", "Python", "django", "Java", "Spring", "SEO"],
          desc:`Pojedyncze szkolenia, które prowadziłem nie więcej niż 5 razy.`,
          content: [
            /*html*/`<h3>Kurs Python</h3>
            <ul>
              <li>Zintegrowane Środowisko Programistyczne</li>
              <li>Struktury danych</li>
              <li>Podstawowe instrukcje</li>
              <li>Zasady tworzenia dokumentacji</li>
              <li>Funkcje</li>
              <li>Programowanie obiektowe</li>
              <li>Web API - django</li>
            </ul>
            <p>Pliki stworzone podczas tego kursu możesz zobaczyć w serwisie github</p>`,
            
            /*html*/`<h3>Kurs Java</h3>
            <ul>
              <li>Podstawy języka Java</li>
              <li>Typy zmiennych</li>
              <li>Metody wywoływania programów na ekranie</li>
              <li>Funkcje matematyczne</li>
              <li>Metody pobierania danych od użytkownika</li>
              <li>Programowanie obiektowe w Javie</li>
              <li>Grafika AWT i Swing</li>
              <li>Web API - Spring</li>
            </ul>
            <p>Pliki stworzone podczas tego kursu możesz zobaczyć w serwisie github</p>`,

            /*html*/`<h3>Kurs SEO</h3>
            <ul>
              <li>Optymalizacja on-page / off-page</li>
              <li>Architektura treści</li>
              <li>Semantyka, optymalizacja kodu</li>
              <li>Linkowanie wewnętrzne / zewnętrzne</li>
              <li>Mapa witryny</li>
              <li>Działanie wyszukiwarki Google</li>
              <li>Skanowanie, indeksowanie</li>
              <li>Opytmalizacja UX i UI</li>
              <li>Dobre / Złe praktyki</li>
              <li>Słowa kluczowe</li>
              <li>Narzędzia SEO - Ahrefs, Majestic, GTMetrix, Senuto, SemRush</li>
              <li>Budżet i strategia</li>
              <li>Badanie konkurencji</li>
              <li>Domena i Hosting</li>
              <li>Narzędzia google - Analytics, Search Console, Merchant, Buisness</li>
              <li>Blog jako miejsce budowy contentu</li>
            </ul>

            <p>
              Na tym kursie praktycznie wprowadzaliśmy poznane technologie. Jednym z wyników tego kursu
              jest strona poświęcona tematyce drzewek bonsai - wpisz w google "strona o bonzajach" 
              - pierwszym wynikiem będzie <a href="https://apietryga.github.io/kurseo/" target="_blank"><b>ta strona</b></a>
            </p>

            `,

            /*html*/`<h3>Social Media w Biznesie</h3>
            <ul>
              <li>Mechanizmy SM</li>
              <li>Psychologia użytkownika</li>
              <li>SM w sprzedaży i marketingu</li>
              <li>Strategia działania</li>
              <li>Facebook jako narzędzie wykorzystywane przez biznes - case study</li>
              <li>LinkedIn jako narzędzie do budowania marki - case study</li>
              <li>Wykorzystanie w biznesie Twitter, Youtube, Instagram, Google</li>
              <li>Przeszłe i przyszłe trendy</li>
              <li>short video, tiktok</li>
              <li>Content marketing</li>
              <li>Webwriting, copywriting</li>
              <li>Świadomość marki</li>
              <li>Tworzenie reklam / ogłoszeń</li>
            </ul>
            <p>
              Ten kurs trwał 3 dni, stąd mieliśmy czas tylko na teorię popartą przykładami, 
              ale social media kursantów zmieniły się nie do poznania.
            </p>
            `,
          ]
        },
        en:{
          category:["courses", "Python", "django", "Java", "Spring", "SEO"],
          desc:`Single courses that I have conducted no more than 5 times.`,
          content: [
            /*html*/`<h3>Python Course</h3>
            <ul>
              <li>Integrated Development Environment</li>
              <li>Data structures</li>
              <li>Basic instructions</li>
              <li>Principles of creating documentation</li>
              <li>Funcions</li>
              <li>Object oriented programming (OOP)</li>
              <li>Web API - django</li>
            </ul>
            <p>You can see the files created during this course on github</p>`,
            
            /*html*/`<h3>Java Course</h3>
            <ul>
              <li>Basics of the Java language</li>
              <li>Variable types</li>
              <li>Methods of calling programs on the screen</li>
              <li>Math functions</li>
              <li>Methods of retrieving data from the user</li>
              <li>Object-oriented programming in Java</li>
              <li>AWT and Swing graphics</li>
              <li>Web API - Spring</li>
              <li>Basics of the Java language</li>
            </ul>
            <p>You can see the files created during this course on github</p>`,

            /*html*/`<h3>SEO Course</h3>
            <ul>
              <li>On-page / off-page optimization</li>
              <li>Content Architecture</li>
              <li>Semantics, code optimization</li>
              <li>Internal / external linking</li>
              <li>Site Map</li>
              <li>The operation of the Google search engine</li>
              <li>Scanning, indexing</li>
              <li>UX and UI optimization</li>
              <li>Good / Bad practices</li>
              <li>Keywords</li>
              <li>SEO tools - Ahrefs, Majestic, GTMetrix, Senuto, SemRush</li>
              <li>Budget and strategy</li>
              <li>Competition research</li>
              <li>Domain and Hosting</li>
              <li>Google tools - Analytics, Search Console, Merchant, Buisness</li>
              <li>Blog as a place to build content</li>
            </ul>

            <p>
              In this course, we practically introduced the known technologies. One of the results of this course 
              is a website dedicated to bonsai trees - try to google "strona o bonzajach" 
              - the first result will be <a href="https://apietryga.github.io/kurseo/" target="_blank"><b>this page</b></a>
            </p>
            `,

            /*html*/`<h3>Social Media in Business</h3>
            <ul>
              <li>Mechanisms of MS</li>
              <li>User psychology</li>
              <li>SM in sales and marketing</li>
              <li>Action strategy</li>
              <li>Facebook as a tool used by business - case study</li>
              <li>LinkedIn as a brand building tool - case study</li>
              <li>Use in business Twitter, Youtube, Instagram, Google</li>
              <li>Past and future trends</li>
              <li>Short video content, tiktok</li>
              <li>Content marketing</li>
              <li>Webwriting, Copywriting</li>
              <li>Brand awareness</li>
              <li>Creation of advertisements / announcements</li>
            </ul>
            <p>
              This course lasted 3 days, so we had time only for the theory supported by examples, 
              but the students' social media changed beyond recognition.
            </p>
            `,
          ]
        },

      }
    },
    { name: "Kurs Front-end Dev",
      img: "sfedev.webp",
      date: "2020-01-22",
      color: "#4F9690",
      url: "kurs-front-end",
      media: [
        "/reference/1.webp"
      ],
      lang:{
        pl:{
          category: ["szkolenia","webdevelopment","HTML","CSS","SCSS","JavaScript","JS","Node.js", "jQuery", "SEO"],
          desc : "Szkolenie podstaw programowania aplikacji WEB",
          content:[
            `Przeprowadziłem ponad 1000 godzin szkoleń z programowania
            front-end developer. Szkolenia są skierowane dla
            osób poszukujących swojej ścieżki zawowdowej. Na kursie 
            uczą się podstaw wymaganych do pracy w zawodzie.`,
            `Szkolenie front-end dev obejmuje: <br />
            - HTML5<br />
            - CSS3 wraz z preprocesorami SASS, LESS, SCSS <br />
            - Bootstrap 4 <br />
            - JavaScript (JS) + jQuery, <br />
            - AngularJS (podstawy) <br />
            - ReactJS (podstawy) <br />
            - SEO<br />
            - PHP (na potrzeby WP)<br />
            - CMS WordPress<br />
            - GIT<br />
            - NPM<br />
            - Node.js (nodejs)`,
            `Kurs jest elastyczny i wrzechstronny. Zbieram bardzo pozytywne referencje.`,
          ],              
        },
        en:{
          category: ["courses","webdevelopment","HTML","CSS","SCSS","JavaScript","JS","Node.js", "jQuery", "SEO"],
          desc : "Course of the basics WEB application programming",
          content:[
            `I have conducted over 1000 hours of programming training
            front-end developer. The training courses are aimed at
            people looking for their professional path. On the course
            learn the basics required to work in the profession.`,
            `The front-end dev training course includes: <br />
            - HTML5 <br />
            - CSS3 with SASS, LESS, SCSS preprocessors <br />
            - Bootstrap 4 <br />
            - JavaScript (JS) + jQuery, <br />
            - AngularJS basics <br />
            - ReactJS basics <br />
            - SEO <br />
            - PHP (for WP purposes) <br />
            - CMS WordPress <br />
            - GIT <br />
            - NPM <br /> 
            - Node.js (nodejs)`,
            `The course is flexible and comprehensive. I am collecting very positive references.`,
          ],              
        },
      },
    },
    { name: "Śląska Akademia Senior@",
      img: "slaskaakademiaseniora.webp",
      date: "2018-11-01",
      color: "#FFD1F2",
      url: "slaska-akademia-seniora",
      media:[
        {
          type:'fbpost',
          href:"https://www.facebook.com/cyfrowy.slask/photos/a.481559862658219/481557912658414",
        },
        {
          type:'fbpost',
          href:"https://www.facebook.com/cyfrowy.slask/posts/583869765760561",
        },
        "/reference/4.webp",
        "/reference/3.webp",
        {
          type:'exps',
          name: 'Kurs Cyfrowy.pl',          
        },
        "https://www.youtube.com/embed/SgVNov7eCq0",
        "/reference/5.webp",
      ],
      lang:{
        pl:{
          category: ["szkolenia","społeczne","film"],
          desc: "Szkolenia kompetencji cyfrowych",
          content: [
            `Karierę trenera rozpocząłem od kursów obsługi komputera dla seniorów.
            Grupa kursantów w tym wieku jest naprawdę wdzięczna i przepełniona
            doświadczeniem życiowym. Nauczyłem się prowadzić zajęcia w sposób jak najbardziej przejrzysty.`,
            `Prowadziłem szkolenia z zakresu <br />
              - Obsługa podstawowych programów Windows (Paint, Rejestrator głosu, aparat, Edytor Video) <br />
              - Obsługa pakietu MS OFFICE, a także Google Docs (Word, Excel, PowerPoint - a także odpowiedniki Docs, Sheets)<br />
              - Obsługa przeglądarki, aplikacji Google (gmail, mapy, zdjęcia, dysk, youtube, kalendarz, keep, tłumacz, blogger, hangouts)<br />
              - Obsługa allegro, OLX, Ceneo <br />
              - Obsługa kont bankowych na przykładach IPKO i MBANK<br />
              - Obsługa stron rządowych, podpisów elektronicznych oraz e-recept <br />
              - Planowanie wakacji za pomocą esky.pl, AirBnb, booking.com<br />`,
            `A wszystko odbywało się w pierwszej fazie na komputerze (kurs A1), a później na tablecie (B2).`,
            `Przeprowadziłem ponad 1000 godzin szkoleniowych w rejonie całego Śląska
            - od Krzyżanowic przez Rybnik po Chorzów i Siemianowice Śląskie, poznając 
            mnóstwo wspaniałych seniorów i zbierając pozytywne referencje.`,
            `To za sprawą tych szkoleń powstał projekt kurscyfrowy.pl`,
            `W ramach projektu zorganizować wycieczkę 10 seniorów o dystansie 700m, a także
            zaciekawić ich takimi aplikacjami jak Aparat, Mapy Google, Kalendarz
            Google oraz Hangouts.`,
            `Wszyscy, którzy wzięli udział w „Cyfrowej Majówce” są dla nas liderami cyfryzacji. 
            Doceniam zapał, chęci, a przede wszystkim pomysłowość – mówi minister cyfryzacji 
            Marek Zagórski`,
          ],
        },
        en:{
          category: ["courses","social","movie"],
          desc: "Course of digital competences",
          content: [
            `I started my career as a trainer with computer skills courses for seniors.
            The student group of this age is really thankful and overcrowded
            life experience. I learned to conduct classes as transparently as possible.`,
            `I conducted trainings in the field of <br />
              - Support for basic Windows programs (Paint, Voice Recorder, Camera, Video Editor) <br />
              - Support for MS OFFICE package, as well as Google Docs (Word, Excel, PowerPoint - as well as Docs, Sheets equivalents) <br />
              - Browser support, Google applications (gmail, maps, photos, drive, youtube, calendar, keep, translator, blogger, hangouts) <br />
              - Allegro, OLX, Ceneo support <br />
              - Support for bank accounts on the examples of IPKO and MBANK <br />
              - Support for government websites, electronic signatures and e-prescriptions <br />
              - Planning holidays using esky.pl, AirBnb, booking.com <br /> `,
            `And everything took place in the first phase on the computer (course A1), and then on the tablet (B2) .`,
            ` I have conducted over 1000 training hours in the entire region of Silesia
            - from Krzyżanowice through Rybnik to Chorzów and Siemianowice Śląskie, getting to know
            lots of great seniors and collecting positive references.`,
            `It was thanks to these trainings that the following projects were created: Kurscyektyw.pl and Cyfrowa Majówka`,
          ],
        },
      },
    },
    { name: "Kurs Cyfrowy.pl",
      img: "kurscyfrowy.webp",
      date: "2020-04-10",
      color: "#ADFFAD",
      url: "kurscyfrowy-pl",
      media:[
        "kurscyfrowy_plakat.webp",
        {
          type: "fbgroup",
          img: "https://scontent.fwaw7-1.fna.fbcdn.net/v/t1.6435-9/78856084_2547039475379560_2129939445330214912_n.jpg?stp=dst-jpg_s960x960&_nc_cat=110&ccb=1-5&_nc_sid=8631f5&_nc_ohc=cDEr9duIQzcAX_jBin-&_nc_ht=scontent.fwaw7-1.fna&oh=00_AT8xNLs2QCMsHShhnnjfyYGF5PmiZD5M__dL3BGkCGI1Cw&oe=6247B527",
          href: "https://www.facebook.com/groups/kurscyfrowy"
        },
        "https://www.youtube.com/embed/fYKp4NstrBQ",
        "https://www.youtube.com/embed/6liLfVHJCFY",
      ],
      lang:{
        pl:{
          category: ["społeczne","programy","nauka", "HTML", "CSS", "JavaScript", "JS"],
          desc: "Projekt nauki kompetencji cyfrowych",
          content:[
            `Po kursach prowadzonych w ramach Śląskiej Akademii Senior@
            często otrzymywaliśmy masę pytań od absolwentów w ich
            samodzielnej drodze cyfrowej. Postanowiliśmy więc
            skonstruować projekt, który pozwoli się wymieniać doświadczeniem
            i poszerzać kompetencje kursanów nawet po kursie.`,
            `Stworzyliśmy więc facebookową grupę, gdzie może dołączyć
            każdy głodny wiedzy cyfrowej`,
            `Tam absolwenci zadają pytania i odpowiadają sobie nawzajem. W przypadku
            trudniejszych my odpowiadamy w formie obrazkowej, a w bardzo trudnych 
            przypadkach robimy video poradniki`,
            `Tworzymy również serię video utrwalającą i rozszerzającą 
            dotychczas pozyskaną wiedzę. Staramy się to robić w taki sposób, 
            aby nawet osoby biegle korzystające z urządzeń cyfrowych mogły 
            dowiedzieć się czegoś nowego.`,
            `Dodatkowo postawiliśmy stronę, na której publikujemy instrukcje 
            problematycznych kwestii. `,
          ],
        },
        en:{
          category: ["social","coding","teaching", "HTML", "CSS", "JavaScript", "JS"],
          desc: "Course of digital competences",
          content:[
            `After the courses conducted as part of the Silesian Senior @ Academy
            we often got a lot of questions from alumni in theirs
            independent digital path. So we decided
            construct a project that will allow for the exchange of experience
            and expand the competences of the course participants, even after the course.`,
            `So we created a Facebook group where he can join
            everyone hungry for digital knowledge`,
            `There, graduates ask questions and answer each other. In case of
            we answer more difficult ones in the form of pictures, and in very difficult ones
            we make video guides`,
            `We also create a video series that preserves and expands
            knowledge acquired so far. We try to do it in such a way
            so that even people who are fluent in using digital devices can
            learn something new.`,
            `Additionally, we have set up a page where we publish instructions
            problematic issues. `,
          ],    
        },
      },
    },
    { name: "YanoMebel",
      img: "yanomebel.webp",
      date: "2014-05-10",
      color: "#F1BF00",
      url: "yanomebel",
      media:[
        "yano_1.webp"
      ],
      lang:{
        pl:{
          category: ["webdevelopment","HTML", "CSS", "PHP", "WORDPRESS"],
          desc: "Edycja strony producenta meblowego",
          content : [
            `To było moje pierwsze komercyjne zlecenie. <br /> 
            Polegało na dodaniu opcji zmiany języków - na przygotowane już 
            tłumaczenie. Poprawiłem również nawigację strony.<br />`,
            `Całość oparta jest na systemie WordPress i strona z moimi modyfikacjami
            działa do dziś. <br />
            Można ją znaleźć tutaj:`,
            `<a href='http://yanomebel.com.pl' target='_blank'>yanomebel.com.pl</a>`,
          ],
        },
        en:{
          category: ["webdevelopment","HTML", "CSS", "PHP", "WORDPRESS"],
          desc: "Editing of the furniture manufacturer's website",
          content : [
            `It was my first commercial commission. <br />
            It consisted in adding the option to change languages - on the already prepared one
            translation. I also improved the site navigation. <br /> `,
            `Everything is based on WordPress and a page with my modifications
            works to this day. <br />
            You can find it here:`,
            `<a href='http://yanomebel.com.pl' target='_blank'>yanomebel.com.pl</a>`,
          ],
        },
      },    
    },
    { name: "LOB MasterKey",
      img: "masterkey.webp",
      date: "2016-02-15",
      color: "#F78F1D",
      url: "masterkey",
      media:[
        "masterkey_1.webp",
        "masterkey_2.webp",
      ],
      lang:{
        pl:{
          category: ["webdevelopment","HTML", "CSS", "JS", "jQuery", "PHP", "EXCEL", "CSV"],
          desc: "Konfigurator zamówień dla producenta kluczy MasterKey",
          content:[
            `Technologia masterkey pozwala na otwieranie wielu zamków jednym kluczem.
            Powoduje to jednak problem przy zamówieniu większej ilości tego typu kluczy, 
            gdzie poszczególne mają mieć dostęp do konkretnych drzwi. 
            Stworzyliśmy więc konfigurator z możliwością tworzenia zamków i kluczy
            a później określania zależności między nimi.`,
            `Następnie stworzyłem system który wprowadzone informacje zamienia
            na standartowy (dostarczony od producenta) formularz *.xml i automatycznie 
            wysyła zamówienie.`,

          ],
        },
        en:{
          category: ["webdevelopment","HTML", "CSS", "JS", "jQuery", "PHP", "EXCEL", "CSV"],
          desc: "Order configurator for the MasterKey key manufacturer",
          content:[
            `Masterkey technology allows you to open multiple locks with one key.
            However, this causes a problem when ordering a larger number of this type of keys,
            where the individual is to have access to specific doors.
            So we created a configurator with the possibility of creating locks and keys
            and then determining the dependencies between them.`,
            `Then I created a system that replaces the entered information
            on the standard (provided by the manufacturer) form * .xml and automatically
            sends the order.`
          ],
        }
      },
    },
    { name: "TOMIgra",
      img: "tomigra.webp",
      date: "2015-09-03",
      color: "#B2EF6B",
      url: "tomigra",
      media:[
        "tomigra1.webp",
        "tomigra2.webp",
        "tomigra3.webp",
      ],
      lang:{
        pl:{
          category: ["webdevelopment", "HTML", "CSS", "JS", "jQuery"],
          desc: "Edukacyjna gra dla dzieci szkół muzycznych i podstawowych",
          content:[
            `Projekt polegał na przechodzeniu przez użytkownika
            przez kolejne plansze, na której zaliczał zadania muzyczne.
            W zależności od wybranego modułu i stopnia zaawansowania użytkownika
            zadania były miały różną trudność. 
            W interaktywny sposób gra uczyła o instrumentach, nutkach itd.`,
            `Pisałem całą mechanikę gry - przesuwanie nutek na pięciolinię 
            z weryfikacją pola, wybór 'który to instrument zagrał' itd. 
            Całość była pisana w JS i jQuery, backend w Laravel'u. Grafiki przedstawione w PSD.`,
            `Niestety, na mocy umowy nie mogę pokazać screenów z tej gry,
            a finału projektu nie doczekałem. Nie jestem pewien czy gra 
            wyszła poza środowisko deweloperskie, ale ja na pewno sporo 
            się w tym projekcie nauczyłem i wyniosłem ogromne doświadczenie
            (zwłaszcza w JS / jQuery i PSD -> HTML).`,
          ],
        },
        en:{
          category: ["webdevelopment", "HTML", "CSS", "JS", "jQuery"],
          desc: "Educational game for children of music and elementary schools",
          content:[
            `The design was going through the user
            through successive boards, on which he completed musical tasks.
            Depending on the selected module and the user's level of advancement
            the tasks were of varying difficulty.
            In an interactive way, the game taught about instruments, notes, etc.`,
            `I was writing all the mechanics of the game - moving the notes onto the staff
            with field verification, selection of 'which instrument played' etc.
            Everything was written in JS and jQuery, backend in Laravel. Graphics presented in PSD.`,
            `Unfortunately, under the contract, I cannot show screenshots of this game,
            and I did not live to see the final of the project. I'm not sure if he is playing
            it has gone beyond the development community, but I am definitely a lot
            I learned and gained a lot of experience in this project
            (especially in JS / jQuery and PSD -> HTML) .`,
          ],
        },
      },
    },
    { name: "GoodLock",
      img: "goodlock.webp",
      date: "2016-05-01",
      color: "#bbbbbb",
      url: "goodlock",
      media: [
        "goodlock_1.webp",
        "goodlock_2.webp",
        "goodlock_ulotka.webp",
      ],
      lang:{
        pl:{
          category: ["webdevelopment","grafika", "HTML", "CSS", "JS", "PHP", "MySQL"],
          desc: "Strona WWW + system rezerwacji + panel administratora",
          content:[
            `Dla escape roomu stworzyłem stronę www - wizytówkę firmy
            z przedstawionymi usługami.`,
            `Oraz z prostym formularzem rezerwacji wizyt`,
            `Wszystko zapiąłem w prosty CMS, pozwalający na dodawanie 
            dni i godzin wolnych od pracy i weryfikację rezerwacji. 
            Stworzyłem też logo escaper-roomu
            i materiały reklamowe jak bannery, ulotki.`,
            `Administrowałem stronę przez 2 lata, aż do pożaru 
            klienta, kiedy to zawinął biznes.`,
          ],
        },
        en:{
          category: ["webdevelopment","graphic", "HTML", "CSS", "JS", "PHP", "MySQL"],
          desc: "Website + reservation system + admin panel",
          content:[
            `I created a website for the escape room - the company's showcase
            with the services presented.`,
            `And with a simple visit booking form`,
            `I have fastened everything into a simple CMS that allows you to add
            non-working days and hours and verification of the reservation.
            I also created the escaper-room logo
            and advertising materials such as banners, leaflets.`,
            `I was administering the website for 2 years until the fire
            customer when it was the business.`,
          ],
        },
      },
    },    
    { name: "EatAll",
      img: "eatall.webp",
      date: "2016-04-15",
      color: "#FF0000",
      url: "eatall",
      media:[
        "eatall_ulotka_black.webp",
        "eatall_ulotka_white.webp",
      ],
      lang:{
        pl:{
          category: ["grafika"],
          desc: "Oprawa graficzna dla lokalu gastronomicznego w Tarnowskich Górach",
          content:[
            `Dla EatAll przygotowałem graficznie logo, oraz menu 
            w dwóch wariantach kolorystycznych - czarna:`,
            `oraz biała:`,
            `Całość wykonana w kolorach CMYK do lepszego wydruku, oraz w wektorach, 
            aby zachować kształt przy każdym formacie.`,
          ]
        },
        en:{
          category: ["graphic"],
          desc: "Graphic design for a restaurant in Tarnowskie Góry",
          content:[
            `For EatAll, I have prepared a graphic logo and menu
            in two color variants - black: `,
            `and white:`,
            `Everything is made in CMYK colors for better printing, and in vectors,
            to keep the shape with each format.`,
          ]
        },
      },
    },
    { name: "Szalejemy Budujemy",
      img: "szalejemybudujemy.webp",
      date: "2020-04-04",
      color: "#93AAC9",
      url: "szalejemy-budujemy",
      media:[
        "https://www.youtube.com/embed/htItjXAqpDo",
      ],
      lang:{
        pl:{
          category: ["YouTube","film"],
          desc: "Kanał YouTube traktujący o budowlance",
          content:[
            `W tym projekcie odpowiadałem za wdrożenie. Przygotowałem intro 
            kanału, które jest używane do dziś, oraz zmontowałem pierwszy odcinek`,
            `Kanał cały czas się rozwija.`,
          ],
        },
        en:{
          category: ["YouTube","movie"],
          desc: "YouTube channel about construction",
          content:[
            `In this project, I was responsible for the implementation. I prepared the intro
            the channel, which is still used today, and I edited the first episode`,
            `The channel is constantly evolving .`,
          ],
        },
      },
    },
    { name: "Szymon Ymek Szewczyk",
      img: "ymekszewczyk.webp",
      date: "2020-06-19",
      color: "#395880",
      url: "szymon-ymek-szewczyk",
      media:[
        "https://www.youtube.com/embed/8Xbi-eyQpG0",
        {
          type: "fbvideo",
          href: "https://www.facebook.com/111588037252415/videos/2946573035471387",
        },
      ],
      lang:{
        pl:{
          category: ["YouTube","film","foto","grafika"],
          desc: "Kanał YouTube dobrze rokującego standupera",
          content : [
            `Ymek Szewczyk to koneser grubego humoru. Podbija kolejne sceny 
            swoimi materiałami. Ja odpowiadam za jego wizerunek na YouTubie. 
            Choć nie jestem autorem zdjęć pierwszych filmów, to odpowiadam za intro
            oraz szatę graficzną (również zdjęcia).`,
            `Tworzę również materiały promujące występy Ymka`,
            `Jeździmy w trasy i wyciągamy z nich co najlepsze - z wyżej zapowiadanej 
            przywiozłem żonę 😎.`,
          ]
        },
        en:{
          category: ["YouTube","movie","photo","graphic"],
          desc: "YouTube channel of a promising standuper",
          content : [
            `Ymek Szewczyk is a connoisseur of thick humor. He conquers the next scenes
            with your materials. I am responsible for his image on YouTube.
            Although I am not the cinematographer of the first films, I am responsible for the intro
            and graphic design (including photos).`,
            `I also create materials promoting his performances`,
            `We go on tours and we make the best of them - the announced one
            I brought my wife 😎.`,
          ]
        },
      },
    },
    { name: "Jerzy Malcher Film",
      img: "jmalcher.webp",
      date: "2017-10-11",
      color: "#464A35",
      url: "jerzy-malcher-film",
      media:[
        "jerzymalcher_foto1.webp",
        "https://www.youtube.com/embed/2FYxPa2Uv2Y",
        "https://www.youtube.com/embed/iqlRAYE5ys0"
      ],
      lang:{
        pl:{
          category: ["film","aktorstwo"],
          desc: "Film upamiętniający bohatera Jerzego Malchera",
          content:[
            `Tytułowy bohater pochodził z miejscowości w któej się urodziłem. 
            Lokalni aktywiści historyczni postanowili nakręcić o nim film. 
            Mój udział w filmie to głównie techniczne prace - ustawianie świateł, 
            robienie dymu, nagrywanie dźwięku. Poza tym odegrałem rolę sudenta UŚ
            oraz zajmowałem się animacjami starych zdjęć.`,
            `Tutaj można zerknąć na zwiastun filmu`,
            `Ale w wolnym czasie stanowczo polecam zobaczyć całość`,
          ],
        },
        en:{
          category: ["movie","acting"],
          desc: "A film commemorating the hero Jerzy Malcher",
          content:[
            `The title character came from the town where I was born.
            Local historical activists decided to make a film about him.
            My participation in the film is mainly technical work - setting the lights,
            making smoke, recording sound. Besides, I played the role of the University of Silesia's sudent
            and dealt with animations of old photos.`,
            `Here you can see the trailer of the movie`,
            `But in my spare time I strongly recommend to see the whole thing`,
          ],
        },
      },
    },
    { name: "Jo był ukradziony",
      img: "jbu.webp",
      date: "2017-01-22",
      color: "#193840",
      url: "jo-byl-ukradziony",
      media:[
        "https://www.youtube.com/embed/ZlfrefYtBI0",
        {
          type:"igpost",
          id:"B4FN5NHAfQB"

        },
      ],
      lang:{
        pl:{
          category: ["film","aktorstwo"],
          desc: "Film obrazujący losy ślązaków podczas i po wojnie",
          content:[
            `W trakcie realizacji filmu pełniłem role techniczne - światło, blendy, 
            dźwięk.`,
            `A tutaj zdjęcia z planu:`,
          ],
        },
        en:{
          category: ["movie","acting"],
          desc: "A film showing the fate of Silesians during and after the war",
          content:[
            `During the production of the film, I played technical roles - light, reflectors,
            sound.`,
            `And here are photos from the set:`,
          ],
        },
      },
    },
  ],
  404:{
    name: "404",
    href: "404",
    media: [],
    lang: {
      pl: {
        desc: /*html*/`
          <p>
            To nie jest strona o którą chodziło <br /> 
            Lepiej sprawdź 
            <a href='/projects'>projekty</a> 😎
          </p>`
      },
      en: {
        desc: /*html*/`
        <p>
          This is not the page you wanted <br /> 
          Better check
          <a href='/projects'>projects</a> 😎
        </p>`
      },
    }
  },
  contact:{
    name: "Contact",
    href: "contact",
    phone : "+48 732 012 715",
    fullName: "Antoni Pietryga",
    mail: "antek.pietryga@gmail.com",
    messenger: "https://www.messenger.com/t/antoni.pietryga",
    ig: "http://instagram.com/antek_pietryga",
    fb: "https://www.facebook.com/antoni.pietryga/",
    yt: "https://www.youtube.com/channel/UCB5bhBYgly7udyjyjj0K_UQ?view_as=subscriber",
    github: "https://github.com/apietryga",
    lang: {
      pl: {
        desc: `Dane kontaktowe`,
        content:[
          `Kliknij Aby przejść`
        ]
      },
      en: {
        desc: `Contact details`,
        content:[
          `Click to go`
        ]
      },
    }
  },
  index:{
    name: "apietryga",
    href: "index",
    img: "index.png",
    recomended:{
      code: ['Anadar', 'Webions', 'Pinky'],
      teaching: ['Śląska Akademia Senior@', 'Kurs Front-end Dev', 'Single Courses'],
      business: ['Wellton', 'Bombel Tyj', 'uFlash'],
    },
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
      'Java',
      'Spring',
      'MySQL',
      'iOT',
      'SEO',
      'ReactJS'
    ],
    lang: {
      pl: {
        desc: "Full stack developer portfolio",
        category: ['webdevelopment', 'fullstack', 'node developer'],
        content : [
            `Jestem`,
            `apietryga`,
            `Full-stack developer`,
            `tuż przed opus magnum`,
            `KOD`,
            `BYŁ MOJĄ PIERWSZĄ MIŁOŚCIĄ`,
            `Zacząłem kodować w 2010 roku. Szybko zrozumiałem, że web development jest tym co powinienem robić, więc zacząłem się uczyć`,
            `zobacz więcej projektów`,
            `NAUCZANIE`,
            `NAJLEPSZY SPOSÓB UCZENIA SIĘ`,
            `Przygodę ze szkoleniami zacząłem od kursu obsługi komputera dla seniorów.`,
            `zobacz więcej doświadczeń`,
            `BIZNES JEST BIZNES`,
            `W 2018 roku założyłem swoją pierwszą działalność gospodarczą, dzięki której powstało część projektów, i spora część doświadczenia przedstawionych na tej stronie.`,
            `zobacz więcej projektów biznesowych`,
            `biznes`,
          ]
      },
      en: {
        desc: "Full stack developer portfolio",
        category: ['webdevelopment', 'fullstack', 'node developer'],
        content : [
            `I'm`,
            `apietryga`,
            `Full-stack developer`,
            `just before opus magnum`,
            `CODE`,
            `WAS MY FIRST LOVE`,
            `I started coding in 2010. I quickly realized that web development is what I should do, so I started learning.`,
            `see more projects`,
            `TEACHING`,
            `BEST WAY OF LEARNING`,
            `I started my adventure with training with a computer skills course for seniors.`,
            `see more experience`,
            `BUSINESS IS BUSINESS`,
            `In 2018, I started my first business, which resulted in some of the projects and a lot of experience featured on this page.`,
            `see more business projects`,
            `business`,
          ]
      },
    }
  },
  pageBuild:{
    pl:{
      nav:{
        home: "Strona główna",
        projects: "Projekty",
        exps: "Doświadczenie",
        contact: "Kontakt",
      },
      readMore: 'Czytaj więcej',
    },
    en:{
      nav:{
        home: "Home",
        projects: "Projects",
        exps: "Experience",
        contact: "Contact",
      },
      readMore: 'Read more',
    },
  }
}
