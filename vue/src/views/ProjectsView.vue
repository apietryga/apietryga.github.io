<script setup lang="ts">
  import data from '@/stores/data';
</script>

<template>
  <div class="projects">
    <h2>ELO</h2>
  </div>
  <div class="project" v-for="project of data.projects">
    <RouterLink :to="'/projects/' + project.name">
      <h3>{{ project.name }}</h3>
    </RouterLink>
  </div>
</template>

<style lang="scss">
.project{
  border:2px dashed red;
}
</style>