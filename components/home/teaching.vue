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
          <NuxtLink :to="'/projects/' + $p(project, 'url')" class="btn small">
            {{ $t('projects.cta') + " " + $p(project, 'name') }}
          </NuxtLink>
        </header>
      </div>

    </div>
  </article>
</template>

<script></script>

<style lang="scss">
 #teaching{
  padding: 0 2rem;
  >header{
    margin:2rem 0 4rem 0;
    p{
      margin-bottom: 2rem;
    }
  }
  .wrapper{
    >div{
      display:flex;
      margin:2rem 0;
      &:nth-child(odd){
        padding-left: 100px;
      }
      > header{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-left: 2rem;
      }
    }
  }
}
</style>