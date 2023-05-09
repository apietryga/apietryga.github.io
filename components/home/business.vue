<template>
  <article id="business">
    <header>
      <h2 class="heroText" v-html="$t('home.business.title')"></h2>
      <p>{{ $t('home.business.description') }}</p>
      <NuxtLink data-aos="fade-up" to="/projects" class="btn">
        {{ $t('home.business.cta') }}
      </NuxtLink>
    </header>

    <div class="content">
      <div class="bgImage"></div>

      {{ $p('uflash', 'name') }}

      <NuxtLink data-aos="fade-up" to="/projects/uflash" class="btn small">
        {{ $t('projects.cta') + " " + $p('uflash', 'name') }}
      </NuxtLink>
    </div>

    <footer>
      <div class="bgImage"></div>
      {{ $p('wellton', 'name') }}
      <NuxtLink data-aos="fade-up" to="/projects/wellton" class="btn small">
        {{ $t('projects.cta') + " " + $p('wellton', 'name') }}
      </NuxtLink>

      <!-- XD -->
    </footer>

  </article>
</template>

<script></script>

<style lang="scss">
.bgImage{
  width:100px;
        height:100px;
        border:2px dashed red;
        background-size: cover;
}

  #business{
    border:2px dashed red;
    display:flex;
    margin-left:1rem;
    >*{
      margin-right:1rem;
      border:3px solid var(--accent);
    }
    >header{
      // border:2px dashed blue;
      flex:2;
      aspect-ratio: 1 / 1;
    }
    .content{ 
      // border:2px dashed yellow;
      flex:1;
      .bgImage{
        background-image: url("@/img/contents/uflash_praca.webp");
        
      }
    }
    footer{
      .bgImage{
        background-image: url("@/img/contents/wellton_visualisation.webp");
     
      }
      // border:2px dashed green;
      flex:1;
    }
    // background: var(--bright-primary);
    // color:var(--dark-primary);
    // position:relative;
    // min-height:40vh;
    // padding:2rem;
    // padding-top:var(--navHeaderHeight);
    // margin-top:2rem;
    // display:flex;
    // flex-direction: column;
    // align-items: center;
    // h2{
    //   font-size:3rem;
    //   line-height: 1em;
    //   margin-top:2rem;
    //   text-align:center;
    // }
    // > p{
    //   padding:0 0 1rem 2rem;
    //   line-height:1.5rem;
    // }
    // section{
    //   padding:0 0 2rem 0;
    //   a{
    //     margin-top:0;
    //   }
    // }
  }
</style>