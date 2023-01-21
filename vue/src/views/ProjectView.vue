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
</template>

<script>
  import { useDataStore } from '@/stores'
  export default {
    data(){
      const { projects, language } = useDataStore()
      const el = {
        ...projects.filter( project => project.name.toLowerCase() == this.$route.name.toLowerCase() )[0], 
        language
      }
      console.log(el)
      return el
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
    },
    mounted(){
      console.log('_______________________________________')
      console.log('this: ', this)
      // console.log('getContent: ', this.getContent())
      // console.log('_______________________________________')
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