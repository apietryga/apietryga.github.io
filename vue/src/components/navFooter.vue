<template>
  <footer>
    <nav>
      <p>
        <a href="/">
          <span>{{pageBuild[language].nav.home}}</span>
        </a>
        <a href="/projects">
          <span>{{pageBuild[language].nav.projects}}</span>
        </a>
        <a href="/exps">
          <span>{{pageBuild[language].nav.exps}}</span>
        </a>
        <a href="/contact.html">
          <span>{{pageBuild[language].nav.contact}}</span> 
        </a>
        <a href="/img/cvs/2022_03_CV_{{language}}.pdf" target="_blank">
          Curriculum Vitae
        </a>
      </p>
    </nav>
    <p>
      Created by apietryga 2022.
    </p>          
  </footer>
</template>

<script lang="ts">
  import { useDataStore } from '@/stores'
  export default {
    data(){
      return useDataStore()
    },
  }
</script>

<style lang="scss" scoped>
footer{
  display:flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  min-height:$footerHeight;
  background-color: invert($backgroundColor);
  color:invert($fontColor);
  width:100%;
  padding:1rem .5rem .5rem 1rem;
  position:absolute;
  nav{
    display:grid;
    flex:1;
    height:100%;
    grid-template-columns: 1fr 1fr 1fr;
    width:100%;
    p{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      a{
        padding:5px;
        font-size:.7em;
      }  
    }

  }
}
</style>