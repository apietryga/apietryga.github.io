<template>
  <!-- <div class="details"> -->
    <!-- <div class="background" style="background-color:{{color}}"></div> -->
    <!-- <div class="mainImg" v-if="img">
      <img :src="'/img/contents/' + img" :alt="name">
    </div> -->
  <!-- </div> -->
  <header>
    <div class="mainImg">
      <picture v-if="img">
        <img :src="'/img/contents/' + img" :alt="name">
      </picture>
      <div class="title">
        <h1>{{ name }}</h1>
        <h2>{{ lang[language].desc }}</h2>
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
          <p>{{ butt.lang[language].desc }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      const { projects, language } = this.$appData
      const projectIndex = projects.findIndex( project => project.url == this.$route.params.name[0])
      return {
        ...projects[projectIndex],
        projectIndex,
        projects,
        language,
      }
    },
    methods: {
      getContent(lang = 'en'){
        const content = [];
        const fieldsLength = Math.max(this.lang[lang].content?.length || 0, this.media?.length || 0);
        for(let i = 0; i <= fieldsLength - 1; i++){
          content.push({ header: this.lang?.[lang]?.content[i], name: this.name })
          content.push({ media: this.media?.[i], name: this.name })
        }
        return content
      },
      getPrevNext(lang){
        return [ 
          {
            ...this.projects[this.projectIndex - 1],
            languages: { pl: "Poprzedni", en: "Prev" }
          },
          {
            ...this.projects[this.projectIndex + 1],
            languages: { pl: "Następny", en: "Next" }
          },
        ]
      },
    },
  }
</script>

<style lang="scss">
  .details{
    position:relative;
    // margin-top:var(--navHeaderHeight);
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
    // margin-top: var(--navHeaderHeight);
    padding:1rem;
    width:100%;
    picture{
      align-items: center;
      display: flex;
      width:5rem;
      height:5rem;
      img{
        height:5rem;
        max-width: unset;
      }
    }
    .title{
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin:.5rem;
      p{
        //border:2px dashed red;
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
    //min-height:calc( 70vh - 275px );
    background-color: $backgroundColor;
    //border:2px dashed red;
    display:flex;
    flex-direction: column;
    //flex-wrap: wrap;
    

    //padding:.5rem 1rem; 
    padding:1rem;

    section{
      // text-align: left;
      // text-align: left;
      display:flex;
      align-items: center;
      flex-direction: column;
      margin:0 0 2rem 0;
      //margin:2rem 0;
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

    .prevNextWrapper{
      align-items: center;
      background:var(--dark-primary);
      display:flex;
      gap:1rem;
      margin-top:0 1rem;
      border:2px dashed blue;
      > div{
        flex:1;
        border:2px dashed red;

          

        > a{
          align-items: center;
          background:lighten($backgroundColor, 5%);
          border:.2rem solid var(--dark-primary);
          display:flex;
          flex-direction: column;    
          padding-bottom:1.5rem;
          position:relative;
          img{
            height:6rem;
            width:6rem;
          }
          p{
            padding:0 1rem;
            text-align: left;
            &:nth-child(1){
              font-size: 1.2rem;
              font-weight: bold;
              position:absolute;
              top:-2rem;
            }
          }
        }
        > p{
          flex:1;
          display:flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding:1rem;
          background-color: var(--dark-primary);
          color:$backgroundColor;
          a{
            line-height: 1.5rem;
            padding:.5rem;
          }
        }
      }
      @media(max-width: 510px){
        flex-direction: column;
        >div:nth-child(1){
          margin-bottom:2.5rem;
        }
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
        //max-width:50%;
        //padding-right: 10rem;
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
          //flex-direction: row-reverse;
          justify-content: flex-start;
        }  
        flex-direction: row;
        p{
          max-width:50%;
        }
        header{
          padding:2rem;
        }
      }
    }
  }
</style>