<template>
  <div class="homeHeader">
    <header>
      <h1 v-html="$c.home.title"></h1>
      <p>{{ $c.home.description }}</p>
    </header>
    <div class="smth"> SMTH </div>
  </div>
</template>


<style lang="scss">
.homeHeader{
  background: #000;
  color:#fff;
  text-shadow: 0 0 2px #fff;
  width:100%;
  height:calc(100vh - 2.5rem);
  display:flex;
  align-items: center;
  justify-content: center;
  border:2px dashed blue;
  > header{
    flex:2;
    border:2px dashed red;
    text-align: right;
    h1{
      border:2px dashed yellow;
      font-size: clamp(2rem, 10vw, 10rem);
      line-height: 70%;
      // padding:1.5rem 0;
      padding:2vw 0;
    }
  }
  .smth{
    flex:1;
    border:2px dashed green;
  }
}
</style>

<script>
export default{
  // data(){
  //   return{ 
  //     language: this.$appData.language,
  //     lang: this.$appData.index.lang,
  //   }
  // },
  // mounted() {
  //   console.log(this)
  // },
}
</script>