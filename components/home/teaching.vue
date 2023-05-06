<template>
  <article id="teaching">

    <header>
      <h2 class="heroText" data-aos="fade-up" v-html="$t('home.teaching.title')"></h2>
      <p data-aos="fade-up">{{ $t('home.teaching.description') }}</p>  
      <NuxtLink data-aos="fade-up" to="/projects" class="btn">{{ $t('home.teaching.cta') }}</NuxtLink>
    </header>

    <div class="wrapper">
      <div v-for="[index, project] in ['praktykody', 'kurs-front-end','slaska-akademia-seniora'].entries()"
        :data-aos-delay="100*index"
        data-aos="fade-right"
      >
        <picture>
          <img :src="'/img/contents/' + $p(project, 'img')" 
            :alt="'Antoni Pietryga portfolio ' + $p(project, 'name') + ' logo'"
            width="100"
            height="100"
          >
        </picture>
        <header>
          <h3>{{ $p(project, 'name') }}</h3>
          <p>{{ $p(project, 'desc') }}</p>
        </header>
      </div>

      <!-- <div class="ctaWrapper"> -->
      <!-- <NuxtLink to="/projects" class="btn">{{ $t('home.teaching.cta') }}</NuxtLink> -->
      <!-- </div> -->
      <!-- <div class="reviews">
        <div>el 1</div>
        <div>el 2</div>
      </div> -->
    </div>
    <!-- <div class="content">
      <p>{{lang[language].content[10]}}</p>
      <section class="card__wrapper">
        <NuxtLink 
          v-for="element in getProjectsByNames(recomended.teaching)" 
          :to="'/projects/' + element.url" :key="element"
          class="card"
        >
          <header class="card__header">
            <h3>{{ element.name }}</h3>
            <p>{{ element.lang[language].desc }}</p>
          </header>
          <picture class="card__picture">
            <img :src="'/img/contents/' + element.img" :alt="element.name" height="50" width="50">
          </picture>
        </NuxtLink>
        <div></div>
      </section>
      <footer>
        <NuxtLink to="/projects">{{ lang[language].content[11] }}</NuxtLink>
      </footer>  
    </div> -->
  </article>
</template>

<script></script>

<style lang="scss">
 #teaching{
  border:2px dashed red;
  // display:flex;
  padding: 0 2rem;

  >header{
    // border:2px dashed blue;
    // margin:2rem 0;
    margin:2rem 0 4rem 0;
    p{
      margin-bottom: 2rem;
    }
  }

  .wrapper{
    // border:2px dashed yellow;

    >div{
      // border:2px dashed blue;
      display:flex;
      margin:2rem 0;
      &:nth-child(odd){
        padding-left: 100px;
      }
      > header{
        // border:2px dashed red;
        // line-height: 1rem;
        display: flex;
        // place-items: center;
        // align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-left: 2rem;
      }

    }
    // .reviews{
    //   border:2px dashed blue;
    // }
  }

  // picture{
  //   border:2px dashed green;
  //   img{
  //     border:2px dashed red;
  //     width:200px;
  //     height:200px;
  //   }
  // }

}
</style>