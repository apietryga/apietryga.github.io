<template>
  <div class="overCV">
    <!-- <div class="download cta" @click="generatePDFx()"> DOWNLOAD CV </div> -->
    <div class="cv" ref="cv">
      <article>

        <picture>
          <img src="" alt="Antoni Pietryga profile photo">
        </picture>

        <h1>Antoni Pietryga</h1>
        <!-- <h2>Contact</h2> -->
        <ul>
          <li>
            <a class="link" href="mailto:antek.pietryga@gmail.com">
              <iconCustom type="mail" />
              <span>antek.pietryga@gmail.com</span>
            </a>
          </li>
          <li>
            <a class="link" href="tel:+48732012715">
              <iconCustom type="phone" />
              <span>+48 732 012 715</span>
            </a>
          </li>
          <li>
            <a class="link" href="https://apietryga.github.io" target="_blank">
              <iconCustom type="web" />
              <span>apietryga.github.io</span>
            </a>
          </li>
          <li>
            <a class="link" href="https://www.linkedin.com/in/apietryga" target="_blank">
              <iconCustom type="linkedin" />
              <span>apietryga</span>
            </a>
          </li>
          <li>
            <a class="link" href="https://github.com/apietryga" target="_blank">
              <iconCustom type="github" />
              <span>apietryga</span>
            </a>
          </li>
        </ul>

        <h2>Main Skills</h2>
        <ul>
          <li>
            <div class="link">
              <iconCustom type="js" />
              <span>JavaScript</span>
            </div>
            <div class="link">
              <iconCustom type="nodejs" />
              <span>Node.js</span>
            </div>
            <div class="link">
              <iconCustom type="nuxt" />
              <span>Nuxt</span>
            </div>
            <div class="link">
              <iconCustom type="python" />
              <span>Python</span>
            </div>
            <div class="link">
              <iconCustom type="php" />
              <span>PHP</span>
            </div>
          </li>
        </ul>
        
        <h2>Languages</h2>
        <ul>
          <li>
            <div class="link">
              <iconCustom type="us" />
              <span>
                <p>English</p>
                <p>EFSET CEFR B1/B2</p>
              </span>
            </div>
          </li>
          <li>
            <div class="link">
              <iconCustom type="pl" />
              <span>
                <p>Polish</p>
                <p>Native</p>
              </span>
            </div>
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
      padding:.75rem;
      picture{
        // border:2px dashed red;
        height:5.5cm;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          background: rgb(21, 21, 116);
          border:2px dashed blue;
          height:5cm;
          width:5cm;
        }
      }
      h1{
        // border:2px dashed red;
        margin:0;
        font-size:2em;
      }
      h2{
        // margin:0 .75rem;
        margin:0;
        margin-top:2rem;
        line-height: 1.5rem;
        // &:first-of-type{
        //   margin:0;
        //   // margin-top:.25rem;
        //   // border:2px dashed red;
        // }
      }
      > ul{
        // border:2px dashed red;
        // padding:0 1rem;
        margin:0 .25rem;
        padding:0;
        list-style: none;
        li {
          // border:2px dashed blue;
          width: fit-content;
          margin:.5rem 0;
          div.link a{
            padding:2px;
          }
          .link{
            display:flex;
            align-items: center;
            // border:2px dashed green;
            a{
              // border:2px dashed blue;
              // border:2px dashed transparent;
              width:1.5rem;
              height:1.5rem;
              margin-right:.5rem;
              border-radius: 7px;
            }
            span{
              // border:2px dashed green;
              font-size: .8rem;
              p{
                // border:2px dashed blue;
                line-height: .8rem;
                &:nth-child(2){
                  // border:2px dashed red;
                  font-size:.5rem;
                }
              }
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
