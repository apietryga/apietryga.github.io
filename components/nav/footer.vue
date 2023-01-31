<template>
  <footer>
    <nav>
      <p>
        <NuxtLink to="/">
          <span>{{ pageBuild[language].nav.home }}</span>
        </NuxtLink>
        <NuxtLink to="/projects">
          <span>{{ pageBuild[language].nav.projects }}</span>
        </NuxtLink>
        <NuxtLink to="/contact">
          <span>{{ pageBuild[language].nav.contact }}</span> 
        </NuxtLink>
        <!-- TODO: NOWE CV !!! -->
        <NuxtLink :to="'/img/cvs/2022_03_CV_' + language + '.pdf'" target="_blank">
          Curriculum Vitae
        </NuxtLink>
      </p>
      <div class="cp">
        <p>&copy; apietryga 2022.</p>
      </div>
    </nav>
  </footer>
</template>

<script>
  export default {
    data(){
      return this.$appData
    },
  }
</script>

<style lang="scss" scoped>
footer{
  display:flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  background-color: invert($backgroundColor);
  color:invert($fontColor);
  width:100%;
  padding:1rem .5rem .5rem 1rem;
  position:absolute;
  nav{
    display:grid;
    height:100%;
    justify-content: flex-end;
    grid-template-columns: 1fr 1fr;
    width:100%;
    p{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      padding:1rem;
      font-size:1rem;
      &:nth-child(2){
        align-items: flex-end;
        justify-content: flex-end;
      }
      a{
        font-size:inherit;
        padding:.45rem 0;
      }
    }
    .cp{
      display:flex;
      justify-content:flex-end;
      align-items:flex-end;
    }

  }
}
</style>