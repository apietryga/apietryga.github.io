<template>
  <div class="homeHeader">
    <header>
      <h1 data-aos="fade-up">{{ $t('author') }}</h1>
      <p data-aos="fade-up" data-aos-delay="100" class="heroText" v-html="$t('home.title')"></p>
      <p data-aos="fade-up" data-aos-delay="200" class="description" v-html="$t('home.description')"></p>
      <nuxt-link 
        data-aos-disable="false"
        data-aos="fade-up" data-aos-delay="300" to="/projects" class="btn">{{ $t('home.cta') }}</nuxt-link>
    </header>
    <div class="smth" data-aos="zoom-in"> 
      <homeLogo3d class="logo" />
    </div>
  </div>
</template>

<style>
/* 
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
} */
</style>

<style lang="scss">
.homeHeader{
  align-items: center;
  background: #000;
  color:#fff;
  display:flex;
  justify-content: center;
  width:100%;
  > header{
    align-items: flex-end;
    display:flex;
    flex:2;
    flex-direction: column;
    padding: 30vh 0;
    min-height: 20vh;
    position: relative;
    text-align: right;
    z-index:1;
    h1{
      margin:0;
      font-size:1rem;
    }
    // .heroText{
    //   font-size: 2rem;
    //   font-weight: 100;
    //   line-height: 100%;
    //   b{
    //     line-height: 100%;
    //     font-size: 2.5rem;
    //     color:var(--accent);
    //     font-weight:900;
    //   }
    // }
    p{
      padding-left:2rem;
      max-width: 1000px;
    }
    // .cta{
    //   padding:.6rem 1.5rem;
    //   margin-top:.75rem;
    //   background: var(--accent);
    //   color:var(--dark-primary);
    //   border-radius:.5rem;
    //   font-size:.8rem;
    //   font-weight: 900;
    //   text-transform: uppercase;
    // }
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
    height:calc(100vh - 2.5rem);
    >header{
      display:flex;
      flex-direction: column;
      justify-content: center;
      padding:2rem;
      .heroText{
        padding:0;
        font-size: 1rem;
        b{
          font-size: 2rem;
        }
      }
      .cta{
        opacity: 1;
        transform: translateZ(0);
      }
    }
    .smth{
      flex:2;
      width:100%;
    }
  }
}
</style>

<script> 
export default{
  data(){
    return{ window }
  }
} 
</script>