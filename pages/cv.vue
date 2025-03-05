<template>
	<Head>
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet">	</Head>
  <div class="overCV">

	<div class="download-links">
		<nuxtLink class="btn" target="_blank"
			to="/cvs/Pietryga_Antoni_2025_03_CV_pl.pdf"
			download="/cvs/Pietryga_Antoni_2025_03_CV_pl.pdf"
			style="margin-top:2em;">
			{{ $t('cv.download') }} PL
		</nuxtLink>

		<nuxtLink class="btn" target="_blank"
			to="/cvs/Pietryga_Antoni_2025_03_CV_pl.pdf"
			download="/cvs/Pietryga_Antoni_2025_03_CV_en.pdf"
			style="margin-top:2em;">
			{{ $t('cv.download') }} EN
		</nuxtLink>
	</div>

    <div class="cv" ref="cv">
      <article>
        <picture>
          <!-- <img src="/img/cv/antoni-pietryga-light.jpg" alt="Antoni Pietryga profile photo"> -->
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
							<!-- {{  skill  }} -->
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

		<header>
			<h1>{{ $t('author') }}</h1>
			<p class="role">{{ $t('role') }}</p>
	
			<h2>{{ $t('cv.summary.title') }}</h2>
			<p class="summary">{{ $t('cv.summary.content') }}</p>
			<h2>{{ $t('cv.experience.title') }}</h2>
		</header>

		<ol>
          <li v-for="item of $t('cv.experience.items')">
			  <header class="li-header">
				
				<p class="title">
					<h3>{{ item.role }}</h3>
					<sup v-if="!item.items">{{ item.title }}</sup>
				</p>

				<p class="date">
					<!-- <span v-for="(subitem, index) of item.items">
						<template v-if="item.items">
							<span v-if="! index">{{ subitem.date_from }}</span>
							<template v-if="index == item.items.length - 1">
								<span>- {{ subitem.date_to }}</span>
								<span v-html="countYears(subitem)"></span>
							</template>
						</template>
					</span> -->

					<template v-if="! item.items?.length">
						<span>{{ item.date_from + " - " + item.date_to }}</span>
						<span v-html="countYears(item)"></span>
					</template>

					<!-- <span v-if="!item.items">{{ item.date_from + " - " + item.date_to }}</span> -->
					<!-- <span v-else>{{ item.items[0].date_from + " - " + item.items[item.items.length - 1].date_to }}</span> -->
				</p>

			</header>
			<p class="desc" v-if="!item.items">{{ item.desc }}</p>
			<ul v-if="item.items">
              <li v-for="subitem of item.items">
				<div class="li-subheader">
					<p class="date">
						<span>{{ subitem.date_from + " - " + subitem.date_to }}</span>
						<span v-html="countYears(subitem)"></span>
					</p>
					<h4>{{ subitem.company }}</h4>
				</div>
				
				<p class="desc">{{ subitem.desc }}</p>
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
.overCV{
  display:flex;
  flex-direction: column;
  align-items: center;
	
	.download-links{
		display:flex;
		gap:15px;
		flex-wrap: wrap;
	}

	.cv{
		margin:2em;
		background: #000;
		display:flex;
		width:  210mm;
		height: calc(297mm - 2px);
		border:1px solid #fff;

		h1, h2, h3, h4, h5, h6{
			font-family: "Ubuntu";
			// font-family: "Ubuntu";
		}

		p{
			padding-left:.2rem;
		}
		// font-family: "Aldrich", sans-serif;
		// font-family: "Ubuntu";
		// font-family: "Open Sans", sans-serif;
		// font-family: "Ubuntu", sans-serif;
		font-weight: 400;
		font-style: normal;


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
			font-family: "Ubuntu";
			font-weight: 600;
			margin-top:3px;
			display: flex;
			flex-wrap: wrap;
			gap:5px;
			color: rgba(0,0,0,0.7)
		}

		section{
			background: #fff;
			color:#000;
			flex:2;
			padding:1em;
			display:flex;
			flex-direction: column;
			font-family: Arial, Helvetica, sans-serif;
			// font-family: 'Times New Roman', Times, serif;

			header{

				h1{
					font-size:3rem;
					line-height: 1.5rem;
					margin-top:.5rem;
				}

				.role{
					// border:2px dashed red;
					font-size:1.5rem;
					font-weight: 700;
					font-family: "Ubuntu";
				}

				.summary{
					line-height: 1.2;
				}

				h2{
					margin-top:1rem;
					font-size:1.25rem;
				}
				
			}

			
			p{
				line-height: 1.5em;
				font-size: 1rem;
				font-weight: 500;
			}
			ol{
				margin:0;
				padding:0 0 0 2em;
				list-style: none;
				flex:1;
				// sup{
					// font-size:.6em;
					// font-weight: bold;
					// position:relative;
					// top:-.3em;

				// }
				>li{
					margin-top:.5rem;
					position: relative;

					.date{
						// border:2px dashed red;
						display:flex;
						font-size:1rem;
						font-weight: 600;
						white-space: nowrap;
						padding-top: .5rem;
						// align-items: flex-start;
					}

					.desc{
						// border:2px dashed red;
						margin-bottom:.5rem;
						line-height: 1.25;
					}


					.li-header{
						display:flex;
						justify-content: space-between;

						.title {
							padding:.5rem 0 ;

							h3{
								font-size:1.2rem;
								line-height: 1;
								font-weight: 600;
							}

							sup{
								margin: .25rem 0;
								line-height: 1;
								display:flex;
							}

						}

					}



					>p{
						margin-top:-.5em;
					}
					p{
						font-size: 1rem;
						line-height: 1;
						// margin-bottom: 0;
						// border:2px dashed red;
						// border:2px dashed red;
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
							// margin-top:.5rem;
							// border:2px dashed red;
							margin-bottom:.75rem;
							.li-subheader{
								display:flex;
								flex-direction: row-reverse;
								justify-content: space-between;
								// padding:.2rem 0 1rem 0;

								h4{
									// margin-bottom:.5em;
									margin:0 0 1em 0;
									margin-bottom:0;
									line-height: 1em;
								}

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

@media only screen and (max-width:210mm){
	.overCV .cv{
		flex-direction: column-reverse;
		width:95%;
		height: unset;
		margin-top:2.5%;
		section >.description{
			display:none;
		}
	}
}

@media only print {
	.btn{
		display:none;
	}
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


<script lang="ts" setup>

	const countYears = ({ date_from, date_to }) => {

		if (!date_from || !date_to) {
			return '';
		}

		let endDate = date_to ? new Date(date_to.split('.').reverse().join('.')) : new Date();
		if (isNaN(endDate.getTime())) {
			endDate = new Date();
		}

		const startDate = new Date(date_from.split('.').reverse().join('.'));
		const diffTime = Math.abs(endDate - startDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		const totalYears = diffDays / 365;

		const years = Math.floor(totalYears);
		const months = Math.floor((totalYears - years) * 12);

		return '&nbsp;(' + years + 'y, ' + months + 'm)';

	}



</script>
