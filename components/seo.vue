<template>
  <Head>
    <Title>{{ seo.name }}</Title>
    <Meta v-for="{ name, content } of seo.meta" :key="name" :name="name" :content="content" />
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <Link href="https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&display=swap" rel="stylesheet" />
  </Head>
</template>

<script>
  const ORIGIN="https://apietryga.github.io"
  export default{
    data(){
      return { 
        seo: {
          name: "apietryga",
          desc: "",
          category: [],
          img: "",
        }, 
      }
    },
    mounted() {
      this.setPage()
      this.setMeta()
    },
    methods: {
      setPage(){

        if(this.$route.name == 'projects'){
          return this.seo = {
            name: 'Projects',
            desc: 'Watch my experience!',
            category: ['programming', 'web development', 'inventing'],
            img: 'wellton_visualisation.webp',
          }
        }

        if(this.$route.name == 'projects-name'){
          return this.seo = this.$t('projects').find( project => project.url == this.$route.params.name[0])
        }

        if(this.$t(this.$route.name)){
          if(this.$t(this.$route.name).title){
            return this.seo.name = this.$t(this.$route.name).title
          }
          if(this.$t(this.$route.name)?.name){
            return this.seo.name = this.$t(this.$route.name).name
          }
        }

      },
      setMeta(){
        this.seo.meta = [
          { name: "google-site-verification", content: "8ipK6aTDBqxsTimOuexoAapkaGpct8pl3NNw7HLw2vA" },

          { name: "description", content: this.seo.desc },
          { name: "keywords", content: this.seo.category?.join(", ") },

          { name: "og:title", content: this.seo.name },
          { name: "og:description", content: this.seo.desc },
          { name: "og:image", content: ORIGIN + '/img/contents/' + this.seo.img },

          { name: "twitter:title", content: this.seo.name },
          { name: "twitter:description", content: this.seo.desc },
          { name: "twitter:image", content: ORIGIN + '/img/contents/' + this.seo.img },
        ]
      }
    }
  }
</script>