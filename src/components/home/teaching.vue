<template>
  <div>
    <article id="teaching">
  
      <header>
        <h2 class="heroText" data-aos="fade-up" v-html="$t('home.teaching.title')"></h2>
        <p data-aos="fade-up">{{ $t('home.teaching.description') }}</p>  
        <NuxtLink data-aos="fade-up" to="/projects?q=tech" class="btn">{{ $t('home.teaching.cta') }}</NuxtLink>
      </header>
  
      <div class="wrapper">
        <div v-for="[index, project] in ['praktykody', 'kurs-front-end','slaska-akademia-seniora'].entries()"
          :data-aos-delay="100*index"
          data-aos="fade-right"
        >
          <picture class="overlay">
            <img :src="'/img/contents/' + $p(project, 'img')" 
              :alt="'Antoni Pietryga portfolio ' + $p(project, 'name') + ' logo'"
              width="50"
              height="50"
            >
          </picture>
          <header>
            <h3>{{ $p(project, 'name') }}</h3>
            <p>{{ $p(project, 'desc') }}</p>
            <NuxtLink :to="'/projects/' + $p(project, 'url')" class="btn small">
              {{ $t('home.projects.cta') + " " + $p(project, 'name') }}
            </NuxtLink>
          </header>
        </div>
  
      </div>
  
      
    </article>
    
    <!-- <homeCarousel :slides="$t('home.teaching.reviews.list')" /> -->

</div>
</template>

<script></script>

<style lang="scss">
#teaching{
  padding: 0 2rem;
  max-width: 60%;
  margin:auto;
  margin-bottom:30vh;
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
@media (max-width:768px){
  #teaching {
    max-width: 100%;
    .wrapper  >div{
      &:nth-child(odd){
        padding-left: 50px;
      }
    }
  }
}
</style>