<template>
  <div class="overCV">
    <!-- <div class="download cta" @click="generatePDFx()"> DOWNLOAD CV </div> -->
    <div class="cv" ref="cv">
      <article>

        <picture>
          <img src="" alt="Antoni Pietryga profile photo">
        </picture>

        <!-- <h1>Antoni Pietryga</h1> -->
        <h2>Contact</h2>
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

        <h1>Antoni Pietryga</h1>
        <p>Software Developer & Trainer</p>
        <p>Katowice, Woj. Śląskie, Polska</p>

                
        <h2>Summary</h2>        
        <p>
          I am a self-taught programmer with a background in freelance
          full-stack programming from 2014 to 2018 and experience as a
          programming and digital competence trainer from 2018 to 2022.
          Since May 2022, I have been working as a dedicated software
          developer.
        </p>
        
        <h2>Experience</h2>
        <ol>
          <li>
            <sub>May 2022 - Present</sub>
            <h3>Linkhouse.co</h3>
            <sup>Software Engineer</sup>
            <p>
              Maintenance and development platform that simplifies link building - from
              finding offers to monitoring and managing orders. Access one of the largest
              databases of websites for free.
            </p>
          </li>
          <li>
            <sub>May 2022 - Present</sub>
            <h3>Frelance programming trainer</h3>
            <ul>
              <li>
                <sub>lutego 2020 - lutego 2022</sub>
                <h4>Ernabo</h4>
                <p>
                  Conducting trainings in the field of Front-end development in technologies
                  for Ernabo
                </p>
              </li>
              <li>
                <sub>lutego 2020 - lutego 2022</sub>
                <h4>Programming trainer</h4>
                <p>
                  Conducting trainings in the field of Front-end development in technologies
                  for Ernabo
                </p>
              </li>
            </ul>
          </li>
          <li>
            <sub>listopada 2018 - sierpnia 2021</sub>
            <h3>Kuźnia Ekspertów</h3>
            <sup>Digital competence trainer</sup>
            <p>
              Conducting training in the field of digital competences
            </p>
          </li>
          <li>
            <sub>May 2022 - Present</sub>
            <h3>Frelance software developer</h3>
            <ul>
              <li>
                <sub>sierpnia 2016 - października 2016</sub>
                <h4>Good Lock</h4>
                <p>
                  Creating a "Good Lock" escape room website with a booking system
                </p>
              </li>
              <li>
                <sub>lutego 2020 - lutego 2022</sub>
                <h4>Kluczdowszystkiego.pl</h4>
                <p>
                  Creation of a key configurator for LOB Master Key systems - Kluczdowszygo.pl
                </p>
              </li>

              <li>
                <sub>lutego 2020 - lutego 2022</sub>
                <h4>Gigant.pl | MarketingDesign</h4>
                <p>
                  Creating an educational game for children - TOMIGRA
                </p>
              </li>
              <li>
                <sub>grudnia 2014 - stycznia 2015</sub>
                <h4>YanoMebel</h4>
                <p>
                  Modernization of the website of the furniture manufacturer Yano Mebel
                  https://yanomebel.com.pl
                </p>
              </li>
            </ul>
          </li>
        </ol>
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
    background: #000;
    // background: #fff;
    display:flex;
    width:  210mm;
    height: 297mm;
    border:1px solid #fff;
    article{
      flex:1;
      color:#fff;
      // background: #000;
      
      // background: linear-gradient();
      // background: linear-gradient(to left,  #333 80%, #eee 20%);
      // background: linear-gradient(to right, #333, #333 20%, #fff 75%);
      padding:1rem .5rem 1rem 1rem;
      picture{
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
        margin:0;
        font-size:2em;
      }
      h2{
        margin:0;
        margin-top:2rem;
        line-height: 1.5rem;
        &:first-of-type{
          margin-top:.5rem;
        }
      }
      > ul{
        margin:0 .25rem;
        padding:0;
        list-style: none;
        li {
          width: fit-content;
          margin:.5rem 0;
          div.link a{
            padding:2px;
          }
          .link{
            display:flex;
            align-items: center;
            a{
              width:1.5rem;
              height:1.5rem;
              margin-right:.5rem;
              border-radius: 7px;
            }
            span{
              font-size: .8rem;
              p{
                line-height: .8rem;
                &:nth-child(2){
                  font-size:.5rem;
                }
              }
            }
  
          }
        }
      }
    }
    section{
      background: #fff;
      // border-radius:1rem 0 0 5px;
      color:#000;
      flex:2;
      padding:1rem 1rem 1rem .5rem;
      // box-shadow: 0 0 15px red;
      // box-shadow: -10px 0 5px -2px #fff;
      ol{
        padding:0 0 0 2rem;
        list-style: none;
        sub{
          line-height: 0rem;
          position:relative;
          top:-.5rem;
        }
        h3,h4{
          line-height: .3rem;
          margin-bottom:.4rem
          
        }
        h4{
          margin:0 0 1rem 0;
        }
        li{
          margin-top:1rem;
          position: relative;
          >p{
            margin-top:-.5rem;
          }
          p{
            font-size: .9rem;
            line-height: 1rem;
          }
          &:last-of-type::after{
            height:3rem;
          }
          &::before{
            content:"";
            position:absolute;
            top:1rem;
            left:calc(-1.5rem - 4px);
            background: var(--cv-line-color);
            border:5px solid var(--accent);
            width:calc(1rem - 5px);
            height:calc(1rem - 5px);
            border-radius: 50%;
            box-shadow: 0 0 5px #000;
          }
          &::after{
            content:"";
            left:calc(-1.5rem + 4px);
            position:absolute;
            background: var(--cv-line-color);
            width:5px;
            top:1.5rem;
            height:calc(100% + 1rem);
            border-radius: 5px;
          }
          ul{
            list-style: none;
            padding:0 0 0 2rem;
            position:relative;
            &::before{
              content:"";
              position:absolute;
              width:2.5rem;
              height:5px;
              top:1.5rem;
              left:calc(-1.5rem + 5px);
              background: var(--cv-line-color);
            }
            li:last-of-type::after{
              height:0;
            }
          }
        }
      }
    }
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
