<template>
  <main class="list">
    <h1 v-if="title">{{ title }}</h1>
    <nav>
      <template v-if="projects.length > 0">          
        <section v-for="item in projects" :key="item">
          <div class="wrapper">
            <NuxtLink :to="'/projects/' + item.url">
              <article>
                <img :src="'/img/contents/' + item.img" :alt="item.name">
              </article>
              <header>
                <p class="date">{{item.date}}</p>
                <h2>
                  {{ item.name }}
                </h2>
                <p>{{ item.lang[language].desc }}</p>
              </header>
            </NuxtLink>
            <!-- <article>
              <img :src="'/img/contents/' + item.img" :alt="item.name">
            </article> -->
          </div>
          <footer>
            <!-- <NuxtLink :to="'/projects?q=' + tag" v-for="tag in item.lang[language].category" :key="tag">
              <small>#{{ tag }}</small>
            </NuxtLink> -->
          </footer>
        </section>
      </template>
      <section v-else>
        <p>
          There's no results<span v-if="$route.query"> for <b>{{ $route.query.q }}</b> query</span>.<br /> 
          Try search something else or 
          <NuxtLink 
            style="color:var(--link-color)"
            to="/projects">see all projects</NuxtLink>
        </p>
      </section>
    </nav>
  </main>
</template>

<script>
  export default {
    data(){
      const { index, language, projects } = this.$appData
      if(this.$route.query?.q){
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
  }
</script>

<style lang="scss">
.list{
  min-height: calc(100vh - var(--navfooterHeight) - #{var(--navHeaderHeight)});
  // margin-top:var(--navHeaderHeight);
  display:flex;
  flex-wrap:wrap;
  position:relative;
  justify-content:flex-start;
  width:100%;
  $tableBackground:var(--dark-primary);
  h1{
    margin:1rem 0 .2rem .5rem;
  }
  nav{
    position:relative;
    margin:0 auto;
    display:flex;
    flex-direction: column;
    section{
      border-bottom:.1rem solid rgba(0, 0, 0, 0.288);
      display:flex;
      flex-direction: column;
      padding:1rem;
      .wrapper{
        display:flex;
        justify-content: space-between;
        a{
          // border:2px dashed red;
          display:flex;
          align-items: center;
          header{
            flex:1;
            h2{
              margin:.3rem 0;
            }
            .date{
              font-size:.6rem;
              font-weight:bolder;
              line-height:.7rem;
              margin:0;
            }
          }
          article{
            display:flex;
            flex-direction: row-reverse;
            margin-right:1rem;
            img{
              height:100px;
              width:100px;
            }
          }
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