
<template>
  <div class="homeHeader">
    <div class="photo moon"></div>
  </div>
  <div class="moon"></div>
</template>

<style lang="scss">
  .homeHeader{
    border:2px dashed red;
    min-height:100vh;
    background:#1D0E1D;
    background: radial-gradient(ellipse at top, #1D0E1D, #192230),
            radial-gradient(ellipse at bottom, #143D50, #152736);
    position:relative;
    .photo{
      width:100%;
      height:100%;
      background-repeat: no-repeat;
      position:absolute;
      background-size:cover;
      -webkit-transition: .01s;
      -moz-transition: .01s;
      -ms-transition: .01s;
      -o-transition: .01s;
      transition: .01s;
    }  
    .moon{
      $moonSize: 50vh;
      animation: fadeIn 1s ease;
      border-radius:50%;
      background: linear-gradient(red, blue);
      background-image: url("/img/frontPage/moon.webp");
      background-size:contain;
      height:$moonSize;
      left:calc(( 100vw - $moonSize ) / 2);
      top:30vh;
      mask-image: radial-gradient(circle at left top, #fff 20%, transparent 85%);
      width:$moonSize;
      &::after{
        background: radial-gradient(circle at left top, #34D7D6 20%, red, #122B3C 85%);
        border-radius:50%;
        content:"";
        height:100%;
        opacity:.6;
        position:absolute;
        width:100%;
      }
    }
  }
</style>

