<template>
  <RouterLink :to="('/projects/' + project.url)">{{ project.name }}</RouterLink>
</template>

<script lang="ts">
export default{
  props : {
    project: {
      type : Object,
      required: true
    }
  }
}
</script>