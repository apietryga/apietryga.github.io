<template>
  <article id="business">
    <header data-aos="fade-right">
      <h2 class="heroText" v-html="$t('home.business.title')"></h2>
      <p>{{ $t('home.business.description') }}</p>
      <NuxtLink data-aos="fade-up" to="/projects?q=business" class="btn">
        {{ $t('home.business.cta') }}
      </NuxtLink>
    </header>

    <div class="content" data-aos="fade-right" :data-aos-delay="100">
      <div class="bgWrapper">
      </div>
      <div class="textWrapper">
        <picture class="overlay">
          <img :src="'/img/contents/' + $p('uflash', 'img')" 
            :alt="$p('uflash', 'name')"
            height="50"
            width="50"
          >
        </picture>
        <h3>{{ $p('uflash', 'name') }}</h3>
        <p>{{ $p('uflash', 'desc') }}</p>
        <NuxtLink data-aos="fade-up" to="/projects/uflash" class="btn small">
          {{ $t('home.projects.cta') + " " + $p('uflash', 'name') }}
        </NuxtLink>
      </div>
    </div>

    <footer data-aos="fade-right" :data-aos-delay="200">
      <div class="textWrapper">
        <picture class="overlay">
          <img :src="'/img/contents/' + $p('wellton', 'img')" 
            :alt="$p('wellton', 'name')"
            height="50"
            width="50"
          >
        </picture>
        <h3>{{ $p('wellton', 'name') }}</h3>
        <p>{{ $p('wellton', 'desc') }}</p>
        <NuxtLink data-aos="fade-up" to="/projects/wellton" class="btn small">
          {{ $t('home.projects.cta') + " " + $p('wellton', 'name') }}
        </NuxtLink>
      </div>
      <div class="bgWrapper">
        <div class="bgImage"></div>
      </div>
    </footer>

  </article>
</template>

<script></script>

<style lang="scss">
#business{
  display:flex;
  flex-wrap: wrap;
  margin:5vh 1rem;
  max-width: 60%;
  margin:auto;
  margin-bottom:5rem;
  >*{
    margin-right:1rem;
    margin-top:1rem;
    border:3px solid var(--accent);
    border-radius: 10px;
    background-color: #000;
    p{
      max-width: 50%;
    }
  }
  >header{
    flex:2;
    padding: 2rem;
    p{
      margin-bottom: 1.2rem;
    }
  }
  .bgWrapper{
    flex:1;
    display:flex;
    justify-content: flex-end;
    .bgImage{
      width:100%;
      height:100px;
      background-size: cover;
    }
  }
  .content{ 
    flex:1;
    display:flex;
    flex-direction: column;
    background-image: url("/img/contents/uflash_home.webp");
    background-size: auto 100% ;
    background-repeat: no-repeat;
    background-position: left;
    .textWrapper{
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
  }
  footer{
    flex:1;
    display:flex;
    flex-direction: column;
    background-image: url("/img/contents/wellton_visualisation.webp");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: bottom;
    .bgWrapper{
      align-items: flex-end;
    }    
  }
  
  .textWrapper{
    padding:1rem;
    h3, p{
      width:fit-content;
      background-color: rgba(0, 0, 0, 0.836);
      padding:0 .5rem;
    }
    p{
      line-height: 1rem;
      margin-bottom:.5rem !important;
    }
  }
}
@media (max-width:1060px){
  #business{
    flex-direction: column;
    .bgWrapper{
      position:absolute;
      inset:0;
    }
  }
}
</style>