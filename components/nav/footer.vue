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
        <NuxtLink :to="'/cvs/2023_03_CV_en.pdf'" target="_blank">
          Curriculum Vitae
        </NuxtLink>
      </p>
      <div class="cp">
        <p>&copy; apietryga 2023</p>
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
  align-items: flex-end;
  background:var(--dark-primary);
  color: var(--font-primary-color);
  display:flex;
  flex-direction: column;
  justify-content: flex-end;
  padding:.5rem;
  position:relative;
  bottom:0;
  width:100%;
  nav{
    display:grid;
    height:100%;
    justify-content: flex-end;
    grid-template-columns: 1fr 1fr;
    width:100%;
    font-family: var(--font-secondary);
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
        // padding:.25rem 0;
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