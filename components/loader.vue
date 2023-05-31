<template>
  <div class="preloader">
    <div class="loader">
      <div class="inLoader">
        
        <svg width="143.01mm" height="143.01mm" version="1.1" viewBox="0 0 143.01 143.01" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-27.954 -21.108)">
            <path fill="var(--dark)" d="m75.343 24.916-39.224 91.826 2.1751 2.7683 3.4313-7.3861h45.878l21.229 48.123 20.17-6.7231zm-10.321 32.275 21.534 51.457h-43.277z"/>
            <circle stroke="var(--dark)" fill="none" cx="99.457" cy="92.611" r="69.003" stroke-linecap="round" stroke-linejoin="round" stroke-width="5"/>
          </g>
        </svg>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
.preloader{
  position:fixed;
  width:100%;
  height:100%;
  display:flex;
  z-index:10;
  background: var(--dark);
  display:flex;
  justify-content: center;
  align-items: center;
  transition:.2s;
  .loader{
    &::before{
      content:"";
      position: absolute;
      // top:30vw;
      top:calc(60vh - 30vw);
      left:30vw;
      background: repeating-linear-gradient(to right, #00DC82 0%, #1DE0B1 50%, #36E4DA 100%);
      border-radius: 100%;
      width:40vw;
      height:40vw;
      filter: blur(15vw);
    }
    .inLoader{
      -webkit-animation: rotating 2s linear infinite;
      -moz-animation: rotating 2s linear infinite;
      -ms-animation: rotating 2s linear infinite;
      -o-animation: rotating 2s linear infinite;
      animation: rotating 2s linear infinite;
      svg{
        width:20vw;
        height:20vw;
      }
    }
  }

}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>