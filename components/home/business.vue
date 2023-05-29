<template>
  <article id="business">
    <header data-aos="fade-right">
      <h2 class="heroText" v-html="$t('home.business.title')"></h2>
      <p>{{ $t('home.business.description') }}</p>
      <NuxtLink data-aos="fade-up" to="/projects" class="btn">
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
          {{ $t('projects.cta') + " " + $p('uflash', 'name') }}
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
          {{ $t('projects.cta') + " " + $p('wellton', 'name') }}
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
.textWrapper{
  padding:1rem;
  p{
    line-height: 1rem;
    margin-bottom:.5rem !important;
  }
}
#business{
  display:flex;
  margin-left:1rem;
  margin:30vh 1rem;
  >*{
    margin-right:1rem;
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
  .content{ 
    flex:1;
    display:flex;
    flex-direction: column;
    background-image: url("/img/contents/uflash_praca.webp");
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: top;
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
}
</style>