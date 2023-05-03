<template>
  <div class="homeHeader">
    <header >
      <h1>{{ $c.author }}</h1>
      <p class="heroText" v-html="$c.home.title"></p>
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
      margin:0;
      font-size:.8rem;
    }
    .heroText{
      // font-size: clamp(2rem, 10vw, 10rem);
      // font-size: clamp(2rem, 4vw, 10rem);
      // font-size: 2.5rem;
      font-size: 2rem;
      // line-height: 70%;
      font-weight: 100;
      // line-height: 2.5rem;
      line-height: 100%;
      // padding:2vw 0;
      b{
        line-height: 100%;
        font-size: 2.5rem;
        color:var(--accent);
        font-weight:900;
      }
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
      .heroText{
        // bor
        padding:0;
        font-size: 1rem;
        b{
          font-size: 2rem;
        }
      }

    }
    .smth{
      flex:2;
      width:100%;
    }
  }
}
</style>

<script> export default{} </script>