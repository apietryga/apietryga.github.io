<template>
  <div class="carousel" ref="carousel" >

    <section class="slide" v-for="[index, slide] of slides.entries()" 
      @mouseover="isPaused=true" @mouseleave="isPaused=false"
      data-aos="fade-left"
      :data-aos-delay="100*index"
    >
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
        <NuxtLink :to="slide.source" target="_blank" class="btn small">
          {{ $t('home.teaching.reviews.cta') }}
        </NuxtLink>
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
          if(!this.$refs?.carousel?.children[0]){ return }
          const style = this.window.getComputedStyle(this.$refs.carousel.children[0]);
          let w = this.$refs.carousel.children[0].offsetWidth
              w += style.marginRight.replace("px", "") * 1 
              w += style.marginLeft.replace("px", "") * 1
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
    align-items: stretch;
    display:flex;
    justify-content:flex-start;
    overflow: hidden;
    transition: .5s;
    margin:3rem 0;
    .slide{
/* From https://css.glass */
background: rgba(0, 0, 0, 0.47);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(8.5px);
-webkit-backdrop-filter: blur(8.5px);
      
      // background: red;
      border:3px solid var(--accent);
      // box-shadow: 2px 2px 2px var(--accent);
      // box-shadow: 2px 2px 2px #fff;
      border-radius:10px;
      display: flex;
      flex-direction: column;
      min-width:25%;
      margin:0 2.5vw;
      picture{
        height:3rem;
      }
      article{
        padding:0 1rem;
      }
      footer{
        align-items: flex-end;
        display:flex;
        flex:1;
        justify-content: center;
        padding-bottom:1rem;
      }
    }
  }
</style>