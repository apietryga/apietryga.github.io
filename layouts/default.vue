<template>
  <seo :key="$route.fullPath" />
  <!-- <div> -->
    <navHeader />
    <slot :key="$route.fullPath" />
    <navFooter />
  <!-- </div> -->
</template>

<script></script> 