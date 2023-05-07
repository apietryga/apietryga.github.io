<template>
  <article id="business">
    <header>
      <h2 class="heroText" v-html="$t('home.business.title')"></h2>
      <p>{{ $t('home.business.description') }}</p>
      <NuxtLink data-aos="fade-up" to="/projects" class="btn">
        {{ $t('home.code.cta') }}
      </NuxtLink>
    </header>

    <!-- <div class="photo me"></div> -->
    <!-- <h2>{{ lang[language].content[12] }}</h2>
    <p>{{ lang[language].content[13] }}</p> -->
    <!-- <section class="card__wrapper"> -->
      <!-- <NuxtLink 
        v-for="element in getProjectsByNames(recomended.business)" 
        :to="'/projects/' + element.url" :key="element"
        class="card"
      >
        <header class="card__header">
          <h3>{{element.name}}</h3>
          <p>{{element.lang[language].desc}}</p>
        </header>
        <picture class="card__picture">
          <img :src="'/img/contents/' + element.img" :alt="element.name" height="50" width="50">
        </picture>
      </NuxtLink> -->
      <!-- <div></div> -->
    <!-- </section> -->
    <!-- <footer> -->
      <!-- <NuxtLink :to="'/projects?q=' + lang[language].content[15]">{{ lang[language].content[14] }}</NuxtLink> -->
      <!-- <NuxtLink :to="'/projects?q=' + lang[language].content[15]">{{ lang[language].content[14] }}</NuxtLink> -->
    <!-- </footer>   -->
  </article>
</template>

<script></script>

<style lang="scss">
  #business{
    border:2px dashed red;
    >header{
      border:2px dashed blue;
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