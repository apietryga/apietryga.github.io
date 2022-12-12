<template>
  <section class="project__single">
    <header>
      <h2>{{ project.name }}</h2>
      <p>{{ project.lang.en.desc}}</p>
    </header>
    <main>
      <img 
        :src="'/img/contents/' + project.img" 
        :alt="project.name + ' image'" 
        style="width:10rem;height:10rem;" 
      />
      <div 
        class="block"
        v-for="index of [0,1,2]"
      >
        <p v-html="project.lang.en.content[index]" />
        <div class="media__wrapper">
          <projectMedia :media="project.media[index]" class="media" />
        </div>
      </div>
    </main>
  </section>
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

<style lang="scss" scoped>
.project__single{
  padding:0 1rem;
  header{
    width:100%;
    h2{
      line-height: 1rem;
      margin:.25rem 0;
    }
    p{
      line-height: 1.1rem;
    }
  }
  main{
    display:flex;
    flex-direction: column;
    align-items: center;
    .media__wrapper{
      .media{
        max-width:100%;
      }
    }
  }
}
</style>