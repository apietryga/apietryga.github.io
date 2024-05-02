<template>
  <div class="overCV">

    <!-- <nuxtLink class="btn" target="_blank"
			to="/cvs/2023_06_CV_en.pdf"
			download="/cvs/2023_06_CV_en.pdf"
			style="margin-top:2em;">
			{{ $t('cv.download') }}
		</nuxtLink> -->

		<button @click="generatePDF()">
			Generate
		</button>

    <div class="cv_wrapper">
      <div id="curriculum_vitae">

        <main>

          <header>
            <h1>{{ $t('author') }}</h1>
            <h2>{{ $t('role') }}</h2>
            <picture>
              <img src="/img/cv/anotni-pietryga-2024.jpg" alt="Antoni Pietryga profile photo">
            </picture>
          </header>

          <div class="contact">
            <div class="contact-item" v-for="contact_item of cv.contact">
              <a :href="contact_item.href" :target="contact_item.blank ? '_blank' : null">
                <!-- <i>{{ contact_item.icon }}</i> -->
                <span>{{ contact_item.label }}</span>
              </a>
            </div>
            <!-- <ul>
              <li>
                <a class="link" :href="'mailto:' + $t('contact.icons.mail')">
                  <iconCustom type="mail" />
                  <span>{{ $t('contact.icons.mail') }}</span>
                </a>
              </li>
              <li>
                <a class="link" :href="'tel:' + $t('contact.icons.phone').replace(/ /g, '')">
                  <iconCustom type="phone" />
                  <span>{{ $t('contact.icons.phone') }}</span>
                </a>
              </li>
              <li>
                <a class="link" :href="$t('cv.contact.webpage')" target="_blank">
                  <iconCustom type="web" />
                  <span>{{ $t('cv.contact.webpage').replace('https://', "") }}</span>
                </a>
              </li>
              <li>
                <a class="link" :href="$t('contact.icons.github')" target="_blank">
                  <iconCustom type="github" />
                  <span>{{  $t('cv.contact.social_name') }}</span>
                </a>
              </li>
              <li>
                <a class="link" :href="$t('contact.icons.linkedin')" target="_blank">
                  <iconCustom type="linkedin" />
                  <span>{{  $t('cv.contact.social_name') }}</span>
                </a>
              </li>
            </ul> -->
          </div>

          <footer>
            footer
          </footer>

        </main>
        <section>
          About me
        </section>
        <!-- <p><font size="3" color="red">print this to pdf</font></p> -->
      </div>
    </div>

		<div class="cv" ref="cv">
			<article>
        <picture>
          <img src="/img/cv/anotni-pietryga-2024.jpg" alt="Antoni Pietryga profile photo">
        </picture>
        <h2>{{ $t('cv.contact.title') }}</h2>
        <ul>
          <li>
          <a class="link" :href="'mailto:' + $t('contact.icons.mail')">
            <iconCustom type="mail" />
            <span>{{ $t('contact.icons.mail') }}</span>
          </a>
          </li>
          <li>
          <a class="link" :href="'tel:' + $t('contact.icons.phone').replace(/ /g, '')">
            <iconCustom type="phone" />
            <span>{{ $t('contact.icons.phone') }}</span>
          </a>
          </li>
          <li>
          <a class="link" :href="$t('cv.contact.webpage')" target="_blank">
            <iconCustom type="web" />
            <span>{{ $t('cv.contact.webpage').replace('https://', "") }}</span>
          </a>
          </li>
          <li>
          <a class="link" :href="$t('contact.icons.github')" target="_blank">
            <iconCustom type="github" />
            <span>{{  $t('cv.contact.social_name') }}</span>
          </a>
          </li>
          <li>
          <a class="link" :href="$t('contact.icons.linkedin')" target="_blank">
            <iconCustom type="linkedin" />
            <span>{{  $t('cv.contact.social_name') }}</span>
          </a>
          </li>
        </ul>
        <h2>{{ $t('cv.main_skills.title') }}</h2>
        <ul>
          <li>
                <template v-for="skill of $t('cv.main_skills.items')">
                  <a class="link"
                    :href="$t('cv.contact.webpage') + '/projects?q=' + skill.name" 
                    target="_blank"
                  >
                    <iconCustom :type="skill.ico" />
                    <span>{{ skill.name }}</span>
                  </a>
                </template>
          </li>
        </ul>
        <h2>{{ $t('cv.languages.title') }}</h2>
        <ul>
          <li v-for="item of $t('cv.languages.items')">
          <div class="link">
            <iconCustom :type="item.ico" />
            <span>
            <p>{{ item.name }}</p>
            <p>{{ item.desc }}</p>
            </span>
          </div>
          </li>
        </ul>
			</article>
			<section>
			<h1>{{ $t('author') }}</h1>
					<p class="role">{{ $t('role') }}</p>
			<h2>{{ $t('cv.summary.title') }}</h2>
					<p>{{ $t('cv.summary.content') }}</p>
			<h2>{{ $t('cv.experience.title') }}</h2>
			<ol>
				<li v-for="item of $t('cv.experience.items')">
				<sub>
					<span v-if="!item.items">{{ item.date_from + " - " + item.date_to }}</span>
					<span v-else>{{ item.items[0].date_from + " - " + item.items[item.items.length - 1].date_to }}</span>
				</sub>
				<h3>{{ item.title }}</h3>
				<sup v-if="!item.items">{{ item.role }}</sup>
				<p v-if="!item.items">{{ item.desc }}</p>
				<ul v-if="item.items">
					<li v-for="subitem of item.items">
					<sub>{{ subitem.date_from + " - " + subitem.date_to }}</sub>
					<h4>{{ subitem.company }}</h4>
					<p>{{ subitem.desc }}</p>
					<p v-if="subitem.stack" class="stack">
						<span v-for="tech of subitem.stack">{{ tech }}</span>
					</p>
					</li>
				</ul>
				<p v-if="item.stack" class="stack">
					<span v-for="tech of item.stack">{{ tech }}</span>
				</p>
				</li>
			</ol>
			<p class="description">{{ $t('cv.experience.description') }}</p>

			</section>
		</div>

  </div>
</template>

<style lang="scss">
  #curriculum_vitae{
    border:2px dashed red;
    // top:0;
    color:#000;
    // height:296px;
    // width: 210px;
    // height:var(--cv-default-height);
    width: var(--cv-default-width);
    background: #fff;
    display:flex;
    font-size:5px;

    a{
      display:inline-flex;
      line-height: unset;
    }

    main{
      align-items: center;
      border:2px dashed green;
      display: flex;
      flex:2;
      flex-direction: column;
      // justify-content: center;
      text-align: center;

      header{
        // text-align: center;
        border:2px dashed blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        h1, h2 {
          margin:0;
          line-height: 1;
        }
        h1{
          font-size:6px;
          font-weight: 800;
        }
        h2{
          font-size:3px;
        }
        picture{
          width:50px;
          height:50px;
          border:2px dashed yellow;
          display:flex;
          justify-content: center;
          img{
            max-width: 100%;
            max-height: 100%;
            border-radius:50%;
          }
        }
      }

      .contact{
        border:2px dashed pink;
        padding:0;
        color:#000;
        // flex:1;
        .contact-item{
          color:#000;

        }
        // ul{
        //   border:2px dashed greenyellow;
        //   margin:0;
        //   padding:0;
        //   list-style:none;
        //   color:green;
        //   li{
        //     color:blue;
        //     border:2px dashed red;
        //     a{
        //       color:yellow;
        //       border:2px dashed green;
        //       display:flex;

        //       &:not(.link){
        //         width:15px;
        //         height:15px;

        //       }

        //     }
        //   }
        // }

      }

      footer{
        border:2px dashed #000;
      }
    }

    > section{
      border:2px dashed red;
      flex:3;
    }


  }

  .overCV{
    display:flex;
    flex-direction: column;
    align-items: center;

    .cv_wrapper{
      --cv-scale: 3;
      --cv-default-height: 296px;
      --cv-default-width: 210px;
      // --cv-scale: .6;
      // --cv-default-height: 296mm;
      // --cv-default-width: 210mm;
      border:2px dashed blue;
      // aspect-ratio: 210 / 296;
      height: calc(var(--cv-default-height) * var(--cv-scale));
      width: calc(var(--cv-default-width) * var(--cv-scale));
      // display: flex;
      // justify-content: center;
      display: grid;
      place-items: center;
      position: relative;


      #curriculum_vitae{
        transform: scale(var(--cv-scale));
        position: absolute;
      }
    //   // --cv-width:  

    //   border:2px dashed green;

    }

    .cv{
      margin:2em;
      background: #000;
      display:flex;
      width:  210mm;
      height: calc(297mm - 2px);
      border:1px solid #fff;
      article{
        flex:1;
        color:#fff;
        padding:1em .5em 1em 1em;
        picture{
          height:5.5cm;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-right:.5em;
          img{
            background: rgb(21, 21, 116);
            border-radius:5cm;
            height:5cm;
            width:5cm;
          }
        }
        h2{
          margin:0;
          margin-top:2em;
          line-height: 1.5em;
          &:first-of-type{
            margin-top:.5em;
          }
        }
        > ul{
          margin:0 .25em;
          padding:0;
          list-style: none;
          li {
            width: fit-content;
            margin:.5em 0;
            div.link a{
              padding:2px;
            }
            .link{
              display:flex;
              align-items: center;
              a{
                width:1.5em;
                height:1.5em;
                margin-right:.5em;
                border-radius: 7px;
              }
              span{
                font-size: .8em;
                p{
                  line-height: 1.2em;
                  &:nth-child(2){
                    font-size:.5em;
                    text-transform: uppercase;
                  }
                }
              }
    
            }
          }
        }
      }
      .stack{
        font-weight: bold;
        margin-top:3px;
        display: flex;
        flex-wrap: wrap;
        gap:5px;
      }
      section{
        background: #fff;
        color:#000;
        flex:2;
        padding:1em;
        display:flex;
        flex-direction: column;
        h1{
          font-size:3em;
          margin:0;
          line-height: .9em;
          margin-top:.25em;
        }
        h2{
          margin-top:.5em;
        }
        p{
          line-height: 1.1em;
          font-size: .9em;
        }
        ol{
          margin:0;
          padding:0 0 0 2em;
          list-style: none;
          flex:1;
          sub{
            line-height: 0em;
            position:relative;
            top:-.75em;
            font-size:.6em;
            font-weight: bold;
          }
          sup{
            font-size:.6em;
            font-weight: bold;
            position:relative;
            top:-.3em;

          }
          h3,h4{
            line-height: .3em;
            margin-bottom:.4em
          }
          >li{
            padding-left:.5em;
            margin-top:.5rem;
            position: relative;
            >p{
              margin-top:-.5em;
            }
            p{
              font-size: .9em;
              line-height: 1em;
            }
            &:first-of-type{
              margin-top:0;
            }
            &:last-of-type::after{
              height:0;
            }
            &::before{
              content:"";
              position:absolute;
              top:1em;
              left:calc(-1.5em - 2.5px);
              background: #000;
              border:5px solid #fff;
              width:7px;
              height:7px;
              border-radius: 50%;
              box-shadow: 0 0 5px #000;
              z-index:1;
            }
            &::after{
              content:"";
              left:calc(-1.5em + 5.5px);
              position:absolute;
              background: var(--cv-line-color);
              width:1px;
              top:1.5em;
              height:calc(100% + 1em);
              border-radius: 5px;
              box-shadow: 0 0 2px #000;
            }
            ul{
              list-style: none;
              padding:0 0 0 1em;
              position:relative;
              li{
                margin-top:.5rem;
                h4{
                  // margin-bottom:.5em;
                  margin:0 0 1em 0;
                  margin-bottom:0;
                  line-height: 1em;
                }
                sub{
                  top:-.25em;
                }
                  // p{
                // 	line-height: .9em;
                // }
                // sup{
                // 	// display:none;
                // 	// line-height: 0;
                // 	// margin:0;
                // }
                // p{
                // 	// margin:0;
                // 	line-height: .5em;
                // }
              }
            }
          }
        }
        .description{
          font-size:.7em;
        }
      }
    }

  }

  // @media only screen and (max-width:210mm){
  // 	.overCV .cv{
  // 		flex-direction: column-reverse;
  // 		width:95%;
  // 		height: unset;
  // 		margin-top:2.5%;
  // 		section >.description{
  // 			display:none;
  // 		}
  // 	}
  // }

  // @media only print {
  // 	.btn{
  // 		display:none;
  // 	}
  // 	body{
  // 		height: unset;
  // 	}
  //   .navHeader,
  //   .overWrapper > footer {
  //     display:none;
  //   }
  // 	.overCV .cv{
  // 		margin:0;
  // 	}
  // 	.blob{
  // 		display:none !important;
  // 	}
  // 	#__nuxt > div {
  // 		min-height: unset;
  // 	}
  // }

</style>


<script setup>

  import { jsPDF } from "jspdf";

  // useHead({
  //   script: [{ src: "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" }],
  // })

  const cv = {
    contact: [
      {
        icon: 'mail',
        href: 'mailto:antek.pietryga@gmail.com',
        label: 'antek.pietryga@gmail.com',
      },
      {
        icon: 'phone',
        href: 'tel:+48732012715',
        label: '+48 732 012 715',
      },
      {
        icon: 'web',
        href: 'https://apietryga.github.io',
        label: 'apietryga.github.io',
        blank: true,
      },
      {
        icon: 'github',
        href: 'https://github.com/apietryga',
        label: '/apietryga',
        blank: true,
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/apietryga/',
        label: '/in/apietryga',
        blank: true,
      }
    ]
  }

  const generatePDF = () => {

    // var element = document.getElementById('curriculum_vitae');
    // var opt = {
    //   margin: 0,
    //   filename: 'myfile.pdf',
    //   html2canvas: { scale: 3.78 },
    //   jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    // }
    
    // html2pdf().from(element).set(opt).toPdf().get('pdf').then(pdf => {
    //   console.log({pdf})
    //   window.open(pdf.output('bloburl'), '_blank');
    // })

    const doc = new jsPDF('p', 'mm', [297, 210]);
    const source = window.document.getElementById('curriculum_vitae')

    doc.html(source, {
    	callback: doc => {

        const dimensions = getLinksDimensions(source)
        console.log({ dimensions })

        dimensions.forEach(({ x, y, w, h, url }) => {
          // doc.rect(x, y, w, h, 'FD')
          doc.link(x, y, w, h, { url })
        })

        doc.output("dataurlnewwindow")

    	}
    })

  }

  const getLinksDimensions = source => {

    const cv_wrapper = document.querySelector('.cv_wrapper')
    const cv_styles = getComputedStyle(cv_wrapper)
    const scl = cv_styles.getPropertyValue('--scale');

    console.log({cv_wrapper, cv_styles, scl})

    const scale = 3

    const dimensions = []
    const cv_rect = source.getBoundingClientRect()

    // console.log({cv, source })
    console.log(cv_rect)

    const all_links = source.querySelectorAll('a')
    all_links.forEach(link => {

      const link_rect = link.getBoundingClientRect()
      console.log(link_rect)

      // dimensions.push({
      //   x: link_rect.x - cv_rect.x,
      //   y: link_rect.y - cv_rect.y,
      //   w: link_rect.width,
      //   h: link_rect.height,
      //   url: link.href,
      // })

      dimensions.push({
        x: Math.round((link_rect.x - cv_rect.x) / scale),
        y: Math.round((link_rect.y - cv_rect.y) / scale),
        w: Math.round(link_rect.width / scale),
        h: Math.round(link_rect.height / scale),
        url: link.href,
      })

    })

    console.log({ all_links })
    return dimensions

  }


</script>
