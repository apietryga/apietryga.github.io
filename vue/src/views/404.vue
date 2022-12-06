<template>
  <div>
    404 ziom
  </div>
</template>

<script lang="ts">
export default {
  mounted(){
    window.history.pushState("404", "Page not found", "/404");
  }
}
</script>