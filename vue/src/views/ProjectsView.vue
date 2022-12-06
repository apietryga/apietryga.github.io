<script setup lang="ts">
  import { useDataStore } from '@/stores'
  const dataStore = useDataStore();
</script>

<template>
  <div class="projects">
    <h2>Projects</h2>
  </div>
  <div class="project" v-for="project of dataStore.projects">
    <projectLink :project="project" />
  </div>
</template>

<style lang="scss">
.project{
  border:2px dashed red;
}
</style>