<template>
  <navHeader />
  <main class='div404'>
    <h2>404</h2>
    <p v-html="$t('error.desc')"></p>
  </main>
  <navFooter />
</template>

<script></script>

<style lang="scss">
  .div404{
    min-height: calc( 100vh - var(--navHeaderHeight) - var(--navfooterHeight));
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
    > * {
      background-color:rgb(3, 3, 3);
      padding:.5rem 2rem;
    }
    h2{
      border-radius:2rem 2rem 0 0;
    }
    p{
      border-radius:2rem;
    }
  }
</style>


