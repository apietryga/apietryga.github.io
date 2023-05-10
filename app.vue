<template>
  <div>
    <seo :key="$route.fullPath" />
    <navHeader />
    <!-- <div class="blob" ref="blob"></div> -->
    <!-- <NuxtPage :key="$route.fullPath" /> -->
    <NuxtPage />
    <navFooter />
  </div>
</template>

<script>
// export default{
//   data(){
//     return{
//       window
//     }
//   },
//   mounted() {
    
//     // var cursor = this.window.document.querySelector('.blob');
//     var cursor = this.$refs.blob
    
//     // document.addEventListener('mousemove', function(e){
//     this.window.document.addEventListener('mousemove', function(e){
//       var x = e.clientX;
//       var y = e.clientY;
//       // cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
//     });
//   },
// }
</script>

<style>
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