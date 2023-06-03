<template>
  <div class="overCV">
    <div class="cv" ref="cv">
      <article>
        <picture>
          <img src="/img/cv/antoni-pietryga.jpg" alt="Antoni Pietryga profile photo">
        </picture>
        <h2>{{ $t('cv.contact.title') }}</h2>
        <ul>
          <li>
            <a class="link" :href="'mailto:' + $t('contact.icons.mail')">
            <!-- <a class="link" href="mailto:antek.pietryga@gmail.com"> -->
              <iconCustom type="mail" />
              <span>{{ $t('contact.icons.mail') }}</span>
              <!-- <span>antek.pietryga@gmail.com</span> -->
            </a>
          </li>
          <li>
            <a class="link" :href="'tel:' + $t('contact.icons.phone').replace(/ /g, '')">
            <!-- <a class="link" href="tel:+48732012715"> -->
              <iconCustom type="phone" />
              <!-- <span>+48 732 012 715</span> -->
              <span>{{ $t('contact.icons.phone') }}</span>
            </a>
          </li>
          <li>
            <a class="link" :href="$t('cv.contact.webpage')" target="_blank">
            <!-- <a class="link" href="https://apietryga.github.io" target="_blank"> -->
              <iconCustom type="web" />
              <!-- <span>apietryga.github.io</span> -->
              <span>{{ $t('cv.contact.webpage').replace('https://', "") }}</span>
            </a>
          </li>
          <li>
            <a class="link" :href="$t('contact.icons.github')" target="_blank">
            <!-- <a class="link" href="https://github.com/apietryga" target="_blank"> -->
              <iconCustom type="github" />
              <span>{{  $t('cv.contact.social_name') }}</span>
            </a>
          </li>
          <li>
            <a class="link" :href="$t('contact.icons.linkedin')" target="_blank">
            <!-- <a class="link" href="https://www.linkedin.com/in/apietryga" target="_blank"> -->
              <iconCustom type="linkedin" />
              <!-- <span>apietryga</span> -->
              <span>{{  $t('cv.contact.social_name') }}</span>
            </a>
          </li>
        </ul>

        <h2>{{ $t('cv.main_skills.title') }}</h2>
        <ul>
          <li>
						<a v-for="skill of $t('cv.main_skills.items')" class="link"
							:href="$t('cv.contact.webpage') + '/projects?q=' + skill.name" 
							target="_blank"
						>
              <iconCustom :type="skill.ico" />
              <span>{{ skill.name }}</span>
						</a>
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
<!-- 
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
-->
        </ul>
        
      </article>
      <section>
        <!-- <h1>Antoni Pietryga</h1> -->
        <h1>{{ $t('author') }}</h1>
				<!-- <p class="role">Software Developer & Trainer</p> -->
				<p class="role">{{ $t('role') }}</p>
        <!-- <h2>Summary</h2>         -->
        <h2>{{ $t('cv.summary.title') }}</h2>
				<p>{{ $t('cv.summary.content') }}</p>
				<!-- <p>
          I am a self-taught programmer with a background in freelance
          full-stack programming from 2014 to 2018 and experience as a
          programming and digital competence trainer from 2018 to 2022.
          Since May 2022, I have been working as a dedicated software
          developer.
        </p> -->
        <!-- <h2>Experience</h2> -->
        <h2>{{ $t('cv.experience.title') }}</h2>
        <ol>
          <li v-for="item of $t('cv.experience.items')">
            <!-- <sub>May 2022 - Present</sub> -->
            <sub>{{ item.date_from + " - " + item.date_to }}</sub>
            <!-- <h3>Linkhouse.co</h3> -->
            <h3>{{ item.title }}</h3>
            <!-- <sup>Software Engineer</sup> -->
            <sup v-if="!item.items">{{ item.role }}</sup>
            <!-- <p>
              Maintenance and development platform that simplifies link building - from
              finding offers to monitoring and managing orders. Access one of the largest
              databases of websites for free.
            </p> -->
						<p v-if="!item.items">{{ item.desc }}</p>
						
						<ul v-if="item.items">
              <li v-for="subitem of item.items">
                <!-- <sub>lutego 2020 - lutego 2022</sub> -->
                <sub>{{ subitem.date_from + " " + subitem.date_to }}</sub>
                <!-- <h4>Ernabo</h4> -->
                <h4>{{ subitem.company }}</h4>
                <!-- <p>
                  Conducting trainings in the field of Front-end development in technologies
                  for Ernabo
                </p> -->
								<p>{{ subitem.desc }}</p>
              </li>
            </ul>
          </li>

					<!-- <li>
            <sub>May 2022 - Present</sub>
            <h3>Linkhouse.co</h3>
            <sup>Software Engineer</sup>
            <p>
              Maintenance and development platform that simplifies link building - from
              finding offers to monitoring and managing orders. Access one of the largest
              databases of websites for free.
            </p>
          </li> -->
          <!-- <li>
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
                <h4>Re</h4>
                <p>
                  Conducting trainings in the field of Front-end development in technologies
                  for Ernabo
                </p>
              </li>
            </ul>
          </li> -->
          <!-- <li>
            <sub>listopada 2018 - sierpnia 2021</sub>
            <h3>Kuźnia Ekspertów</h3>
            <sup>Digital competence trainer</sup>
            <p>
              Conducting training in the field of digital competences
            </p>
          </li> -->
          <!-- <li>
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
          </li> -->
        </ol>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.overCV{
  display:flex;
  flex-direction: column;
  align-items: center;
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
			h1{
				margin:0;
				font-size:2em;
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
		section{
			background: #fff;
			color:#000;
			flex:2;
			padding:1em;
			h1{
				font-size:3em;
				margin:0;
				line-height: .9em;
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
				sub{
					line-height: 0em;
					position:relative;
					top:-.65em;
				}
				h3,h4{
					line-height: .3em;
					margin-bottom:.4em
					
				}
				h4{
					margin:0 0 1em 0;
				}
				>li{
					padding-left:.5em;
					margin-top:1em;
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
						left:calc(-1.5em - 4px);
						background: var(--cv-line-color);
						border:5px solid var(--accent);
						width:calc(1em - 5px);
						height:calc(1em - 5px);
						border-radius: 50%;
						box-shadow: 0 0 5px #000;
					}
					&::after{
						content:"";
						left:calc(-1.5em + 4px);
						position:absolute;
						background: var(--cv-line-color);
						width:5px;
						top:1.5em;
						height:calc(100% + 1em);
						border-radius: 5px;
					}
					ul{
						list-style: none;
						padding:0 0 0 1em;
						position:relative;
						li{
							margin-top:1em;
							h4{
								margin-bottom:.5em;
							}
						}
					}
				}
			}
		}
	}
}

@media only print {
	body{
		height: unset;
	}
  .navHeader,
  .overWrapper > footer {
    display:none;
  }
	.overCV .cv{
		margin:0;
	}
	.blob{
		display:none !important;
	}
	#__nuxt > div {
		min-height: unset;
	}
}

</style>


<script></script>
