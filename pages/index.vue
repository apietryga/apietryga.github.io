<template>
  <div>
    <div class="headerWrapper">  
      <homeNewHeader />
    </div>
    <div class="overwrapper">
      <main id="code">
        <div class="codeprojects">
          <header>
            <h2 data-aos="fade-up" v-html="$c.home.code.title"></h2>
            <p data-aos="fade-up">{{ $c.home.code.description }}</p>
          </header>
          <div class="techCloud">
            <ul>
              <li v-for="[index, techElement] in stack.entries()" :key="index" data-aos="fade-up" :data-aos-delay="index*10">
                <NuxtLink :to="'/projects?q=' + techElement">{{ techElement }}</NuxtLink>
              </li>
            </ul>
          </div>
          <section class="card__wrapper">
            <NuxtLink 
              :key="element"
              :to="'/projects/' + element.url" 
              v-for="[index, element] in getProjectsByNames(recomended.code).entries()" 
            >
              <article class="card" data-aos="fade-right" :data-aos-delay="100*index">
                <header class="card__header">
                  <h3>{{ element.name }}</h3>
                  <p>{{ element.lang[language].desc }}</p>
                </header>
                <picture class="card__picture">
                  <img :src="'/img/contents/' + element.img" 
                    :alt="element.name" 
                    height="50"
                    width="50"
                  >
                </picture>
              </article>
            </NuxtLink>
          </section>
          <footer data-aos="fade-up">
            <!-- <NuxtLink to="/projects">{{ lang[language].content[7] }}</NuxtLink> -->
            <NuxtLink to="/projects" class="btn">{{ lang[language].content[7] }}</NuxtLink>
          </footer>
        </div>
      </main>
      <article id="teaching">
        <!-- <div class="mask top"></div> -->
        <!-- <div class="stopper"></div> -->
        <header>
          <h2 data-aos="fade-up">{{lang[language].content[8]}}</h2>
          <p>{{lang[language].content[9]}}</p>  
        </header>
        <div class="content">
          <p>{{lang[language].content[10]}}</p>
          <section>
            <NuxtLink v-for="element in getProjectsByNames(recomended.teaching)" :to="'/projects/' + element.url" :key="element">
              <article>
                <header>
                  <h3>{{ element.name }}</h3>
                  <p>{{ element.lang[language].desc }}</p>
                </header>
                <img :src="'/img/contents/' + element.img" :alt="element.name">
              </article>
            </NuxtLink>
            <div></div>
            <footer>
              <NuxtLink to="/projects">{{ lang[language].content[11] }}</NuxtLink>
            </footer>  
          </section>
        </div>
      </article>
      <article id="business">
        <div class="photo me"></div>
        <h2>{{ lang[language].content[12] }}</h2>
        <p>{{ lang[language].content[13] }}</p>
        <section>
          <NuxtLink v-for="element in getProjectsByNames(recomended.business)" :to="'/projects/' + element.url" :key="element">
            <article>
              <header>
                <h3>{{element.name}}</h3>
                <p>{{element.lang[language].desc}}</p>
              </header>
              <img :src="'/img/contents/' + element.img" :alt="element.name">
            </article>
          </NuxtLink>
          <div></div>
          <footer>
            <NuxtLink :to="'/projects?q=' + lang[language].content[15]">{{ lang[language].content[14] }}</NuxtLink>
          </footer>  
        </section>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      const { index, language, projects } = this.$appData
      return { ...index, language, projects }
    },
    methods: {
      getProjectsByNames( names ){
        return names.map(( name ) => {
          return this.projects.filter( project => project.name == name )[0]
        })
      },
    },
  }
</script>

<style lang="scss">
  h2 b { color: var(--accent); font-weight: 900; }
  .overwrapper{
    background: var(--dark-rocks);
    color: var(--bright-primary);
  }
  .headerWrapper{
    width:100%;
    z-index:-15;
    .hider{ // hide elements in front page (code section)
      background: var(--backgroundColor);
      max-width:100%;
      width:100%;
      height:120%;
      position:absolute;
      z-index:-10;
    }
  }
  %rowSection{
    flex:1;
    max-width:80%;
    left:0;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:3fr 1fr;
    a{
      display:flex;
      justify-content: center;
      align-items: center;
      margin:2rem 0;
      &:nth-child(1){
        text-align: right;
      }
      &:nth-child(2){
        img{
          // max-width:5rem;
          // max-height:5rem;   
          width:5rem;
          height:5rem;  
        }
      }
      &:nth-child(3){
        text-align: left;
      }
      article{
        display:flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        header{
          padding:0;
          h2,h3,p{
            margin:0;
            width:100%;
            display:inline-block;
            padding:0;
            text-align: center;
          }
        }
        img{
          background-color: var(--bright-primary);
          border-radius:50%;
          box-shadow: 0 0 5px var(--bright-primary);
          width:4rem;
          height:4rem;
          margin:.8rem 0;
          padding:.5rem;
        }
      }
    }
    footer{
      height:2rem;
      z-index: 1;
      display:flex;
      justify-content: center;
      //height:100%;
      // display:flex;
      align-items: flex-end;
      a{
        text-align: center;
        color:inherit;
        margin:0;
        &:hover{
          color:rgb(146, 129, 129);
          transition: .5s;
        }
      }
    }
    @media (max-width:720px){
      grid-template-columns:1fr;
      grid-template-rows: 1fr 1fr 1fr;          
      a{
        width:60%;
        margin:auto;
        img{
          max-width:5rem!important;
          max-height:5rem!important;     
        }
      }
      footer{
        a{
          text-align: center!important;
          margin-top:4rem;
        }
      }
    }
  }
  .mask{
    // background:red;
    clip-path: polygon(50% 100%, 100% 0%, 100% 100%, 0 100%, 0 0);
    height:calc(10vh + 5px);
    position:relative;
    bottom:-.1rem;
    width:100%;
    &.light{
      background-color:var(--backgroundColor);
    }
    &.dark{
      clip-path: polygon(100% 0, 0 0, 50% 100%);
      bottom:calc(-10vh - 4px);
      // background-color: #040003;
        background:red;

    }
  }
  #code{
    position:relative;
    .codeprojects{
      width:100%;
      display:flex;
      flex-direction: column;
      align-items: center;
      > header{
        flex:1;
        padding:0 2rem;
        width:100%;
        h2{
          text-align: right;
          margin:2rem 0 0 0;
          font-size:2rem;
          line-height: 100%;
        }
        > p{
          margin-bottom:0;
          text-align: right;
          padding-left:50vw;
        }
      }
      footer{
        display:flex;
        // align-items: flex-start;
        align-items: center;
        justify-content: center;
        width:100%;
        // padding-left:2rem;
        margin-top:1rem;
      }
      section{
        // flex:1;
        // display:flex;
        // justify-content: flex-start;
        // margin:3rem 0;
        margin-top:3rem;
        a{
          max-width: 25%;
          // article:nth-child(1){
          &:nth-child(2){
          //   // border:2px dashed blue;
            transform: scale(1.2);
          //   // align-items: center;
          //   // color:var(--font-primary-color);
          //   // border:.25rem solid var(--bright-primary);
          //   // border-radius:.5rem;
          //   // display:flex;
          //   // flex-direction: row-reverse;
          //   // padding:.5rem;
          //   // margin:0 .5rem;
          //   // header{
          //   //   // margin-left:.5rem;
          //   //   // h3{
          //   //   //   margin:0;
          //   //   // }
          //   //   p{
          //   //     font-size:.8rem;
          //   //     line-height: .8rem;
          //   //   }
          //   // }
          //   // picture{
          //   //   padding:.25rem;
          //   //   background: var(--font-primary-color);
          //   //   display:flex;
          //   //   align-items: center;
          //   //   justify-content: center;
          //   //   border-radius:50%;
          //   // }
          }
        }
      }
      .techCloud{
        display: flex;
        justify-content: flex-end;
        width:100%;
        ul{
          display:flex;
          flex-wrap: wrap;
          list-style-type: none;
          max-width: 60vw;
          padding-right:2rem;
          @mixin text-contrast($n) {
            $color-brightness: round((red($n) * 299) + (green($n) * 587) + calc((blue($n) * 114) / 1000));
            $light-color: round((red(#ffffff) * 299) + (green(#ffffff) * 587) + calc((blue(#ffffff) * 114) / 1000));
            @if abs($color-brightness) < calc($light-color / 2){
              color: white;
            }
            @else {
              color: black;
            }
          }
          @mixin random-bgr($i){

            $c: rgb(random(255), random(255), random(255));
            background: $c;
            border-color:darken($c,10%);
            color:invert(darken($c,10%));
            @include text-contrast($c);


          }
          li{
            border:.25rem solid red;
            font-size: 90%;
            padding:.25rem .5rem;
            margin:.1rem;
            border-radius:8px;
            font-weight:bolder;
            //&:before{content:"➡️ ";}
            @for $i from 0 to 30 {
              &:nth-child(#{$i}) {
                @include random-bgr($i);
                
              }
            }
            a{
              color:inherit;
            }
          }
        }
      }
    }
  }
  #teaching{
    position:relative;
    color:#fff;
    background:var(--dark-rocks);
    display:flex;
    flex-direction: column;
    // margin-top:calc(10vh + 5px);
    .stopper{
      position:absolute;
      background-image: url("/img/frontPage/projects_footer.webp");
      background-size:auto 100%;
      background-repeat: no-repeat;
      background-position: center;
      height:15rem;
      width:100%;
    }
    > header{
      // margin-top:13rem;
      h2{
        padding-left:1rem;
        font-size:3rem;
      }
      p{
        padding-left:1rem;
        margin:.5rem;
        margin-bottom:3rem;
      }  
      *{
        text-align: center;
        flex:1;
      }

    }
    .content{
      display:flex;
      flex-direction: column;
      align-items: center;
      p{
        flex:1;
        margin:0 1.5rem 0rem 1.5rem;
        text-align: center;
      }
      section{
        padding-bottom:0;
        width:80%;
        @extend %rowSection;
      }

    }
    .top{
      top:calc(-10vh - 4px);
    }
  }
  #business{
    background: var(--bright-primary);
    color:var(--dark-primary);
    position:relative;
    min-height:40vh;
    padding:2rem;
    padding-top:var(--navHeaderHeight);
    margin-top:2rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    h2{
      font-size:3rem;
      line-height: 1em;
      margin-top:2rem;
      text-align:center;
    }
    > p{
      padding:0 0 1rem 2rem;
      line-height:1.5rem;
    }
    section{
      @extend %rowSection;
      padding:0 0 2rem 0;
      a{
        margin-top:0;
      }
    }
  }
  #code,#teaching,#business{
    footer{
      a{
        text-align: center!important;
      }
    }
  }

  @media (max-width:768px){
    #code .codeprojects{
      >header >p {
        padding-left:0;
      }
      .techCloud ul{
        max-width:100%;
        justify-content: center;
      }
      >section{
        flex-direction: column;
        padding:0 2rem;
        a{ max-width: 100%; }
      }
      // footer{
      //   // text-align: center;
      //   justify-content: center;
      //   padding:0;
      // }
    }
  }
</style>