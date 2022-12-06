<template>
  <div class="projects">
    <h2>SINGLE PROJECT</h2>
    <h3>{{ project.name }}</h3>
  </div>
</template>

<script lang="ts">
  import { useDataStore } from '@/stores'

  export default {
    setup() {
      const dataStore = useDataStore();
      return { dataStore }
    },
    data(){
      return{
        project: this.getProject(),
      }
    },
    methods: {
      getProject( ){
        return this.dataStore.projects
        .find( ( project : any) => project.url == location.pathname.split("/")[2] )
      }
    }
  }
</script>