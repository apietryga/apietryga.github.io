<template>
  <div class="homeHeader">
    <header >
      <h1 v-html="$c.home.title"></h1>
      <p>{{ $c.home.description }}</p>
      <nuxt-link to="/projects" class="cta">{{ $c.home.cta }}</nuxt-link>
    </header>
    <div class="smth"> 
        <homeLogo3d class="logo" />
    </div>
  </div>
</template>

<style lang="scss">
.homeHeader{
  background: #000;
  color:#fff;
  width:100%;
  height:calc(100vh - 2.5rem);
  display:flex;
  align-items: center;
  justify-content: center;
  > header{
    position: relative;
    z-index:1;

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
    .cta{
      padding:.6rem 1.5rem;
      margin-top:.75rem;
      background: radial-gradient(circle at 70%, var(--primary-color), #14611a);
      border-radius:.5rem;
      font-size:1rem;
    }
  }
  .smth{
    flex:1;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    .logo{
      max-width: 100%;
    }
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
      width:100%;
    }
  }
}
</style>

<script> export default{} </script>