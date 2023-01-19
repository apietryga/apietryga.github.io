<template>
  <!-- TODO: MAKE HEADER WITH META TAGS -->
  <!-- {% include "header.html" %} -->
    <!-- TODO: IMPLEMENT STYLES -->
    <!-- <link rel="stylesheet" href="/style/index.min.css?v={{version|safe}}"> -->
    <!-- TODO: IMPLEMENT SCRIPTS -->
    <!-- <script src="/js/topheader.js" defer></script> -->
  <!-- {% include "navHeader.html" %} -->
    <header class="topHeader">
      <div class="title">
        <!-- <h1>{{lang[language].content[0]| safe}}<b>{{lang[language].content[1]}}</b></h1>
        <h2>{{lang[language].content[2]}}</h2>
        <p>{{lang[language].content[3]}}</p> -->
      </div>
      <div class="background"></div>
      <div class="photo sky"></div>
      <div class="photo mountains"></div>
      <div class="photo moon"></div>
      <div class="photo clouds"></div>
      <div class="mask photo"></div>
    </header>

    <div class="hider"></div>
    <main id="code">
      <div class="codeprojects">
        <header>
          <!-- <h1>{{lang[language].content[4]}}</h1>
          <h2>{{lang[language].content[5]}}</h2>
          <p>
            {{lang[language].content[6]}}
          </p>   -->
        </header>
        <ul>
          {% for techElement in stack %}
            <li>
              <!-- <a href="/search?q={{techElement}}">{{techElement}}</a> -->
            </li>
          {% endfor %}
        </ul>
        <section>
          {% for element in recomended.code %}
            <a href="{{element.href}}">
              <article>
                <header>
                  <!-- <h2>{{element.name}}</h2>
                  <p>{{element.lang[language].desc}}</p> -->
                </header>
                <!-- <img src="/img/contents/{{element.img}}" alt="{{element.name}}"> -->
              </article>
            </a>
          {% endfor %}
          <div></div>
          <footer>
            <!-- <a href="/projects">{{lang[language].content[7]}}</a> -->
          </footer>
        </section>
      </div>
    </main>
    <article id="teaching">
      <div class="mask top"></div>
      <div class="stopper"></div>
      <header>
        <!-- <h1>{{lang[language].content[8]}}</h1>
        <h2>{{lang[language].content[9]}}</h2>   -->
      </header>
      <div class="content">
        <!-- <p>{{lang[language].content[10]}}</p> -->
        <section>
          {% for element in recomended.teaching %}
            <a href="{{element.href}}">
              <article>
                <header>
                  <!-- <h2>{{element.name}}</h2>
                  <p>{{element.lang[language].desc}}</p> -->
                </header>
                <!-- <img src="/img/contents/{{element.img}}" alt="{{element.name}}"> -->
              </article>
            </a>
          {% endfor %}
          <div></div>
          <footer>
            <!-- <a href="/exps">{{lang[language].content[11]}}</a> -->
          </footer>  
        </section>
      
      </div>
      <div class="mask dark"></div>
      
    </article>
    <article id="business">
      <div class="photo me"></div>
      <!-- <h1>{{lang[language].content[12]}}</h1>
      <p>{{lang[language].content[13]}}</p> -->
      <section>
        {% for element in recomended.business %}
          <a href="{{element.href}}">
            <article>
              <header>
                <!-- <h2>{{element.name}}</h2>
                <p>{{element.lang[language].desc}}</p> -->
              </header>
              <!-- <img src="/img/contents/{{element.img}}" alt="{{element.name}}"> -->
            </article>
          </a>
        {% endfor %}
        <div></div>
        <footer>
          <!-- <a href="/search?q={{lang[language].content[15]}}">{{lang[language].content[14]}}</a> -->
        </footer>  
      </section>

    </article>
  {% include "footer.html" %}
</template>

<script lang="ts">
import { useDataStore } from '@/stores'

export default {
  setup() {
    const dataStore = useDataStore();
    return { dataStore }
  },
  methods: {
    getProject(name : string){
      return this.dataStore.projects
      .find( ( project : any) => project.name == name )
    }
  },
  mounted(){
    console.log({ useDataStore })
    console.log(this.dataStore)
    
  }
}
</script>

<style lang="scss">
.firstView{
  color: var(--fc-primary);
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  padding:2rem 0;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content{
    display:flex;
    justify-content: center;
    padding:100vh 0;
  }
}
.homeMain{
  margin-top: calc( 100vh - 5rem );
  .categories{
    border:2px dashed yellow;
    .project{
      border:2px dashed red;
    }
  }
}
</style>