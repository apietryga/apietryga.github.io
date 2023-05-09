<template>
  <div class="carousel" ref="carousel">

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
    data(){
      return{
        isIntervaled: false,
      }
    },
    methods: {
      animationStart(){
        this.isIntervaled = true
        this.animation = setInterval(() => {
          this.$refs.carousel.scrollLeft += 5

          // console.log(this.$refs.carousel.scrollLeft)
          // if(this.$refs.carousel.scrollLeft > 100){
          if(this.$refs.carousel.scrollLeft > this.$refs.carousel.children[0].offsetWidth ){
            this.$refs.carousel.scrollLeft = 0
            // this.$refs.carousel.append(this.$refs.carousel.children[0])
          }

        }, 25)
      } 
    },
    mounted() {
      if(!this.isIntervaled){ this.animationStart() }
      // console.log(this.$refs.carousel.children)
      // console.log(this.$refs.carousel.scrollLeft = 10)
      // this.$refs.carousel.children[0].style.display = 'flex'
      // this.$refs.carousel.children[2].style.display = 'flex'
      // this.$refs.carousel.children[3].style.display = 'flex'
      console.log({s: this.$refs.carousel.children[0]})
      console.log('ee')      
      
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
    // justify-content: center;
    justify-content:start;
    align-items: flex-start;
    overflow-x: scroll;
    .slide{
      border:2px dashed blue;
      display: flex;
      // display: none;
      flex-direction: column;
      min-width:25%;
      // margin-right: 5vw;
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