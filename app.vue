<template>
  <div>
    <seo :key="$route.fullPath" />
    <navHeader />
    <NuxtPage />
    <navFooter />    
    <cursorGradient />
  </div>
</template>

<script></script>

<style>
/* ANIMATION */
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