<template>
  <div>
    <seo :key="$route.fullPath" />
    <navHeader />
    <div class="blob" ref="blob"></div>
    <!-- <NuxtPage :key="$route.fullPath" /> -->
    <NuxtPage />
    <navFooter />
  </div>
</template>

<script>
export default{
  data(){
    return{ window }
  },
  methods: {
    startTrackin(e){
      // console.log({ e, c: this.$refs.blob })
      // const x = e.clientX;
      // const y = e.clientY;
      // console.log()
      // cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      this.$refs.blob.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    }
  },
  mounted() {
    
//     // var cursor = this.window.document.querySelector('.blob');
//     var cursor = this.$refs.blob
    
//     // document.addEventListener('mousemove', function(e){
    this.window.document.addEventListener('mousemove', this.startTrackin);
  },
  unmounted(){
    this.window.document.removeEventListener('mousemove', this.startTrackin);

  }
}
</script>

<style>
/* CURSOR GRADIENT */
.blob {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 650px;
  border-radius: 100%;
  /* background-image: linear-gradient(#1100ff 10%, #ff00f2); */
  background-image: linear-gradient(var(--accent) 10%, var(--primary-color));
  filter: blur(250px);
  /* transition: all 450ms ease-out; */
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: translate(calc(-50% + 15px), -50%);
  z-index: 0;
}



/* ANIMATION */
.page-enter-active,
.page-leave-active{
  transition: 0.3s;
  -webkit-transition: 0.3s;
}
/* .page-enter-from{
  transform: translateX(100%);
} */
.page-leave-to{
  transform: translateX(-100%);
  -webkit-transform:translateX(-100%);
}
</style>