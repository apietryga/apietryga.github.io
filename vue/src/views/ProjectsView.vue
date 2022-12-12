<script setup lang="ts">
  import { useDataStore } from '@/stores'
  const dataStore = useDataStore();
</script>

<template>
  <h2>Projects</h2>
  <div class="projects">
    <div class="project" v-for="project of dataStore.projects">
      <!-- <projectLink :project="project" /> -->
      <projectThumbnail :project="project" />
    </div>
  </div>
</template>

<style lang="scss">
.projects{
  border:2px dashed blue;
  display:flex;
  flex-wrap:wrap;
  justify-content: space-evenly;
  .project{
    @include border(2px);
    border-radius:5px;
    box-shadow: 2px 2px 0 #000;
    margin:.5rem 0;
    width:45%;
  }
}
</style>