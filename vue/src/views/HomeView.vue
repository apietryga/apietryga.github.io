<template>
  <div>
    <article class="firstView">
      <div class="content">
        <backAnimation :lang="dataStore.index.lang"/>
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