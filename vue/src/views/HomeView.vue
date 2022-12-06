<template>
  <article>
    <header>
      <h2>HELLO</h2>
    </header>
  </article>
  <main>
    <projectLink :project="{url: 'testOtherPage', name: '404'}" />
    <h3>MAIN</h3>
    <div v-for="category of dataStore.index.recomended" class="categories">
      <div v-for="project of category" class="project">
        <projectLink :project="getProject(project)" />
      </div>
    </div>
  </main>
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
  }
}
</script>

<style lang="scss">
.categories{
  border:2px dashed yellow;
  .project{
    border:2px dashed red;
  }
}
</style>