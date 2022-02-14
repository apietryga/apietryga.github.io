class Data {
  constructor(){
    this.template = this.getData();
    this.data = this.getData(); 
  }
  getData(){
    return  {
      projects:[
        // buble tea
        // pinky
        // sanctuarium
        { "name": "Anadar",
          "category": "biznes,nauka,film,programy",
          "s_desc": "Platforma dla przedsiębiorców, do kontrolowania i rozwijania swojego biznesu",
          "l_desc": /*html*/`
    
            Anadar jest cyfrową syntezą teorii nauki zarządzania. 
            Jego elastyczny interface pozwala korzystać z niego 
            prezesom wielkich firm, ale i osobom prowadzącym małe biznesy. 
            W obydwu przypadkach program pomoże przedsiębiorcy ograniczyć wydatki 
            i zwiększyć zyski.
          
            <iframe src="https://www.youtube.com/embed/X7MoF4tvf2Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
            W Październiku 2018 roku program został rozbudowany o wtyczkę dla restauracji, która 
            integruje kuchnię z ladą oraz automatycznie dokonuje analizy sytuacji firmy. 
    
            <img src="||needURL||/img/projects/anadar_restauracje.jpg" alt="Anadar skanery rabatowe">
    
            W grudnio 2018 roku powstał koncept kart rabatowych, wspomagających 
            kooperacje lokalnych przedsiębiorstw.
    
            <img src="||needURL||/img/projects/anadar_skanery.jpg" alt="Anadar skanery rabatowe">
    
            Produkt aktualnie testowany w wersji beta.
          `,
          "img": "anadar.png",
          "date": "2018-09-01",
          "color": "white"
        },
        { "name": "Webions",
          "category": "game, fun, code",
          "s_desc": "Webions is a MMORPG game, avalible on browsers.",
          "l_desc": /*html*/`
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed voluptas vitae, pariatur optio, excepturi assumenda neque illum animi ipsum id molestias consectetur necessitatibus fugit officiis blanditiis numquam repellat magnam? Assumenda.
            Aspernatur odit eum dignissimos molestiae eveniet autem, dolore, voluptas nemo mollitia beatae ullam ratione hic consectetur, impedit magnam optio voluptatem facere quos dolorum libero maiores assumenda labore iusto. Nulla, fugit.
            Delectus commodi porro odit velit doloribus possimus dolorem id, necessitatibus sit. Quas totam aut, laboriosam, ab neque quisquam quod possimus ea error voluptate dolorem. Totam obcaecati quam exercitationem fugit. Maiores?
            Praesentium consectetur vero quos alias harum eaque ullam quam maxime. Placeat laboriosam maiores laudantium amet enim eligendi, voluptatibus, ratione libero asperiores ex dignissimos velit fugit! Officia voluptatum ratione illo mollitia.
            Officia numquam culpa accusantium quis labore provident omnis ut impedit natus fuga a reprehenderit nobis cupiditate enim, inventore architecto earum libero nisi commodi. Molestias veritatis nam, mollitia facilis labore incidunt.
          `,
          "img": "webions.webp",
          "date": "2018-09-01",
          "color": "#222"
        },
        { "name": "uFlash",
          "category": "biznes,IoT,film,programy",
          "s_desc": "Interaktywne fotolustro przeznaczone na imprezy okolicznościowe lub do miejsc kultury",
          "l_desc": /*html*/`
            <img src="||needURL||/img/projects/uflash_praca.jpg" alt="uFlash podczas pracy">
            Lustro o wymiarach 160 x 80cm sprawia, że produkt 
            jest jednym z największych tego typu dostępnych na rynku.
            
            [SOCIALHACK]insta|uflashon|||needURL||/img/projects/uflash2.png|||needURL||/img/projects/uflash_insta.jpg|https://www.instagram.com/p/CHLXtKEh1l4/[/SOCIALHACK]
    
            Dzięki prostemu WEB interface lustro potrafi w prosty sposób
            komunikować się z urządzeniami obsługującymi przeglądarki (komputery, tablety, telefony)
    
            [SOCIALHACK]fbVideo|https://web.facebook.com/uflashon/videos/562031354613430[/SOCIALHACK]
    
    
            Więcej informacji znajdziesz na stronie
            <a href="http://apietryga.web.app/uflash.pl/" target="_blank">uFlash.pl</a>
    
            `,
          color: "#fff",
          "img": "uflash.webp",
          "date": "2020-03-23"
        },
        { "name": "Bombel Tyj",
          "category": "biznes",
          "s_desc": "Restauracja serwująca bubble-tea",
          "l_desc": /*html*/`


            `,
          "color":"#DC468E",
          "img": "bombeltyj.webp",
          "date": "2021-03-23"
        },
        { "name": "Wellton",
          "category": "biznes,IoT,programy",
          "s_desc": "Projekt interaktywnych stołów przeznaczonych do restauracji.",
          "l_desc": /*html*/`
            Oprogramowanie stołów jest skierowane do restauracji.
            Dzięki wtyczce projektu Anadar pozwala na natychmiastową analizę zamówień
            pod kątem strategii produktowej. 
            
            <img src="||needURL||/img/projects/wellton_visualisation.jpg" alt="WELLTON Wizualizacja">
            
            Powstały dwa prototypy tego produktu. Pierwszy z klasycznym wyglądem stołu
            na drewnianych nogach i matrycą o przekątnej 32'
    
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lNKEEGrVEEw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
            Oraz wyższy stół oparty na projektorze, dzięki czemu grubość
            blatu wyniosła 8mm, co stanowiły dwie szyby hartowane P4 odprone na uszkodzenia
            mechaniczne
    
            <iframe width="560" height="315" src="https://www.youtube.com/embed/x2LeWqEt27g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
            Projekt obecnie znajduje się w fazie prototypowej.
    
            <img src="||needURL||/img/projects/wellton_visualisation2.jpg" alt="WELLTON Wizualizacja">
            `,
          "img": "wellton.png",
          "date": "2017-12-12",
          "color": "#729AAA"
        },
        { "name": "Tanker",
          "category": "motoryzacja",
          "s_desc": "Custom Chopper stworzony na bazie Rometa Kadetta",
          "l_desc": /*html*/`
            Projekt rozpocząłem w mając 16 lat od zmiany konstrukcji  ramy
    
            <img src="||needURL||/img/projects/tanker_1.jpg" alt="Tanker photo 1" />
    
            Po kosmetycznej poprawie zrobiłem również koncept baku
    
            <img src="||needURL||/img/projects/tanker_2.jpg" alt="Tanker photo 2" />
    
            Po malowaniu, modelowaniu i przerobieniu paru części
            motor zaczynał nabierać kształtów
    
            <img src="||needURL||/img/projects/tanker_3.jpg" alt="Tanker photo 3" />
    
            Na tym etapie zakończyłem prace nad projektem
    
            <img src="||needURL||/img/projects/tanker_4.jpg" alt="Tanker photo 4" />
    
            Projekt został sprzedany.
            `,
          "color":"#D9BD90",
          "img": "tanker.png",
          "date": "2012-05-15"
        },
        { "name": "Cyfrowa Majówka",
          "category": "społeczne,film",
          "s_desc": "Wycieczka z seniorami w ramach projektu Ministerstwa Cyfryzacji",
          "l_desc": /*html*/`
            W sprawozdaniu z inicjatywy pisałem:
              <br />
              <br />
            <i>
            Udało mi się zorganizować wycieczkę 10 seniorów o dystansie 700m, a także
            zaciekawić ich takimi aplikacjami jak Aparat, Mapy Google, Kalendarz
            Google oraz Hangouts.</i>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/SgVNov7eCq0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <i>
            Wszyscy, którzy wzięli udział w „Cyfrowej Majówce” są dla nas liderami cyfryzacji. Doceniam zapał, chęci, a przede wszystkim pomysłowość – mówi minister cyfryzacji
            <br />
            <br />
            Marek Zagórski - Minister Cyfryzacji
            </i>
            <br />
            <br />
            Projekt został zrealizowany w czasie, gdy 
            prowadziłem zajęcia w Śląskiej Akademii Senior@
            [SOCIALHACK]exp|Śląska Akademia Senior@[/SOCIALHACK]
          `,
          "img": "cm.png",
          "date": "2019-05-20",
          "color": "rgb(69, 99, 45)"
        },
        { "name": "Polish Makers",
          "category": "film",
          "s_desc": "Team startujący w ''RedBull Can You Make It''",
          "l_desc": /*html*/`
            ''We Can Make It'' - to hasło które przyświecało nam podczas
            tworzenia filmu, ale i także w trakcie kampanii promocyjnej
    
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fDDymBgEMLk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
            Film wzbudził spore zainteresowanie wśród społeczności 
            studenckiej, a my zdobywaliśmy doświadczenie w 
            marketingu. W trakcie kampanii promocyjnej stworzyliśmy
            film walentynkowy w kooperacji z wtedy jeszcze raczkującym
            start-upem AbyssGlass.
    
            [SOCIALHACK]fbVideo|https://www.facebook.com/watch/?v=586424458190096[/SOCIALHACK]
    
            Finalnie nie udało nam się pojechać na trip, ale nabyliśmy
            sporo doświadczenia.
          
    
            `,
          "img": "polishmakers.png",
          "date": "2016-02-15",
          "color": "red"
        },
        { "name": "LiveShare",
          "category": "IoT,programy",
          "s_desc": "Program do przesyłania elementów pomiędzy ekranami",
          "l_desc": /*html*/`
          Pozwala przesłać tekst, film z yt / cda, zdjęcie lub stronę internetową
          pomiędzy ekranem telefonu / komputera / telewizora. 
    
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-ziFSL_WbiY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
          Nie ma limitu ekranów i łatwo go dostosować co do przesyłanych treści
          
          [SOCIALHACK]insta|antek_pietryga|||needURL||/img/projects/antek_insta.jpg|||needURL||/img/projects/liveshareinsta.gif|https://www.instagram.com/p/-ufmdAIfqq/[/SOCIALHACK]
    
          Projekt leży w ''szufladzie'', ale będzie użyty w projekcie ''Sanctuarium''
          
    
            `,
          "img": "liveshare.png",
          "date": "2015-12-05",
          "color": "#B05111"
        },
      ],
      exps:[
        {"name": "Kurs Front-end Dev",
            "category": "szkolenia,webdevelopment",
            "s_desc": "Szkolenie podstaw programowania aplikacji WEB",
            "l_desc": /*html*/` 
                  Przeprowadziłem ponad 500 godzin szkoleń z programowania
                  front-end developer. Szkolenia są skierowane dla
                  osób poszukujących swojej ścieżki zawowdowej. Na kursie 
                  uczą się podstaw wymaganych do pracy w zawodzie.<br />
                  <br />
                  Szkolenie front-end dev obejmuje: <br />
                  - HTML5<br />
                  - CSS3 wraz z preprocesorami SASS, LESS, SCSS <br />
                  - Bootstrap 4 <br />
                  - JS6 + jQuery, AngularJS / React<br />
                  - SEO<br />
                  - PHP (na potrzeby WP)<br />
                  - CMS WordPress<br />
                  - GIT<br />
                  - NPM<br />
                  <br />
                  Kurs jest elastyczny i wrzechstronny. <br />
                  Zbieram bardzo pozytywne referencje.

                  [SOCIALHACK]reference|1.jpg[/SOCIALHACK]
            `,
            "img": "sfedev.png",
            "date": "2020-01-22",
            "color": "#4F9690"
        },
        {"name": "Śląska Akademia Senior@",
          "category": "szkolenia",
          "s_desc": "Szkolenia kompetencji cyfrowych",
          "l_desc": /*html*/` 
    
          W tym projekcie rozpocząłem karierę Trenera. 
    
          [SOCIALHACK]fbPost|||needURL||/img/exp/sas_fb_avatar.jpg|
          Śląska Akademia Senior@ - szkolenia komputerowe dla Seniorów 65+
          |||needURL||/img/exp/fb_post_photo.jpg|
          Rozpoczynamy dziś cykl "Poznaj Trenera" 😎 Jako pierwszy zaprezentuje się Państwu Pan Trener Antoni Pietryga:
          "Antoni Pietryga, 23 lata
          - student Zarządzania Przedsiębiorstwem,
          - programista aplikacji web, ...
          |https://www.facebook.com/cyfrowy.slask/photos/a.481559862658219/481557912658414
          [/SOCIALHACK]
          
          Prowadziłem szkolenia z zakresu <br />
          - Obsługa podstawowych programów Windows (Paint, Rejestrator głosu, aparat, Edytor Video) <br />
          - Obsługa pakietu MS OFFICE, a także Google Docs (Word, Excel, PowerPoint - a także odpowiedniki Docs, Sheets)<br />
          - Obsługa przeglądarki, aplikacji Google (gmail, mapy, zdjęcia, dysk, youtube, kalendarz, keep, tłumacz, blogger, hangouts)<br />
          - Obsługa allegro, OLX, Ceneo <br />
          - Obsługa kont bankowych na przykładach IPKO i MBANK<br />
          - Obsługa stron rządowych, podpisów elektronicznych oraz e-recept <br />
          - Planowanie wakacji za pomocą esky.pl, AirBnb, booking.com<br /> 
          <br />
          A wszystko odbywało się w pierwszej fazie na komputerze (kurs A1), a później na tablecie (B2).
          
          [SOCIALHACK]fbPost|||needURL||/img/exp/sas_fb_avatar.jpg|
          Śląska Akademia Senior@ - szkolenia komputerowe dla Seniorów 65+
          |||needURL||/img/exp/fb_post_photo2.gif|
          Grupa 300. z Siemianowic Śląskich w świątecznej wersji wraz z Panem Trenerem Antonim Pietrygą 🎅 życzy Wam Wesołych Świąt! 🎄👋👋♥️
          |https://www.facebook.com/cyfrowy.slask/posts/583869765760561
          [/SOCIALHACK]
          
          Przeprowadziłem ponad 1000 godzin szkoleniowych w rejonie całego Śląska
          - od Krzyżanowic przez Rybnik po Chorzów i Siemianowice Śląskie, poznając 
          mnóstwo wspaniałych seniorów i zbierając pozytywne referencje.
          
          <br />
          <br />
    
          To za sprawą tych szkoleń powstały projekty kurscyfrowy.pl oraz Cyfrowa Majówka
          [SOCIALHACK]projects|Kurs Cyfrowy.pl[/SOCIALHACK]
          [SOCIALHACK]projects|Cyfrowa Majówka[/SOCIALHACK]
          <br />
          <br />
          <h3>Referencje:</h3>
          [SOCIALHACK]reference|2.jpg|3.jpg|4.jpg|5.jpg|6.jpg[/SOCIALHACK]
          `,
          "img": "slaskaakademiaseniora.png",
          "date": "2018-11-01",
          "color": "#FF6BF2"
        },
        { "name": "Kurs Cyfrowy.pl",
          "category": "społeczne,programy,nauka",
          "s_desc": "Projekt nauki kompetencji cyfrowych",
          "l_desc": /*html*/`
            Po kursach prowadzonych w ramach Śląskiej Akademii Senior@
            często otrzymywaliśmy masę pytań od absolwentów w ich
            samodzielnej drodze cyfrowej. Postanowiliśmy więc
            skonstruować projekt, który pozwoli się wymieniać doświadczeniem
            i poszerzać kompetencje kursanów nawet po kursie.
            
            Stworzyliśmy więc facebookową grupę, gdzie może dołączyć
            każdy głodny wiedzy cyfrowej: 
    
            [SOCIALHACK]fbGroup|tabletowykurscover.jpg|Tabletowykurs|https://www.facebook.com/groups/kurscyfrowy|Grupa publiczna[/SOCIALHACK]
    
            Tam absolwenci zadają pytania i odpowiadają sobie nawzajem. W przypadku
            trudniejszych my odpowiadamy w formie obrazkowej, a w bardzo trudnych 
            przypadkach robimy video poradniki
    
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fYKp4NstrBQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          
            Tworzymy również serię video utrwalającą i rozszerzającą 
            dotychczas pozyskaną wiedzę. Staramy się to robić w taki sposób, 
            aby nawet osoby biegle korzystające z urządzeń cyfrowych mogły 
            dowiedzieć się czegoś nowego.
    
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6liLfVHJCFY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
            Dodatkowo postawiliśmy stronę, na której publikujemy instrukcje 
            problematycznych kwestii. 
    
            <br />
            <br />
    
            Jeśli masz pytania - dołącz do grupy i je zadaj!
            `,
          "img": "kurscyfrowy.png",
          "date": "2020-04-10",
          "color": "#ADFFAD"
        },
        {"name": "YanoMebel",
          "category": "webdevelopment",
          "s_desc": "Edycja strony producenta meblowego",
          "stack": "HTML, CSS, PHP, WORDPRESS",
          "l_desc": /*html*/`      
            To było moje pierwsze komercyjne zlecenie. <br /> 
            Polegało na dodaniu opcji zmiany języków - na przygotowane już 
            tłumaczenie. Poprawiłem również nawigację strony.<br /> 
            
            <img src="||needURL||/img/exp/yano_1.jpg" alt="Strona YanoMebel" />
            
            Całość oparta jest na systemie WordPress i strona z moimi modyfikacjami
            działa do dziś. <br />
            Można ją znaleźć tutaj: 
            <br />
            <br />
            <a href="http://yanomebel.com.pl" target="_blank">yanomebel.com.pl</a>     
            `,
          "img": "yanomebel.png",
          "date": "2014-05-10",
          "color": "#F1BF00"
    
        },
        {"name": "MasterKey",
          "category": "webdevelopment",
          "s_desc": "Konfigurator zamówień dla producenta kluczy MasterKey",
          "stack" : "HTML, CSS, JS, jQuery, PHP, EXCEL",
          "l_desc": /*html*/` 
            Technologia masterkey pozwala na otwieranie wielu zamków jednym kluczem.
            Powoduje to jednak problem przy zamówieniu większej ilości tego typu kluczy, 
            gdzie poszczególne mają mieć dostęp do konkretnych drzwi. 
            Stworzyliśmy więc konfigurator z możliwością tworzenia zamków i kluczy
            a później określania zależności między nimi. 
            
            <img src="||needURL||/img/exp/masterkey_1.jpg" alt="Strona konfiguratora MasterKey 1">
    
            Następnie stworzyłem system który wprowadzone informacje zamienia
            na standartowy (dostarczony od producenta) formularz *.xml i automatycznie 
            wysyła zamówienie. 
            
            <img src="||needURL||/img/exp/masterkey_2.jpg" alt="Strona konfiguratora MasterKey 2">
    
            Konfigurator już nie znajduje się pod pierwotną domeną. 
          `,
          "img": "masterkey.png",
          "date": "2016-02-15",
          "color": "#F78F1D"
        },
        {"name": "TOMIgra",
          "category": "webdevelopment",
          "s_desc": "Edukacyjna gra dla dzieci szkół muzycznych i podstawowych",
          "stack": "HTML, CSS, JS, jQuery",
          "l_desc": /*html*/` 
            Projekt polegał na przechodzeniu przez użytkownika
            przez kolejne plansze, na której zaliczał zadania muzyczne.
            W zależności od wybranego modułu i stopnia zaawansowania użytkownika
            zadania były miały różną trudność. 
            W interaktywny sposób gra uczyła o instrumentach, nutkach itd. 
            <br />
            <br />
            Pisałem całą mechanikę gry - przesuwanie nutek na pięciolinię 
            z weryfikacją pola, wybór "który to instrument zagrał" itd. 
            Całość była pisana w JS i jQuery, backend w Laravel'u. Grafiki przedstawione w PSD. 
            <br />
            <br />
            Niestety, na mocy umowy nie mogę pokazać screenów z tej gry,
            a finału projektu nie doczekałem. Nie jestem pewien czy gra 
            wyszła poza środowisko deweloperskie, ale ja na pewno sporo 
            się w tym projekcie nauczyłem i wyniosłem ogromne doświadczenie
            (zwłaszcza w JS / jQuery i PSD -> HTML).
            <br />
            <br />
            Zdjęcie pochodzi z facebookowego fanpage projektu.
          `,
          "img": "tomigra.png",
          "date": "2015-09-03",
          "color": "#B2EF6B"
        },
        {"name": "GoodLock",
          "category": "webdevelopment,grafika",
          "s_desc": "Strona WWW + system rezerwacji + panel administratora",
          "stack" : "HTML, CSS, JS, PHP",
          "l_desc": /*html*/` 
            Dla escape roomu stworzyłem stronę www - wizytówkę firmy
            z przedstawionymi usługami. 
    
            <img src="||needURL||/img/exp/goodlock_1.jpg" alt="GoodLock Strona WWW">
    
            Oraz z prostym formularzem rezerwacji wizyt
    
            <img src="||needURL||/img/exp/goodlock_2.jpg" alt="GoodLock Rezerwacja">
    
            Wszystko zapiąłem w prosty CMS, pozwalający na dodawanie 
            dni i godzin wolnych od pracy i weryfikację rezerwacji. 
            Stworzyłem też logo escaper-roomu
            i materiały reklamowe jak bannery, ulotki. 
    
            <img src="||needURL||/img/exp/goodlock_ulotka.jpg" alt="GoodLock Ulotka">
    
            Administrowałem stronę przez 2 lata, aż do pożaru 
            klienta, kiedy to zawinął biznes. 
          `,
          "img": "goodlock.png",
          "date": "2016-05-01",
          "color": "#bbb"
        },    
        {"name": "EatAll",
          "category": "grafika",
          "s_desc": "Oprawa graficzna dla lokalu gastronomicznego w Tarnowskich Górach",
          "stack" : "grafika",
          "l_desc": /*html*/` 
            Dla EatAll przygotowałem graficznie logo, oraz menu 
            w dwóch wariantach kolorystycznych:
            <br />
            <br />
            czarna: 
            <img src="||needURL||/img/exp/eatall_ulotka_black.jpg" alt="EatAll ulotka czarna">
    
            oraz biała: 
    
            <img src="||needURL||/img/exp/eatall_ulotka_white.jpg" alt="EatAll ulotka biała">
    
            Całość wykonana w kolorach CMYK do lepszego wydruku, oraz w wektorach, 
            aby zachować kształt przy każdym formacie.
          
          `,
          "img": "eatall.png",
          "date": "2016-04-15",
          "color": "#FF0000"
        },
        {"name": "Szalejemy Budujemy",
          "category": "YouTube,film",
          "s_desc": "Kanał YouTube traktujący o budowlance",
          "l_desc": /*html*/` 
          W tym projekcie odpowiadałem za wdrożenie. Przygotowałem intro 
          kanału, które jest używane do dziś, oraz zmontowałem pierwszy odcinek
    
          <iframe width="560" height="315" src="https://www.youtube.com/embed/htItjXAqpDo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
          Kanał cały czas się rozwija.
    
          `,
          "img": "szalejemybudujemy.png",
          "date": "2020-04-04",
          "color": "#93AAC9"
        },
        {"name": "Szymon Ymek Szewczyk",
          "category": "YouTube,film,foto",
          "s_desc": "Kanał YouTube dobrze rokującego standupera",
          "l_desc": /*html*/` 
          Ymek Szewczyk to koneser grubego humoru. Podbija kolejne sceny 
          swoimi materiałami. Ja odpowiadam za jego wizerunek na YouTubie. 
          Choć nie jestem autorem zdjęć pierwszych filmów, to odpowiadam za intro
          oraz szatę graficzną (również zdjęcia).
    
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8Xbi-eyQpG0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
          Tworzę również materiały promujące występy Ymka:
    
          [SOCIALHACK]fbVideo|https://www.facebook.com/111588037252415/videos/2946573035471387[/SOCIALHACK]
    
          Jeździmy w trasy i wyciągamy z nich co najlepsze - z wyżej zapowiadanej 
          przywiozłem narzeczoną 😎.
          
          `,
          "img": "ymekszewczyk.png",
          "date": "2020-06-19",
          "color": "#395880"
        },
        {"name": "Jerzy Malcher Film",
          "category": "film,aktorstwo",
          "s_desc": "Film upamiętniający bohatera Jerzego Malchera",
          "l_desc": /*html*/` 
          Tytułowy bohater pochodził z miejscowości w któej się urodziłem. 
          Lokalni aktywiści historyczni postanowili nakręcić o nim film. 
          Mój udział w filmie to głównie techniczne prace - ustawianie świateł, 
          robienie dymu, nagrywanie dźwięku. Poza tym odegrałem rolę sudenta UŚ
          oraz zajmowałem się animacjami starych zdjęć.
    
          <img src="||needURL||/img/exp/jerzymalcher_foto1.jpg" alt="Jerzy Malcher - zdjęcie z planu">
    
          Tutaj można zerknąć na zwiastun filmu:
          <iframe width="560" height="315" src="https://www.youtube.com/embed/2FYxPa2Uv2Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
          Ale w wolnym czasie stanowczo polecam zobaczyć całość:
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iqlRAYE5ys0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          `,
          "img": "jmalcher.png",
          "date": "2017-10-11",
          "color": "#464A35"
        },
        {"name": "Jo był ukradziony",
          "category": "film,aktorstwo",
          "s_desc": "Film obrazujący losy ślązaków podczas i po wojnie",
          "l_desc": /*html*/` 
          W trakcie realizacji filmu pełniłem role techniczne - światło, blendy, 
          dźwięk. 
          <br />
          <br />
          Zwiastun:
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZlfrefYtBI0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
          A tutaj zdjęcia z planu:
          [SOCIALHACK]insta|antek_pietryga|||needURL||/img/exp/ap_insta.jpg|||needURL||/img/exp/jbu_pht1.jpg|https://www.instagram.com/p/B4FN5NHAfQB/[/SOCIALHACK]
          `,
          "img": "jbu.png",
          "date": "2017-01-22",
          "color": "#193840"
        },
      ],
      contact:/*html*/`
        <div class="frame_cell">
          <div class="contactField">
            <h2>Dane kontaktowe</h2>
            <br />
            Antoni Pietryga <br />
            tel. +48 732 012 715<br />
            mail: antek.pietryga@gmail.com
            <br />
            <br />
          <h2>Kliknij, aby przejść:</h2>
          </div>
          <div class="socials">
            <a class="single phone" href="tel:+48732012715"></a>
            <a class="single mail" href="mailto:antek.pietryga@gmail.com"></a>
            <a class="single messenger" href="https://www.messenger.com/t/antoni.pietryga" target="_blank"></a>
            <a class="single insta" href="http://instagram.com/antek_pietryga" target="_blank"></a>
            <a class="single fb" href="https://fb.com/profile/antoni.pietryga" target="_blank"></a>
            <a class="single yt" href="https://www.youtube.com/channel/UCB5bhBYgly7udyjyjj0K_UQ?view_as=subscriber" target="_blank"></a>
          </div>
    
        </div>
        `,
      404:/*html*/`
        <main class='div404'>
          <h2>404</h2>
          <p>To nie jest strona o którą chodziło</p>
          <p>Lepiej sprawdź</p>
          <a href="/projects">projekty 😎</a>
        </main>
        `,
      index: /*html*/`
        <header class="topHeader">
          <div class="title">
            <h1>I'm <b>apietryga</b></h1>
            <h2>Freelance full-stack web developer</h2>
            <p>just before opus magnum</p>
          </div>
          <div class="photo background"></div>
          <div class="photo sea"></div>
          <div class="photo sunset"></div>
          <div class="photo clouds"></div>
          <div class="mask photo"></div>
          <div class="next">
            <a href="#code">
              <img src="/img/page/nav_backer.svg" alt="CODE">
            </a>  
          </div>
        </header>
        <main id="code">
          <div class="codeprojects">
            <header>
              <h1>CODE</h1>
              <h2>WAS MY FIRST LOVE</h2>
              <p>
                I started coding when I was 14.
                I quickly realized that web development is what I should do, 
                so I started learning.
              </p>  
            </header>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>PHP</li>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>jQuery</li>
              <li>C++</li>
              <li>Arduino</li>
              <li>Python</li>
              <li>django</li>
              <li>Java</li>
              <li>Spring</li>
            </ul>
            <section>
              ${this.getThreeBest('projects')}
              <div></div>
              <footer>
                <a href="/projects">more projects</a>
              </footer>
            </section>
            <div class="mask"></div>
          </div>
        </main>
        <article id="teaching">
          <div class="stopper"></div>
          <header>
            <h1>TEACHING</h1>
            <h2>BEST WAY OF LEARNING</h2>  
          </header>
          <div class="content">
            <p>Przygodę ze szkoleniami zacząłem od kursu obsługi komputera dla seniorów.</p>
            <section>
              ${this.getThreeBest('exps')}
              <div></div>
              <footer>
                <a href="/exps">more experience</a>
              </footer>  
            </section>
          
          </div>
          <div class="mask light"></div>
          
        </article>
        <article id="buisness">
          <div class="photo me"></div>
          <h1>BUISNESS IS BUISSNES</h1>
          <p>
            W 2018 roku założyłem swoją pierwszą działalność gospodarczą, 
            dzięki której powstało część projektów, i spora część doświadczenia 
            przedstawionych na tej stronie.
          </p>
          <section>
            ${this.getThreeBest('buisness')}
            <div></div>
            <footer>
              <a href="/projects">more projects</a>
            </footer>  
          </section>
    
        </article>
      `,
    }
  }
  getThreeBest(type){
    // GET THREE BEST OF type
    const threeBest = [];
    for(const elementGroup in this.template){
      if([type].includes(elementGroup)){
        for(const element of this.template[elementGroup]){
          if(threeBest.length < 3){
            threeBest.push(element)
          }
        }
      }else{
        let elements =  ['EatAll', 'GoodLock', 'Bombel Tyj'];
        if(['buisness'].includes(type)){
          // elements = ['EatAll', 'GoodLock', 'uFlash'];
          for(const element of this.template['projects'].concat(this.template['exps'])){
            if(threeBest.length < 3 && elements.includes(element.name)){ threeBest.push(element)}
          }
        }
      }
    }
    // RENDER IT
    let result = "";
    for(const element of threeBest){
      element.href = ['projects','exps'].includes(type) ? `/${type}/${element.name}`: '/404';
      console.log(element)
      result += /*html*/`
      <a href="${element.href}">
        <article>
          <header>
            <h2>${element.name}</h2>
            <p>${element.s_desc}</p>
          </header>
          <img src="/img/contents/${element.img}" alt="${element.name}">
        </article>
      </a>`
    }
    return result;
  }
}

module.exports = Data;


