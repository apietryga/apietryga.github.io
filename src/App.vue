<template>
  <div class="overWrapper">
    <loader v-if="loading" />
    <seo :key="$route.fullPath" />
    <navHeader />
    <NuxtPage class="pageWrapper" />
    <navFooter />    
    <cursorGradient />
  </div>
</template>

<script setup>
  const nuxtApp = useNuxtApp();
  const loading = ref(true);
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
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