<template>
  <main class="list">
    <nav>
      <template v-if="projects.length > 0">          
        <!-- data-aos="fade-up" :data-aos-delay="index * 10"> -->
        <section v-for="item in filteredProjects" :key="item" data-aos="fade-up">
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
                <!-- <p>{{ item.lang[language].desc }}</p> -->
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
      // const { index, language, projects } = this.$appData
      // const { index, language } = this.$appData
      const projects = this.$t('projects')
      // console.log({ index, language, projects })
      return { 
        // ...index, 
        // language, 
        projects, 
        filteredProjects: [],
      }
    },
    methods: {
      searchProjects(){
        // const lang = 'en'
        const q = this.$route.query?.q?.toLowerCase()
        if( !this.projects || !q ){ return this.filteredProjects = this.projects }

        // FILTERING
        const filteredProjects = this.projects.filter( project => {
          if( project.url.toLowerCase().includes(q)
          ||  project.name.toLowerCase().includes(q) 
          // ||  project.lang[lang].desc.toLowerCase().includes(q)
          // ||  this.arrToLowercase(project.lang[lang].category).includes(q)
          ||  project.desc.toLowerCase().includes(q)
          // ||  this.arrToLowercase(project.category).includes(q)
          ||  project.category.map(i => i.toLowerCase()).includes(q)
          ){ return true }
          // for(const content of project.lang[lang].content ){
          for(const content of project.content ){
            // if( content.toLowerCase().includes(q.toLowerCase()) ){ return true }
            if( content.toLowerCase().includes(q) ){ return true }
          }
          return false
        })
        console.log({ q, filteredProjects })

        // SORTING
        this.filteredProjects = filteredProjects
      },
      // arrToLowercase(arr){
      //   // console.log({arr})
      //   // const lower = [];
      //   // for (const element of arr) {
      //   //   lower.push(element.toLowerCase());
      //   // }
      //   // console.log({arr, lower})
      //   // return lower
      //   return arr.map(i => i.toLowerCase())
      // }
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
    // margin:0 auto;
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