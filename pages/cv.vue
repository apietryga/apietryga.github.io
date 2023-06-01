<template>
  <div class="overCV">
    <!-- <div class="download cta" @click="generatePDFx()"> DOWNLOAD CV </div> -->
    <div class="cv" ref="cv">
      <article>
        <picture>
          <img src="" alt="Antoni Pietryga profile photo">
        </picture>
        <h1>Antoni Pietryga</h1>
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="mailto:antek.pietryga@gmail.com">
              <iconCustom type="mail" />
              <span>antek.pietryga@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="tel:+48732012715">
              <iconCustom type="phone" />
              <span>+48 732 012 715</span>
            </a>
          </li>
          <li>
            <a href="https://apietryga.github.io" target="_blank">
              <iconCustom type="website" />
              <span>apietryga.github.io</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/apietryga" target="_blank">
              <iconCustom type="linkedin" />
              <span>apietryga</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/apietryga" target="_blank">
              <iconCustom type="github" />
              <span>apietryga</span>
            </a>
          </li>
        </ul>

        <h2>Main Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>PHP</li>
          <li></li>
        </ul>
        
        <h2>Languages</h2>
        <ul>
          <li>
            <p>English</p>
            <p>EFSET CEFR B1/B2</p>
          </li>
          <li>
            <p>Polish</p>
            <p>Native</p>
          </li>
        </ul>
        
      </article>
      <section>
        Antoni Pietryga
        Software Developer & Trainer
        Katowice, Woj. Śląskie, Polska
        Podsumowanie
        I am a self-taught programmer with a background in freelance
        full-stack programming from 2014 to 2018 and experience as a
        programming and digital competence trainer from 2018 to 2022.
        Since May 2022, I have been working as a dedicated software
        developer.
        Doświadczenie
        Linkhouse.co
        Software Engineer
        maja 2022 - Present (1 rok 1 miesiąc)
        Maintenance and development platform that simplifies link building - from
        finding offers to monitoring and managing orders. Access one of the largest
        databases of websites for free.
        Antoni Pietryga Freelancing
        2 lata 2 mies.
        Programming trainer
        lutego 2020 - lutego 2022 (2 lata 1 miesiąc)
        Katowice
        Conducting trainings in the field of Front-end development in technologies
        for Ernabo
        Programming trainer
        stycznia 2020 - grudnia 2021 (2 lata)
        Woj. Śląskie, Polska
        Training in SEO and programming in Python and Java
        for Everest Consulting & Training, Business Masters, RECON Consulting
        Kuźnia Ekspertów
        Digital competence trainer
        listopada 2018 - sierpnia 2021 (2 lata 10 mies.)
        Woj. Śląskie, Polska
        Conducting training in the field of digital competences
        Page 1 of 2
        Antoni Pietryga Freelancing
        1 rok 11 mies.
        Software Developer
        sierpnia 2016 - października 2016 (3 mies.)
        Creating a "Good Lock" escape room website with a booking system
        Full-stack Developer
        czerwca 2016 - lipca 2016 (2 mies.)
        Katowice
        Creation of a key configurator for LOB Master Key systems - Kluczdowszygo.pl
        Frontend Developer
        lutego 2015 - maja 2016 (1 rok 4 mies.)
        Warsaw, Mazowieckie, Poland
        Creating an educational game for children - TOMIGRA
        for clients Marketing Design, Gigant.pl
        Wordpress Developer
        grudnia 2014 - stycznia 2015 (2 mies.)
        Rybnik, Woj. Śląskie, Polska
        Modernization of the website of the furniture manufacturer Yano Mebel
        https://yanomebel.com.pl
        Wykształcenie
        Uniwersytet Ekonomiczny w Katowicach
        Licencjat (Lic.), Zarządzanie przedsiębiorstwem · (2015 - 2018)
        Uniwersytet Śląski w Katowicach
        Magister prawa (Mgr prawa), Prawo · (2016 - 2021)
      </section>
    </div>

  </div>
</template>

<style lang="scss">
.overCV{
  display:flex;
  // justify-content: center;
  flex-direction: column;
  align-items: center;
}

@media only print {
  .navHeader,
  .overWrapper > footer {
    display:none;
  }
}


  .cv{
    margin:2rem;
    background: #fff;
    display:flex;
    width:  210mm;
    height: 297mm;
    border:1px solid #fff;
    article{
      flex:1;
      color:#fff;
      background: #000;
      > ul{
        border:2px dashed red;
        // padding:0 1rem;
        padding:0;
        list-style: none;
        li {
          // border:2px dashed blue;
          margin:.75rem;
          > a{
            display:flex;
            align-items: center;
            // border:2mm dashed blue;
            a{
              width:1.5rem;
              height:1.5rem;
              margin-right:.5rem;
              border-radius: 7px;
            }
            span{
              // border:2px dashed green;
              font-size: .8rem;
            }
  
          }
        }
      }
    }
    section{
      color:#000;
      flex:2;
    }
    // 	210 x 297 mm

  }


</style>


<script >
export default {
  head() {
    return {
      script: [
        // {
        //   src: "https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js"
        // }
      ],
    }
  },
  mounted() {
    // const script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "hhttps://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js";
    // document.body.appendChild(script);
  },
  // data
  methods:{
    // generatePDFx(){
    //   // var element = document.getElementById('element-to-print');
    //   // html2pdf(element);
    //   // html2pdf(this.$refs.cv);
    // }
  }
}

</script>
