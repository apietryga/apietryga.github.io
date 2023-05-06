<template>
  <main id="code">
    <div class="codeprojects">
      <header>
        <h2 data-aos="fade-up" class="heroText" v-html="$t('home.code.title')"></h2>
        <p data-aos="fade-up">{{ $t('home.code.description') }}</p>
      </header>
      
      <NuxtLink data-aos="fade-up" to="/projects" class="btn">
        {{ $t('home.code.cta') }}
      </NuxtLink>

      <div class="cards">
        <div v-for="[index, project] in ['webions', 'anadar'].entries()"
          :data-aos-delay="100*index"
          data-aos="fade-right"
        >
          <picture>
            <img :src="'/img/contents/' + $p(project, 'img')" 
              :alt="$p(project, 'name')"
              height="50"
              width="50"
            >
          </picture>
          <header>
            <h3>{{ $p(project, 'name') }}</h3>
            <p> {{ $p(project, 'desc') }}</p>
          </header>
          <NuxtLink :to="'/projects/' + $p(project, 'url')" class="btn small">
            {{ $t('projects.cta') + " " + $p(project, 'name') }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="techCloud">
      <ul>
        <li v-for="[index, techElement] in $t('stack').entries()" 
          :key="index" data-aos="fade-up" 
          :data-aos-delay="index*10"
        >
          <NuxtLink :to="'/projects?q=' + techElement">{{ techElement }}</NuxtLink>
        </li>
      </ul>
    </div>
  </main>
</template>

<script></script>

<style lang="scss">
  #code{
    display:flex;
    flex-direction: row-reverse;
    align-items: center;
    .codeprojects{
      flex:1;
      width:100%;
      display:flex;
      flex-direction: column;
      align-items: flex-end;
      padding:0 2rem;
      > header{
        flex:1;
        width:100%;
        text-align: right;
        margin-bottom:2rem;
        h2{
          margin:2rem 0 0 0;
        }
      }
      .cards{
        margin: 3rem 1rem;
        display:flex;
        > div{
          text-align: right;
          display:flex;
          flex-direction: column;
          align-items: flex-end;
          margin-left:2rem;
          >header{
            h3{
              margin:.5rem 0;
            }
            p{
              padding-left:2rem;
              text-align: right;
            }
          }
        }
      }
    }
    .techCloud{
      flex:1;
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
</style>