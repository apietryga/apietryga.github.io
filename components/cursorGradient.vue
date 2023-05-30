<template>
  <div class="blob" ref="blob"></div>
</template>

<script>
  export default{
    data(){
      return{ window: typeof window != 'undefined' ? window : null }
    },
    methods: {
      startTrackin(e){
        this.$refs.blob.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      }
    },
    mounted() {
      if(this.window){
        this.window.document.addEventListener('mousemove', this.startTrackin);
      }
    },
    unmounted(){
      if(this.window){
        this.window.document.removeEventListener('mousemove', this.startTrackin);
      }
    }
  }
</script>

<style scoped>
/* CURSOR GRADIENT */
.blob {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 650px;
  height: 650px;
  border-radius: 100%;
  background: repeating-linear-gradient(to right, #00DC82 0%, #1DE0B1 50%, #36E4DA 100%);
  filter: blur(250px);
  position: fixed;
  pointer-events: none;
  left: 0;
  top: 0;
  transform: translate(calc(-50% + 15px), -50%);
  z-index: -1;
}
</style>
