<template>
  <main class="list">
    <h1>{{ title }}</h1>
    <nav>
      <section v-for="item in projects">
        <header>
          <h2>
            <RouterLink :to="'/projects/' + item.url">{{ item.name }}</RouterLink>
          </h2>
          <p class="date">{{item.date}}</p>
        </header>
        <article>
          <img :src="'/img/contents/' + item.img" :alt="item.name">
          <p>{{ item.lang[language].desc }}</p>
        </article>
        <footer>
          <RouterLink :to="'/search?q=' + tag" v-for="tag in item.lang[language].category">
            #{{ tag }}
          </RouterLink>
        </footer>
      </section>    
    </nav>
  </main>
</template>

<script>
  import { useDataStore } from '@/stores'
  import { RouterLink } from 'vue-router'
  export default {
    data(){
      const { index, language, projects } = useDataStore()
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
          if( project.url.includes(q)
          ||  project.name.includes(q) 
          ||  project.lang[lang].desc.includes(q)
          ||  project.lang[lang].category.includes(q)
          ){ return true }
          for(const content of project.lang[lang].content ){
            if( content.includes(q) ){ return true }
          }
          return false
        })

        // SORTING
        


        return filteredProjects
      },
    },
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
    span{
      background-color:rgb(150, 150, 11);
    }
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