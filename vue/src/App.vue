<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/" class="logoWrapper">
        <img alt="apietryga Logo" class="logo" src="@/assets/logo.webp" width="50" height="50" />
        <h1>apietryga</h1>
      </RouterLink>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Project</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
header{
  .wrapper{
    border:2px dashed red;
    display:flex;
    align-items: center;
    justify-content: space-between;
    .logoWrapper{
      border:2px dashed blue;
      display:flex;
      img{
        width:2.5rem;
        height:2.5rem;
        margin:.5rem;
      }
      h1{
        font-size:2rem;
        margin-right:.5rem;
        line-height: 3rem;
      }
    }
    nav{
      border: 2px dashed yellow;
    }
  }
}
</style>
