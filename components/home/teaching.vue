<template>
  <article id="teaching">
    <header>
      <!-- <h2 data-aos="fade-up">{{lang[language].content[8]}}</h2> -->
      <h2 data-aos="fade-up" v-html="$c.home.teaching.title"></h2>
      <!-- <p>{{lang[language].content[9]}}</p>   -->
      <p>{{ $c.home.teaching.description }}</p>  
    </header>
    <div class="content">
      <!-- <p>{{lang[language].content[10]}}</p> -->
      <section class="card__wrapper">
        <!-- <NuxtLink 
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
        </NuxtLink> -->
        <div></div>
      </section>
      <!-- <footer>
        <NuxtLink to="/projects">{{ lang[language].content[11] }}</NuxtLink>
      </footer>   -->
    </div>
  </article>
</template>

<script></script>

<style lang="scss">
 #teaching{
  position:relative;
  color:#fff;
  background:var(--dark-rocks);
  display:flex;
  flex-direction: column;
  > header{
    h2{
      padding-left:1rem;
      font-size:3rem;
    }
    p{
      padding-left:1rem;
      margin:.5rem;
      margin-bottom:3rem;
    }  
    *{
      text-align: center;
      flex:1;
    }
  }
  .content{
    display:flex;
    flex-direction: column;
    align-items: center;
    section{
      padding-bottom:0;
      width:80%;
    }

  }
}
</style>