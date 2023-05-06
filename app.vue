<template>
  <div>
    <seo :key="$route.fullPath" />
    <navHeader />
    <!-- <NuxtPage :key="$route.fullPath" /> -->
    <NuxtPage />
    <navFooter />
  </div>
</template>

<script></script>

<style>
.page-enter-active,
.page-leave-active{
  transition: 0.3s;
  -webkit-transition: 0.3s;
}
/* .page-enter-from{
  transform: translateX(100%);
} */
.page-leave-to{
  transform: translateX(-100%);
  -webkit-transform:translateX(-100%);
}
</style>