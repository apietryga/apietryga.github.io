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
              v-for="[index, element] in getProjectsByNames(recomended.code).entries()" 
              :to="'/projects/' + element.url" 
              :data-aos-delay="100*index"
              data-aos="fade-right"
              :key="index"
              class="card" 
            >
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
            </NuxtLink>
          </section>
          <footer data-aos="fade-up">
            <NuxtLink to="/projects" class="btn">{{ lang[language].content[7] }}</NuxtLink>
          </footer>
        </div>
      </main>

      <!-- <homeSpacer /> -->
      
      <article id="teaching">
        <header>
          <h2 data-aos="fade-up">{{lang[language].content[8]}}</h2>
          <p>{{lang[language].content[9]}}</p>  
        </header>
        <div class="content">
          <p>{{lang[language].content[10]}}</p>
          <section class="card__wrapper">
            <NuxtLink 
              v-for="element in getProjectsByNames(recomended.teaching)" 
              :to="'/projects/' + element.url" :key="element"
              class="card"
            >
              <header class="card__header">
                <h3>{{ element.name }}</h3>
                <p>{{ element.lang[language].desc }}</p>
              </header>
              <picture class="card__picture">
                <img :src="'/img/contents/' + element.img" :alt="element.name" height="50" width="50">
              </picture>
            </NuxtLink>
            <div></div>
          </section>
          <footer>
            <NuxtLink to="/projects">{{ lang[language].content[11] }}</NuxtLink>
          </footer>  
        </div>
      </article>
      <article id="business">
        <div class="photo me"></div>
        <h2>{{ lang[language].content[12] }}</h2>
        <p>{{ lang[language].content[13] }}</p>
        <section class="card__wrapper">
          <NuxtLink 
            v-for="element in getProjectsByNames(recomended.business)" 
            :to="'/projects/' + element.url" :key="element"
            class="card"
          >
            <header class="card__header">
              <h3>{{element.name}}</h3>
              <p>{{element.lang[language].desc}}</p>
            </header>
            <picture class="card__picture">
              <img :src="'/img/contents/' + element.img" :alt="element.name" height="50" width="50">
            </picture>
          </NuxtLink>
          <div></div>
        </section>
        <footer>
          <NuxtLink :to="'/projects?q=' + lang[language].content[15]">{{ lang[language].content[14] }}</NuxtLink>
        </footer>  
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
        align-items: center;
        display:flex;
        justify-content: center;
        margin:1rem 0 3rem 0;
        width:100%;
      }
      section{
        margin-top:3rem;
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
          justify-content: center;
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
    > header{
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
      section{
        padding-bottom:0;
        width:80%;
      }

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
      }
      >section{
        flex-direction: column;
        padding:0 2rem;
        a{ max-width: 60%; }
      }
    }
  }
</style>