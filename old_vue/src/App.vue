<script setup lang="ts">
  import { RouterView } from 'vue-router'
</script>

<template>
  <navHeader />
  <RouterView :key="$route.fullPath" />
  <navFooter />
</template>