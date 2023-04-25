<template>
  <div class="homeHeader">
    <header>
      <h1> {{  $c.home.title }} </h1>
      <h1> {{  $c.home.name }} </h1>
      <p>{{ $c.home.description }}</p>
    </header>
    <div class="smth"> SMTH </div>
    <!-- 
    <h1>{{ lang[language].content[0] }}
      <b>{{ lang[language].content[1] }}</b>
    </h1>
    <h2>{{ lang[language].content[2] }}</h2>
    <p>{{ lang[language].content[3] }}</p>
    -->
  </div>
</template>


<style lang="scss">
.homeHeader{
  // border:2px dashed red;
  width:100%;
  height:calc(100vh - 2.5rem);
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