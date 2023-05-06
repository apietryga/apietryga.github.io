<template>
  <div>
    <div class="headerWrapper">  
      <homeNewHeader />
    </div>
    <div class="overwrapper">
      <homeCode />
      <homeTeaching />
      
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
  .heroText{
    font-size: 2rem;
    font-weight: 100;
    line-height: 100%;
    b{
      line-height: 100%;
      font-size: 2.5rem;
      color:var(--accent);
      font-weight:900;
    }
  }

  // h2 b { color: var(--accent); font-weight: 900; }
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