<script setup lang="ts">
  import data from '@/stores/data';
</script>

<template>
  <article>
    <header>
      <h2>HELLO</h2>
    </header>
  </article>
  <main>
    <h3>MAIN</h3>
    <div v-for="category of data.index.recomended" class="categories">
      <div v-for="project of category" class="project">
        <!-- <RouterLink to="/">Home</RouterLink> -->
        <RouterLink :to="'/projects/' + project">{{ project }}</RouterLink>

        <!-- <router-link >
          {{ project }}
        </router-link> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.categories{
  border:2px dashed yellow;
  .project{
    border:2px dashed red;
  }
}
</style>