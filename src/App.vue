<template>
  <div class="overWrapper">
    <loader v-if="loading" />
    <seo :key="$route.fullPath" />
    <navHeader />
    <router-view class="pageWrapper" />
    <navFooter />
    <cursorGradient />
  </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  const loading = ref(true)
  onMounted(() => { loading.value = false })
</script>

<style>
.pageWrapper{
  flex:1;
}
/* ANIMATION */
.page-enter-active,
.page-leave-active{
  transition: 0.3s;
  -webkit-transition: 0.3s;
}
.page-leave-to{
  transform: translateX(-100%);
  -webkit-transform:translateX(-100%);
}
</style>