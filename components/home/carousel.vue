<template>
  <div class="carousel" ref="carousel" @mouseover="isPaused=true" @mouseleave="isPaused=false">

    <section class="slide" v-for="[index ,slide] of slides.entries()">
      <!-- {{ index }} -->
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
    data(){
      return{
        window,
        isIntervaled: false,
        isPaused: false,
      }
    },
    methods: {
      animationStart(){
        this.isIntervaled = true
        this.animation = setInterval(() => {
          if(this.isPaused){ return }
          const style = this.$refs.carousel.children[0].currentStyle || this.window.getComputedStyle(this.$refs.carousel.children[0]);
          let w = this.$refs.carousel.children[0].offsetWidth
              w += style.marginRight.replace("px", "") * 1 
              w += style.marginLeft.replace("px", "") * 1
          // this.$refs.carousel.scrollBy({ left: this.speed, behavior: 'smooth' })
          this.$refs.carousel.scrollBy({ left: w + 1, behavior: 'smooth' })
          if(this.$refs.carousel.scrollLeft > w ){
            this.$refs.carousel.scrollLeft = 0
            this.$refs.carousel.append(this.$refs.carousel.children[0])
          }
        }, 1000)
      } 
    },
    mounted() {
      if(!this.isIntervaled){ this.animationStart() }
    },
    unmounted() {
      if(this.isIntervaled){ clearInterval(this.animation) }
    },
  }
</script>

<style lang="scss">
  .carousel{
    border:2px dashed red;
    display:flex;
    justify-content:start;
    align-items: flex-start;
    overflow-x: hidden;
    transition: .5s;
    .slide{
      border:2px dashed blue;
      display: flex;
      flex-direction: column;
      min-width:25%;
      margin:0 2.5vw;
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