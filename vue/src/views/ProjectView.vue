<template>
  <div class="details">
    <div class="background" style="background-color:{{color}}"></div>
    <div class="mainImg">
      <img :src="'/img/contents/' + img" :alt="title">
    </div>
  </div>
  <main class="content">
    <h1>{{ name }}</h1>
    <h2>{{ lang[language].desc }}</h2>
    <section v-for="section in getContent()">
      <p v-if="section.header" v-html="section.header"></p>
      <media v-else :props="section" />
    </section>
    <div class="prevNextWrapper">
      <div class="prev"> {{ prev }} </div>
      <div class="next"> {{ next }} </div>
    </div>
  </main>
  <div class="prevNextWrapper">
    <div v-for="butt of getPrevNext()">
      <RouterLink v-if="butt?.name" :to="'/projects/' + butt.url">
        <p>{{ butt.languages[language] }}</p>
        <h4>{{ butt.name }}</h4>
        <img :src="'/img/contents/' + butt.img" :alt="butt.name +' Logo'" />
        <p>{{ butt.lang[language].desc }}</p>
        <p>
          <RouterLink :to="'/search?q=' + tag" 
            v-for="tag in butt.lang?.[language].category"> #{{ tag }} 
          </RouterLink>
        </p>
      </RouterLink>
    </div>
  </div>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import { useDataStore } from '@/stores'
  export default {
    data(){
      const { projects, language } = useDataStore()
      const projectIndex = projects.findIndex( project => project.name.toLowerCase() == this.$route.name.toLowerCase())
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
          content.push({ header: this.lang?.[lang]?.content[i] })
          content.push({ media: this.media?.[i] })
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
    margin-top:$navHeaderHeight;
    min-height:30vh;
    .background{
      position:absolute;
      width:100%;
      height:100%;
      z-index:-1;
    }
    .mainImg{
      min-height:30vh;
      background-position:center;
      height:100%;
      width:100%;
      display:flex;
      justify-content: center;
      align-items: center;
      img{
        width:250px;
        height:250px;
      }  
    }
  }
  main.content{ // content in details
    min-height:calc( 70vh - 275px );
    background-color: $backgroundColor;
    padding:2rem; 
    h1{
      line-height: 2.5rem;
      font-size:3rem;
    }
    h2{
      line-height: 1.8rem;
    }
    section{
      text-align: left;
      display:flex;
      flex-direction: column;
      margin:2rem 0;
      header,article{
        flex:1;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img,iframe{
          max-width: 100%;
        }
      }
      header{
        padding:1.5rem 0;
      }
    }

    .prevNextWrapper{
      margin-top:5rem;
      display:flex;
      gap:1rem;
      >div{
        flex:1;
        display:flex;
        flex-direction: column;
        >a{
          border:.2rem solid $darkColor;
          // border:2px dashed red;
          background:lighten($backgroundColor, 5%);
          display:flex;
          flex-direction: column;
          align-items: center;
          position:relative;
          padding-bottom:1.5rem;
          h4{
            margin-bottom:0;
          }
          img{
            width:6rem;
            height:6rem;
          }
          p{
            text-align: center;
            padding:0 1rem;
            &:nth-child(1){
              font-size: 1.2rem;
              position:absolute;
              top:-2rem;
              font-weight: bold;
            }
          }
        }
        >p{
          flex:1;
          display:flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding:1rem;
          background-color: $darkColor;
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
      h2{
        margin-bottom:2rem
      }
      section{
        &:nth-child(even){
          flex-direction: row-reverse;
        }  
        flex-direction: row;
        header{
          padding:2rem;
        }
      }
    }
  }
</style>