<script setup lang="ts">
  import { useDataStore } from '@/stores'
  const dataStore = useDataStore();
</script>

<template>
  <header class="projects_view_header">
    <h2>Projects</h2>
    <p> ... </p>
  </header>
  <div class="projects">
    <div class="project" v-for="project of dataStore.projects">
      <!-- <projectThumbnail :project="project" /> -->
    </div>
  </div>
</template>

<style lang="scss">
.projects_view_header{
  p{
    line-height: 0;
    margin:0 0 1.5rem 1rem; 
  }
}
.projects{
  display:flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  .project{
    margin:.5rem 0;
    width:45%;
  }
}
</style>