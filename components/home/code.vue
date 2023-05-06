<template>
  <main id="code">
    <div class="codeprojects">
      <header>
        <h2 data-aos="fade-up" v-html="$t('home.code.title')"></h2>
        <p data-aos="fade-up">{{ $t('home.code.description') }}</p>
      </header>
      <div class="techCloud">
        <ul>
          <li v-for="[index, techElement] in $t('stack').entries()" :key="index" data-aos="fade-up" :data-aos-delay="index*10">
            <NuxtLink :to="'/projects?q=' + techElement">{{ techElement }}</NuxtLink>
          </li>
        </ul>
      </div>
      <section class="card__wrapper">
        <!-- <NuxtLink 
          v-for="[index, element] in getProjectsByNames(recomended.code).entries()" 
          :to="'/projects/' + element.url" 
          :data-aos-delay="100*index"
          data-aos="fade-right"
          :key="index"
          class="card" 
        >
          <header class="card__header">
            <h3>{{ element.name }}</h3>
            <p>{{ element.lang[language].desc }}</p>
          </header>
          <picture class="card__picture">
            <img :src="'/img/contents/' + element.img" 
              :alt="element.name" 
              height="50"
              width="50"
            >
          </picture>
        </NuxtLink> -->
      </section>
      <footer data-aos="fade-up">
        <!-- <NuxtLink to="/projects" class="btn">{{ lang[language].content[7] }}</NuxtLink> -->
        <NuxtLink to="/projects" class="btn">{{ $t('home.code.cta') }}</NuxtLink>
      </footer>
    </div>
  </main>
</template>

<script></script>

<style lang="scss">
  #code{
    position:relative;
    .codeprojects{
      width:100%;
      display:flex;
      flex-direction: column;
      align-items: center;
      > header{
        flex:1;
        padding:0 2rem;
        width:100%;
        h2{
          text-align: right;
          margin:2rem 0 0 0;
          font-size:2rem;
          line-height: 100%;
        }
        > p{
          margin-bottom:0;
          text-align: right;
          padding-left:50vw;
        }
      }
      footer{
        align-items: center;
        display:flex;
        justify-content: center;
        margin:1rem 0 3rem 0;
        width:100%;
      }
      section{
        margin-top:3rem;
      }
      .techCloud{
        display: flex;
        justify-content: flex-end;
        width:100%;
        ul{
          display:flex;
          flex-wrap: wrap;
          list-style-type: none;
          max-width: 60vw;
          padding-right:2rem;
          justify-content: center;
          @mixin text-contrast($n) {
            $color-brightness: round((red($n) * 299) + (green($n) * 587) + calc((blue($n) * 114) / 1000));
            $light-color: round((red(#ffffff) * 299) + (green(#ffffff) * 587) + calc((blue(#ffffff) * 114) / 1000));
            @if abs($color-brightness) < calc($light-color / 2){
              color: white;
            }
            @else {
              color: black;
            }
          }
          @mixin random-bgr($i){
            $c: rgb(random(255), random(255), random(255));
            background: $c;
            border-color:darken($c,10%);
            color:invert(darken($c,10%));
            @include text-contrast($c);
          }
          li{
            border:.25rem solid red;
            font-size: 90%;
            padding:.25rem .5rem;
            margin:.1rem;
            border-radius:8px;
            font-weight:bolder;
            //&:before{content:"➡️ ";}
            @for $i from 0 to 30 {
              &:nth-child(#{$i}) {
                @include random-bgr($i);
                
              }
            }
            a{
              color:inherit;
            }
          }
        }
      }
    }
  }
</style>