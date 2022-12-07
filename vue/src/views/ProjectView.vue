<template>
  <div class="project">

    <div class="topBackground" :style="'background: linear-gradient('+project.color+', transparent)'">
    </div>


    <h2>{{ project.name }}</h2>
    <p>{{ project.lang.pl.desc}}</p>
    
    <img 
      :src="'/img/contents/' + project.img" 
      :alt="project.name + ' image'" 
      style="width:10rem;height:10rem;">

    <!-- <p>{{ project.lang.pl.content}}</p> -->
    <p v-html="project.lang.pl.content"></p>

  </div>
</template>

<script lang="ts" scoped>
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
    },
    mounted(){
      console.log(this.project)
    },
  }
</script>

<style lang="scss">
.topBackground{
  // border:2px dashed Green;
  width:100%;
  height:50vh;
  position:absolute;
  top:-4rem;
  z-index:-1;
  left:0;
}

</style>