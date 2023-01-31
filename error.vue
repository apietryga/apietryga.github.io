<template>
  <navHeader />
  <main class='div404'>
    <h2>404</h2>
    <p v-html="lang[language].desc"></p>
  </main>
  <navFooter />
</template>

<script>
  export default {
    data(){
      const { p404, language } = this.$appData
      return { ...p404, language }
    },
  }
</script>

<style lang="scss">
  .div404{
    margin-top:$navHeaderHeight;
    min-height: calc(70vh - 3rem);
    background-image: url("/img/meta/404.webp");
    background-size: cover;
    background-position: bottom;
    display:flex;
    color:#fff;
    font-size:1.2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h2,p{
      background-color:rgb(3, 3, 3);
      padding:.5rem 2rem;
    }
    h2{
      border-radius:2rem 2rem 0 0;
    }
    p{
      border-radius:2rem;
     
    }
    a{
      display:inline;
    }
    img{
      max-height: 100%;
      position:absolute;
    }
  }
</style>


