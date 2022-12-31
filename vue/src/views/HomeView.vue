<template>
  <div>
    <article class="firstView">
      <div class="content">
        <div class="alaPhone">
          <img 
            src="/img/frontPage/projects_footer.webp" 
            alt="MYIMAGE"
          >
          <h2>{{ dataStore.index.lang.en.content[0] + " " + dataStore.index.lang.en.content[1] }}</h2>
          <!-- <p>{{ dataStore.index.lang.en.content[2] }}</p> -->
          <p>WEBDEV</p>
        </div>
      </div>
    </article>
    <main class="homeMain">
      <h3>MAIN</h3>
      <div v-for="category of dataStore.index.recomended" class="categories">
        <div v-for="project of category" class="project">
          <projectLink :project="getProject(project)" />
        </div>
      </div>
    </main>
  </div>
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
  // height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content{
    display:flex;
    justify-content: center;
    .alaPhone{
      @include border(2px);
      align-items: center;
      background-color: var(--c-primary);
      border-radius:.75rem;
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position:relative;
      width:80vw;
      height:80vh;
      h2{
        font-size:clamp(1rem, 10vw, 10rem);
        line-height: 80%;
        margin:2rem 0;
        font-weight: 900;
      }
      img{
        @include border(2px);
        border-radius:50%;
        height:4rem;
        width:4rem;
      }
      &::after{
        @include border(2px);
        // background-color: red;
        background-color: var(--c-secondary);
        border-radius:.75rem;
        content: "";
        height:100%;
        position:absolute;
        width:100%;
        top:.75rem;
        left:.75rem;
        z-index:-1;
      }
    }
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