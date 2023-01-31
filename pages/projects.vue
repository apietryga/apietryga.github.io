<template>
  <main class="list">
    <h1>{{ title }}</h1>
    <nav>
      <template v-if="projects.length > 0">          
        <section v-for="item in projects" :key="item">
          <header>
            <h2>
              <NuxtLink :to="'/projects/' + item.url">{{ item.name }}</NuxtLink>
            </h2>
            <p class="date">{{item.date}}</p>
          </header>
          <article>
            <img :src="'/img/contents/' + item.img" :alt="item.name">
            <p>{{ item.lang[language].desc }}</p>
          </article>
          <footer>
            <NuxtLink :to="'/search?q=' + tag" v-for="tag in item.lang[language].category" :key="tag">
              #{{ tag }}
            </NuxtLink>
          </footer>
        </section>
      </template>
      <section v-else>
        <p>
          There's no results<span v-if="$route.query"> for <b>{{ $route.query.q }}</b> query</span>.<br /> 
          Try search something else or <NuxtLink to="/projects">see all projects</NuxtLink>
        </p>
      </section>
    </nav>
  </main>
</template>

<script>
  export default {
    data(){
      const { index, language, projects } = this.$appData
      if(this.$route.name == 'search'){
        return { ...index, language, projects: this.searchProjects( projects, language ) }
      }
      return { ...index, language, projects }
    },
    methods: {
      searchProjects( allProjects, lang ){
        const q = this.$route.query.q

        // FILTERING
        let filteredProjects = [];
        filteredProjects = allProjects.filter( project => {
          if( project.url.toLowerCase().includes(q.toLowerCase())
          ||  project.name.toLowerCase().includes(q.toLowerCase()) 
          ||  project.lang[lang].desc.toLowerCase().includes(q.toLowerCase())
          ||  this.arrToLowercase(project.lang[lang].category).includes(q.toLowerCase())
          ){ return true }
          for(const content of project.lang[lang].content ){
            if( content.toLowerCase().includes(q.toLowerCase()) ){ return true }
          }
          return false
        })

        // SORTING



        return filteredProjects
      },
      arrToLowercase(arr){
        const lower = [];
        for (const element of arr) {
          lower.push(element.toLowerCase());
        }
        return lower
      }
    },
    mounted(){
      console.log(this.$route)
    }
  }
</script>

<style lang="scss">
.list{
  min-height: calc(100vh - #{$footerHeight} - #{$navHeaderHeight});
  margin-top:$navHeaderHeight;
  display:flex;
  flex-wrap:wrap;
  position:relative;
  justify-content:flex-start;
  width:100%;
  $tableBackground:$darkColor;
  @extend %coloredATag;
  h1{
    margin:1rem 0 .2rem .5rem;
  }
  nav{
    position:relative;
    margin:0 auto;
    padding: 1rem .5rem;
    display:flex;
    flex-direction: column;
    section{
      border-bottom:.1rem solid rgba(0, 0, 0, 0.288);
      display:flex;
      margin-bottom:.5rem;
      flex-direction: column;
      padding:.5rem 1rem;
      >header{
        display:flex;
        justify-content: space-between;
        align-items: center;
        h2{
          margin:.5rem 0;
        }
      }
      article{
        display:flex;
        flex-direction: row-reverse;
        p{
          flex:1;
        }
        img{
          width:100px;
          height:100px;
        }
      }
      footer{
        text-align: right;
      }
      @media (max-width:350px){
        flex-direction: column;
        >header{
          margin-top:2rem;
        }
        article{
          header{
            margin-top:.2rem;
          }
        }
      }
    }  
  }
}
</style>