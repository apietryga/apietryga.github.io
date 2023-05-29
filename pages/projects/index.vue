<template>
  <main class="list">
    <nav>
      <template v-if="projects.length > 0">          
        <section v-for="item in filteredProjects" :key="item" data-aos="fade-up">
          <div class="wrapper">
            <NuxtLink :to="'/projects/' + item.url">
              <article>
                <picture>
                  <img :src="'/img/contents/' + item.img" :alt="item.name">
                </picture>
              </article>
              <header>
                <p class="date">{{item.date}}</p>
                <h2>{{ item.name }}</h2>
                <p>{{ item.desc }}</p>
              </header>
            </NuxtLink>
          </div>
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
      const projects = this.$t('projects')
      return { 
        projects, 
        filteredProjects: [],
      }
    },
    methods: {
      searchProjects(){
        const q = this.$route.query?.q?.toLowerCase()
        if( !this.projects || !q ){ return this.filteredProjects = this.projects }

        // FILTERING
        const filteredProjects = this.projects.filter( project => {
          if( project.url.toLowerCase().includes(q)
          ||  project.name.toLowerCase().includes(q) 
          ||  project.desc.toLowerCase().includes(q)
          ||  project.category.map(i => i.toLowerCase()).includes(q)
          ){ return true }
          for(const content of project.content ){
            if( content.toLowerCase().includes(q) ){ return true }
          }
          return false
        })

        // SORTING

        this.filteredProjects = filteredProjects
      },
    },
    mounted() {
      this.searchProjects()
    },
    watch: {
      '$route.query'() {
        this.searchProjects()
      }
    },
  }
</script>

<style lang="scss">
.list{
  min-height: calc(100vh - var(--navfooterHeight) - #{var(--navHeaderHeight)});
  display:flex;
  flex-wrap:wrap;
  position:relative;
  justify-content:flex-start;
  width:100%;
  // $tableBackground:var(--dark-primary);
  h1{
    margin:1rem 0 .2rem .5rem;
  }
  nav{
    position:relative;
    margin-left: 3rem;;
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
            picture{
              border-radius: 0.5rem;
              background: var(--accent);
              padding:10px;
              img{
                // border:2px dashed red;
                height:80px;
                width:80px;
              }
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

@media (max-width:768px){
  .list nav{
    margin:0;
  }
}
</style>