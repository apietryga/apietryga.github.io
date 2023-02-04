<template>
  <homeNewHeader />
  <homeRocket />
  <div class="hider"></div>
  <main id="code">
    <div class="codeprojects">
      <header>
        <h1>{{lang[language].content[4]}}</h1>
        <h2>{{lang[language].content[5]}}</h2>
        <p>
          {{lang[language].content[6]}}
        </p>  
      </header>
      <ul>
        <li v-for="techElement in stack" :key="techElement">
          <NuxtLink :to="'/projects?q=' + techElement">{{ techElement }}</NuxtLink>
        </li>
      </ul>
      <section>
        <NuxtLink :to="'/projects/' + element.url" v-for="element in getProjectsByNames(recomended.code)" :key="element">
          <article>
            <header>
              <h2>{{ element.name }}</h2>
              <p>{{ element.lang[language].desc }}</p>
            </header>
            <img :src="'/img/contents/' + element.img" :alt="element.name">
          </article>
        </NuxtLink>
        <div></div>
        <footer>
          <NuxtLink to="/projects">{{ lang[language].content[7] }}</NuxtLink>
        </footer>
      </section>
    </div>
  </main>
  <article id="teaching">
    <div class="mask top"></div>
    <div class="stopper"></div>
    <header>
      <h1>{{lang[language].content[8]}}</h1>
      <h2>{{lang[language].content[9]}}</h2>  
    </header>
    <div class="content">
      <p>{{lang[language].content[10]}}</p>
      <section>
        <NuxtLink v-for="element in getProjectsByNames(recomended.teaching)" :to="'/projects/' + element.url" :key="element">
          <article>
            <header>
              <h2>{{ element.name }}</h2>
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
    <div class="mask dark"></div>
  </article>
  <article id="business">
    <div class="photo me"></div>
    <h1>{{ lang[language].content[12] }}</h1>
    <p>{{ lang[language].content[13] }}</p>
    <section>
      <NuxtLink v-for="element in getProjectsByNames(recomended.business)" :to="'/projects/' + element.url" :key="element">
        <article>
          <header>
            <h2>{{element.name}}</h2>
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
  .hider{ // hide elements in front page (code section)
    background: $backgroundColor;
    z-index:-1;
    width:100%;
    height:120%;
    position:absolute;
  }
  %rowSection{
    flex:1;
    max-width:80%;
    left:0;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:3fr 2fr;
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
          // max-width:2rem;
          // max-height:2rem;
          width:2rem;
          height:2rem;
          margin:.8rem 0;
        }

      }
    }
    footer{
      height:2rem;
      z-index: 1;
      display:flex;
      justify-content: center;
      height:100%;
      // display:flex;
      align-items: flex-end;
      a{
        text-align: center;
        color:inherit;
        &:hover{
          color:rgb(146, 129, 129);
          transition: .5s;
        }
      }
    }
    @media (max-width:720px){
      // border:2px dashed red;
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
          // border:2px dashed red;
          margin-top:4rem;

        }
      }
    }

  }
  .mask{
    background-color:$teachingMaskColor;
    clip-path: polygon(50% 100%, 100% 0%, 100% 100%, 0 100%, 0 0);
    height:calc(10vh + 5px);
    position:relative;
    bottom:-.1rem;
    width:100%;
    &.light{
      background-color:$backgroundColor;
    }
    &.dark{
      clip-path: polygon(100% 0, 0 0, 50% 100%);
      bottom:calc(-10vh - 4px);
      background-color: #040003;
    }
  }
  #code{
    overflow-y: hidden;
    background-color:$backgroundColor;
    position:relative;
    .codeprojects{
      width:100%;
      display:flex;
      flex-direction: column;
      align-items: center;
      header{
        flex:1;
        padding-top:var(--navHeaderHeight);
        h1{
          margin:2rem 0 .5rem 0;
        }
        h2{
          margin-bottom:2rem;
        }
        *{
          text-align: center;
          flex:1;
        }
        p{
          margin-bottom:0;
          padding:0 3rem;
          text-align: left;
        }
      } 
      section{
        @extend %rowSection;
      }
      ul{
        background-color: rgba(0, 0, 0, 0.171);
        padding:.5rem;
        display:flex;
        list-style-type: none;
        flex-direction: column;
        flex-wrap: wrap;
        // margin:auto;
        margin:2rem auto;
        max-height:15rem;
        min-width:80%;
        @extend %coloredATag;
        li{
          font-size: 90%;
          padding:.5rem 0;
          &:before{content:"➡️ ";}
        }
      }
    }
  }
  #teaching{
    position:relative;
    color:#fff;
    background-color: $teachingMaskColor;
    display:flex;
    flex-direction: column;
    margin-top:calc(10vh + 5px);
    .stopper{
      position:absolute;
      background-image: url("/img/frontPage/projects_footer.webp");
      background-size:auto 100%;
      background-repeat: no-repeat;
      background-position: center;
      height:15rem;
      width:100%;
    }
    >header{
      margin-top:13rem;
      // min-height:40vh;
      h1{
        // border:2px dashed red;
        padding-left:1rem;
        font-size:3rem;
      }
      h2{
        padding-left:1rem;
        margin:.5rem;
        margin-bottom:3.4rem;
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
      // transform: translateZ(0);
      p{
        flex:1;
        margin:0 1.5rem 2rem 1.5rem;
        // margin-left:1.5rem;
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
    color:$fontColor;
    position:relative;
    min-height:40vh;
    padding:2em;
    padding-top:var(--navHeaderHeight);
    margin-top:calc(10vh + 5px);
    display:flex;
    flex-direction: column;
    .me{
      z-index:-1;
      top:0;
      left:0;
      width:100%;
      height:100%;
      position:absolute;
      background-size: auto 100%;
      background-position: right;
      background-repeat: no-repeat;
      background-image: url('/img/frontPage/half_index.webp');
    }
    h1{
      font-size:3rem;
      line-height: 1em;
      margin-top:var(--navHeaderHeight);
    }
    >p{
      padding:2rem 0 2rem 2rem;
      line-height:1.5rem;
    }
    section{
      @extend %rowSection;
      padding:2rem 0;
    }
  }
  #code,#teaching,#business{
    footer{
      a{
        text-align: center!important;
      }
    }
  }
</style>