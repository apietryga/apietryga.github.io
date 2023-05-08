<template>
  <div class="carousel">

    <section class="slide" v-for="[index ,slide] of slides.entries()">
      {{ index }}
      <picture>
        <img 
          :src="'img/' + slide.img" 
          :alt="slide.name + ' logo'"
          height="50"
        >
      </picture>
      <article>
        <p>{{ slide.content }}</p>
      </article>
      <footer>
        <p>{{ slide.name }}</p>
      </footer>
    </section>

  </div>
</template>

<script>
  export default {
    props: { slides: { required: true, type: Array }},

  }
</script>

<style lang="scss">
  .carousel{
    border:2px dashed red;
    display:flex;
    justify-content: center;
    align-items: flex-start;
    .slide{
      border:2px dashed blue;
      display: flex;
      flex-direction: column;
      width:25%;
      picture{
        border:2px dashed yellow;
        height:3rem;
        img{
          border:2px dashed blue;
        }
      }
      article{
        padding:0 1rem;
      }
      footer{
        text-align: right;
      }
    }
  }
</style>