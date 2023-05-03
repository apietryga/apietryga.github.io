<template>
  <div>
    <seo :key="$route.fullPath" />
    <navHeader />
    <NuxtPage :key="$route.fullPath" />
    <navFooter />
  </div>
</template>

<script></script>

<style>
.page-enter-active,
.page-leave-active {
  /* transition: all 0.4s; */
  transition: all 3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>