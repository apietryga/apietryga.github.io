<template>
  <div>
    <article class="firstView">
      <div class="content">
        <div class="alaPhone">
          <picture>
            <img src="/img/frontPage/projects_footer.webp" alt="MYIMAGE" />
          </picture>
          <header>
            <h2> {{ dataStore.index.lang.en.content[0] + " " + dataStore.index.lang.en.content[1] }} </h2>
            <p> WEBDEV </p>
          </header>
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
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .content{
    display:flex;
    justify-content: center;
    .alaPhone{
      align-items: center;
      border-radius:10rem;
      display:flex;
      flex-direction: column;
      position:relative;
      &::after{
        border:2rem solid var(--c-secondary);
        border-radius:10rem;
        content: '';
        height:100%;
        left:.5rem;
        position:absolute;
        top:1rem;
        width: 100%;
        z-index:-1;
      }
      picture{
        height:15rem;
        position:absolute;
        top:-10rem;
        width:15rem;
        &::after{
          border:2rem solid var(--c-secondary);
          border-radius:50%;
          content: '';
          height:100%;
          left:.5rem;
          position:absolute;
          top:1rem;
          width: 100%;
          z-index:0;
        }
        img{
          border-radius:50%;
          height:100%;
          position:absolute;
          width:100%;
          z-index:1;
        }
      }
      header{
        display:flex;
        justify-content: center;
        background-color: var(--c-primary);
        border-radius:10rem;
        h2{
          font-size:clamp(1rem, 10vw, 10rem);
          font-weight: 900;
          line-height: 80%;
          margin:5rem 2rem .25rem 2rem;
          padding:2rem;
          position:relative;
        }
        p{
          background-color: var(--c-primary);
          border-radius: 0 0 5rem 5rem;
          bottom:calc(-4.5rem + 1px);
          display:flex;
          height:3rem;
          justify-content: center;
          padding:1rem 2rem 3rem 2rem;
          position: absolute;
          width:20rem;
          &::after{
            border:2rem solid var(--c-secondary);
            border-radius: 0 0 5rem 5rem;
            content: '';
            height:100%;
            left:.5rem;
            position:absolute;
            top:.5rem;
            width: 100%;
            z-index:-1;
          }
        }
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