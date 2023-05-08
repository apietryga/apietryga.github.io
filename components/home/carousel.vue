<template>
  <div class="carousel">

    <section class="slide" v-for="slide of slides">

      {{ slide }}


    </section>


    CAROUSEL
  </div>
</template>

<script>
  export default {
    props: { slides: { required: true, type: Array }}
  }
</script>

<style lang="scss">
  .carousel{
    border:2px dashed red;
    display:flex;
    justify-content: center;
  }
</style>