<template>
  <div class="project">
    <img :src="'/img/contents/'+project.img" alt="">

    <h3>{{ project.name }}</h3>
    <projectLink :project="project" />
    <p>
      <!-- {{ project }} -->
    </p>
  </div>
</template>

<script lang="ts">
export default{
  props : {
    project: {
      type : Object,
      required: true
    }
  },
  mounted(){
    console.log( this.project )
  }
}
</script>

<style lang="scss" scoped>
  .project{
    border:2px dashed red;
    width:100%;
    height:100%;
    img{
      width:3rem;
      height:3rem;
    }
  }



</style>