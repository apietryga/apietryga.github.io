<template>
  <footer>
    <nav>
      <p>
        <RouterLink to="/">
          <span>{{ pageBuild[language].nav.home }}</span>
        </RouterLink>
        <RouterLink to="/projects">
          <span>{{ pageBuild[language].nav.projects }}</span>
        </RouterLink>
        <RouterLink to="/contact">
          <span>{{ pageBuild[language].nav.contact }}</span> 
        </RouterLink>
        <!-- TODO: NOWE CV !!! -->
        <RouterLink :to="'/img/cvs/2022_03_CV_' + language + '.pdf'" target="_blank">
          Curriculum Vitae
        </RouterLink>
      </p>
    </nav>
    <p>
      Created by apietryga 2022.
    </p>          
  </footer>
</template>

<!-- <script lang="ts"> -->
<script>
  import { useDataStore } from '@/stores'
  import { RouterLink } from 'vue-router'
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