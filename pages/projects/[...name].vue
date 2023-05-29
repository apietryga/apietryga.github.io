<template>
  <div>
    <header>
      <div class="mainImg">
        <picture v-if="img">
          <img :src="'/img/contents/' + img" :alt="name">
        </picture>
        <div class="title">
          <h1>{{ name }}</h1>
          <h2>{{ desc }}</h2>
        </div>
      </div>
    </header>
    <main class="content">
      <template v-for="section in getContent()" :key="section">
        <section v-if="section?.media || section?.header">
          <p v-if="section.header" v-html="section.header"></p>
          <media v-else :props="section" />
        </section>
      </template>
    </main>
    <div class="prevNextWrapper">
      <div v-for="butt of getPrevNext()" :key="butt">
        <NuxtLink v-if="butt?.name" :to="'/projects/' + butt.url">
          <picture>
            <img :src="'/img/contents/' + butt.img" :alt="butt.name +' Logo'" />
          </picture>
          <div class="title">
            <h4>{{ butt.name }}</h4>
            <p>{{ butt.desc }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      const projects = this.$t('projects')
      const projectIndex = projects.findIndex( project => project.url == this.$route.params.name[0])
      console.log(projects[projectIndex])
      return {
        ...projects[projectIndex],
        projectIndex,
        projects,
      }
    },
    methods: {
      getContent(){
        const content = [];
        const fieldsLength = Math.max(this.content?.length || 0, this.media?.length || 0);
        for(let i = 0; i <= fieldsLength - 1; i++){
          content.push({ header: this.content[i], name: this.name })
          content.push({ media: this.media?.[i], name: this.name })
        }
        return content
      },
      getPrevNext(){
        return [ 
          { ...this.projects[this.projectIndex - 1] },
          { ...this.projects[this.projectIndex + 1] },
        ]
      },
    },
  }
</script>

<style lang="scss">
  .content{
    ul {
      text-align: left;
    }
    p {
      margin: 0;
      width:100%;
      p{
        margin:0;
        width:100%;
      }
    }
  }
  .details{
    position:relative;
    .background{
      position:absolute;
      width:100%;
      height:100%;
      z-index:-1;
    }
  }
  .mainImg{
    align-items: center;
    background-position:center;
    display:flex;
    justify-content: flex-start;
    padding:1rem;
    width:100%;
    picture{
      align-items: center;
      background: var(--accent);
      border-radius: .5rem;
      display: flex;
      padding:.5rem;
      margin:.5rem;
      img{
        width:4rem;
        height:4rem;
        max-width: unset;
      }
    }
    .title{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin:.5rem;
      p{
        text-align: left;
      }
      h1{
        line-height: 2.5rem;
        font-size:2rem;
        margin:0;
      }
      h2{
        font-size:1.2rem;
        line-height: 1.1rem;
        margin:0;
      }
      h4{
        margin:0;
      }
    }
  }
  main.content{ // content in details
    display:flex;
    flex-direction: column;
    padding:1rem;
    section{
      display:flex;
      align-items: center;
      flex-direction: column;
      margin:0 0 2rem 0;
      max-width:100%;
      flex:1;
      header,article{
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img,iframe{
          max-width: calc(100% - 2rem);
        }
      }
      header{
        padding:1.5rem 0;
      }
    }
    @media (min-width : 720px){
      &.content{
        display:grid;
        grid-template-columns: 1fr 1fr;
      }
      h2{
        margin-bottom:2rem
      }
      section{
        display:flex;
        align-items: center;
        padding:1rem 1.5rem;
        justify-content: flex-end;
        &:nth-child(1){
          align-items: flex-start;
          justify-content: flex-start;
        }
        &:nth-child(odd){
          justify-content: flex-end;
          display:flex;
          text-align:right;
        }
        &:nth-child(even){
          justify-content: flex-start;
        }  
        flex-direction: row;
        header{
          padding:2rem;
        }
      }
    }
  }
</style>