<template>
    <header class="topHeader">
    <div class="title">
      <h1>{{ lang[language].content[0] }}<b>{{ lang[language].content[1] }}</b></h1>
      <h2>{{ lang[language].content[2] }}</h2>
      <p>{{ lang[language].content[3] }}</p>
    </div>
    <div class="background"></div>
    <div class="photo sky"></div>
    <div class="photo mountains"></div>
    <!-- <div class="photo moon"></div> -->
    <homeRocket class="photo moon" />
    <div class="photo clouds"></div>
    <div class="mask photo"></div>

  </header>
</template>

<script>
  export default {
    data(){
      return{
        language: this.$appData.language,
        lang: this.$appData.index.lang,
      }
    },
    methods: {
      scrollingAnimation(){
        // copy pasted from old project
        document.addEventListener('scroll', e => {
          const vh = Math.round( (window.scrollY * 100)/window.innerHeight );
          if(vh < 100){
            // document.querySelectorAll(".topHeader >*").forEach(( e: any ) => {
            document.querySelectorAll(".topHeader >*").forEach(( e ) => {
              if(!e.classList.contains("background")){e.style.opacity = '1';}
              if(['next', 'mask photo'].includes(e.className)){
                return;
              }else if(e.classList.contains("mountains")){
                e.style.marginTop = (window.scrollY/2) + "px";return;
              }else if(e.classList.contains("moon")){
                e.style.marginTop = (window.scrollY*1.7) + "px";return;
              }else if(e.classList.contains("clouds")){
                e.style.marginTop = -(window.scrollY*2) + "px";return;
              }else if(e.classList.contains("title")){
                e.style.marginTop = (window.scrollY/1.8) + "px";return;
              }else if(e.classList.contains("background")){
                e.style.backgroundColor = 'rgba(0,0,0, '+((vh/2 + 70)/100)+')';return;
              }
            })
          }else{
            // document.querySelectorAll(".topHeader >*").forEach(( e: any ) => {
            document.querySelectorAll(".topHeader >*").forEach(( e ) => {
              if(!e.classList.contains("background")){ e.style.opacity = '0' }
            })

          }
        })
      },
    },
    created() {
      if(process.client){ this.scrollingAnimation() }
    },
    beforeUpdate () {
      if(process.client){ this.scrollingAnimation() }
    },
  }
</script>

<style lang="scss">
  .topHeader{
    align-items: center;
    color:$fontColor;
    // border:2px dashed red;
    display:flex;
    flex-direction: column;
    height:100vh;
    width:100vw;
    justify-content: center;
    position:relative;
    @keyframes fadeIn {
      from{opacity:0;}
      to{opacity:1;}
    }
    @keyframes fadeInDelay {
      0%{opacity:0;}
      50%{opacity:0;}      
      100%{opacity:1;}      
    }
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
    .mask{
      //background-color: $backgroundColor;
      background: var(--bright-primary);

      clip-path: polygon(50% 80%, 100% 0%, 100% 100%, 0 100%, 0 0);
      height:calc(10vh + 15px);
      bottom:-15px;
    }
    .background{
      z-index:-5;
      position:absolute;
      width:100%;
      height:100%;
      // background-color: rgb(0,0,0);
      background-color: rgba(0,0,0,.7);
      @keyframes fadeTo {
        from{background-color: rgb(0,0,0)}
        to{background-color: rgba(0,0,0,.7)}
      }
      animation: fadeTo 2s ease;
    }
    .sky{
      z-index:-5;
      background:linear-gradient(
        rgba(108, 161, 230, 0.644), 
        rgba(198, 215, 225, 0.589), 
        rgb(98, 134, 133), 
        transparent);
      //background:linear-gradient(rgba(2, 0, 15, 0.644), rgba(6, 1, 48, 0.589), rgba(14, 1, 22, 0.473), transparent);
      animation: fadeIn .5s ease;
    }
    .mountains{
      animation: fadeInDelay 1s ease;
      background-image: url("/img/frontPage/mountains.svg");
      height:50vh;
      top:50vh;
      z-index:-3;
      background-size:auto 100%;
      background-position: center;
      background-repeat: repeat;
    }
    .moon{
      animation: fadeIn 1s ease;
      //box-shadow: 0 0 15vh #b1b1b1;
      pointer-events: none;
      border-radius:50%;
      background: radial-gradient(#fff transparent, transparent, transparent);
      //background: radial-gradient(var(--bright-primary) transparent, transparent, transparent);
      //background-color:rgb(255, 255, 255);
      z-index:-4;
      // background-image: url("/img/frontPage/moon.webp");
      background-size:contain;
      height:20vh;
      width:20vh;
      top:15vh;
      left:30vw;
      background-position:bottom;
    }
    .clouds{
      @keyframes slide{
        0% { background-position: 150vh bottom; }
      }
      top:0;
      left:0;
      z-index:-2;
      height:75vh;

      -webkit-animation: slide 20s linear infinite; /* Safari 4+ */
      -moz-animation:    slide 20s linear infinite; /* Fx 5+ */
      -o-animation:      slide 20s linear infinite; /* Opera 12+ */
      animation:         slide 20s linear infinite; /* IE 10+ */

      background: url("/img/frontPage/clouds.webp") repeat 0 bottom;
      background-size: 150vh auto;
    }
    .title{
      animation: fadeInDelay 1.5s ease;
      display:flex;
      z-index:-1;
      top:10vh;
      flex-direction: column;
      justify-content: flex-end;
      color:#fff;
      height:50vh;
      padding:2rem;
      width:fit-content;
      position:absolute;    
      //text-shadow: 0 0 1rem #000;
      h1,h2,p{  
        margin:1em 0 1em 0; 
      }
      h1{
        margin:0;
        line-height: 1.7rem;
        font-size:3rem;
        b{
          display:block;
          font-weight: bolder;
        }
      }
      h2{
        margin-bottom: 0;
      }
      p{
        font-weight: bold;
        margin:0;
      }
    }
  }

  @media (min-width:768px){
    .topHeader{
      .title{
        left:10rem;
      }
      .moon{
        left:unset;
        top:-12vh;
        right:5rem;
        height:90vh;
        width:90vh;
  
      }
    }
  }
</style>