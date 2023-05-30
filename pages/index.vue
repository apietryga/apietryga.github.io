<template>
  <div class="indexWrapper">
    <div class="headerWrapper">
      <homeHeader />
    </div>
    <div class="overwrapper">
      <homeCode />
      <homeTeaching />
      <homeBusiness />
    </div>
    <!-- <cursorGradient /> -->
  </div>
</template>

<script>
  export default {
    methods: {
      getProjectsByNames( names ){
        return names.map( name => {
          return this.$t('projects').filter( project => project.name == name )[0]
        })
      },
    },
  }
</script>

<style lang="scss" >
  .heroText{
    font-size: 2rem;
    font-weight: 100;
    line-height: 100%;
    b{
      line-height: 100%;
      font-size: 2.5rem;
      color:var(--accent);
      font-weight:900;
    }
  }
  .overwrapper{
    color: var(--bright-primary);
    padding-bottom:1rem;
  }
  .headerWrapper{
    width:100%;
    z-index:-15;
    .hider{ // hide elements in front page (code section)
      background: var(--backgroundColor);
      max-width:100%;
      width:100%;
      height:120%;
      position:absolute;
      z-index:-10;
    }
  }
  @media (max-width:768px){
    #code .codeprojects{
      >header >p {
        padding-left:0;
      }
      .techCloud ul{
        max-width:100%;
      }
      >section{
        flex-direction: column;
        padding:0 2rem;
        a{ max-width: 60%; }
      }
    }
  }
</style>