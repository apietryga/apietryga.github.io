<template>
  <div class="homeHeader">
    <!-- <header ref="observer_1"> -->
    <!-- <header v-intersection-observer="()=>{ console.log('ee!') }"> -->
    <header >
      <h1 v-html="$c.home.title"></h1>
      <p>{{ $c.home.description }}</p>
    </header>
    <div class="smth"> 
      <!-- SMTH  -->
    </div>
  </div>
</template>


<style lang="scss">
.homeHeader{
  background: #000;
  color:#fff;
  // text-shadow: 0 0 2px #fff;
  width:100%;
  height:calc(100vh - 2.5rem);
  display:flex;
  align-items: center;
  justify-content: center;
  > header{
    flex:2;
    text-align: right;
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    h1{
      font-size: clamp(2rem, 10vw, 10rem);
      line-height: 70%;
      padding:2vw 0;
    }
    p{
      padding-left:2rem;
      max-width: 1000px;
    }
  }
  .smth{
    flex:1;
    // border:2px dashed green;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
}
@media(max-width: 768px){
  .homeHeader{
    flex-direction: column-reverse;
    >header{
      display:flex;
      flex-direction: column;
      justify-content: center;
      padding:2rem;
    }
    .smth{
      flex:2;
    }
  }
}
</style>



<script>

// co


export default{
  // setup() {
  //   const target = ref(null)
  //   const targetIsVisible = ref(false)

  //   const { stop } = useIntersectionObserver(
  //     target,
  //     ([{ isIntersecting }], observerElement) => {
  //       targetIsVisible.value = isIntersecting
  //     },
  //   )

  //   return {
  //     target,
  //     targetIsVisible,
  //   }
  // }
  // data(){
  //   return{ 
  //     // language: this.$appData.language,
  //     // lang: this.$appData.index.lang,
  //   //   observer : new IntersectionObserver( entries => {
  //   //     entries.forEach( entry => {
  //   //       console.log({ entry })
  //   //       if(entry.isIntersecting){
  //   //         entry.target.classList.add('show')
  //   //       }else{
  //   //         entry.target.classList.add('show')
  //   //       }
  //   //     })
  //   //   })
  //   // }
  //  },
  // }
  // mounted() {
  //   // console.log(this.$refs)
  //   Object.keys(this.$refs).forEach(k => {
  //     if(k.includes('observer')){
  //       // console.log({ k })
  //       this.observer.observe(this.$refs[k])
  //     }
  //     // console.log({ r })
  //   })
  // },
}
</script>