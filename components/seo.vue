<template>
  <Head>
    <Title>{{ seo.name }}</Title>
    <Meta v-for="{ name, content } of seo.meta" :key="name" :name="name" :content="content" />
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <Link href="https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&display=swap" rel="stylesheet" />
  </Head>
</template>

<script setup>

  const ORIGIN="https://apietryga.github.io"
  const { $t } = useNuxtApp()
  const route = useRoute()
  let seo = {
    name: "apietryga",
    desc: "",
    category: [],
    img: "",
  }
  const setPage = () => {

    if(route.name == 'projects'){
      return seo = {
        name: 'Projects',
        desc: 'Watch my experience!',
        category: ['programming', 'web development', 'inventing'],
        img: 'wellton_visualisation.webp',
      }
    }

    if(route.name == 'projects-name'){
      return seo = $t('projects').find( project => project.url == route.params.name[0])
    }

    if($t(route.name)){
      if($t(route.name).title){
        return seo.name = $t(route.name).title
      }
      if($t(route.name)?.name){
        return seo.name = $t(route.name).name
      }
    }

  }
  const setMeta = () => {
    seo.meta = [
      { name: "google-site-verification", content: "8ipK6aTDBqxsTimOuexoAapkaGpct8pl3NNw7HLw2vA" },

      { name: "description", content: seo.desc },
      { name: "keywords", content: seo.category?.join(", ") },

      { name: "og:title", content: seo.name },
      { name: "og:description", content: seo.desc },
      { name: "og:image", content: ORIGIN + '/img/contents/' + seo.img },

      { name: "twitter:title", content: seo.name },
      { name: "twitter:description", content: seo.desc },
      { name: "twitter:image", content: ORIGIN + '/img/contents/' + seo.img },
    ]
  }

  // setPage()
  // setMeta()

  // const prepareSEOData = () => {
  //   return { 

  //     // { name: "description", content: seo.desc },
  //     description: seo.desc,
  //     // { name: "keywords", content: seo.category?.join(", ") },
  //     keywords: seo.category?.join(", "),

  //     // { name: "og:title", content: seo.name },
  //     ogTitle: seo.name,
  //     // { name: "og:description", content: seo.desc },
  //     ogDescription: seo.desc,
  //     // { name: "og:image", content: ORIGIN + '/img/contents/' + seo.img },
  //     ogImage: ORIGIN + '/img/contents/' + seo.img,

  //     twitterCard: 'summary_large_image',
  //     // { name: "twitter:title", content: seo.name },
  //     twitterTitle: seo.name,
  //     // { name: "twitter:description", content: seo.desc },
  //     twitterDescription: seo.desc,
  //     // { name: "twitter:image", content: ORIGIN + '/img/contents/' + seo.img },
  //     twitterImage: ORIGIN + '/img/contents/' + seo.img,

  //   }
  // }


  // watch(() => { useSeoMeta(prepareSEOData) }, {deep: true, immediate: true})
  // useSeoMeta( prepareSEOData )

  // ! REST

  // export default{
  //   data(){
  //     return { 
  //       seo: {
  //         name: "apietryga",
  //         desc: "",
  //         category: [],
  //         img: "",
  //       }, 
  //     }
  //   },
  //   mounted() {
  //     this.setPage()
  //     this.setMeta()
  //   },
  //   methods: {
  //     setPage(){

  //       if(this.$route.name == 'projects'){
  //         return this.seo = {
  //           name: 'Projects',
  //           desc: 'Watch my experience!',
  //           category: ['programming', 'web development', 'inventing'],
  //           img: 'wellton_visualisation.webp',
  //         }
  //       }

  //       if(this.$route.name == 'projects-name'){
  //         return this.seo = this.$t('projects').find( project => project.url == this.$route.params.name[0])
  //       }

  //       if(this.$t(this.$route.name)){
  //         if(this.$t(this.$route.name).title){
  //           return this.seo.name = this.$t(this.$route.name).title
  //         }
  //         if(this.$t(this.$route.name)?.name){
  //           return this.seo.name = this.$t(this.$route.name).name
  //         }
  //       }

  //     },
  //     setMeta(){
  //       this.seo.meta = [
  //         { name: "google-site-verification", content: "8ipK6aTDBqxsTimOuexoAapkaGpct8pl3NNw7HLw2vA" },

  //         { name: "description", content: this.seo.desc },
  //         { name: "keywords", content: this.seo.category?.join(", ") },

  //         { name: "og:title", content: this.seo.name },
  //         { name: "og:description", content: this.seo.desc },
  //         { name: "og:image", content: ORIGIN + '/img/contents/' + this.seo.img },

  //         { name: "twitter:title", content: this.seo.name },
  //         { name: "twitter:description", content: this.seo.desc },
  //         { name: "twitter:image", content: ORIGIN + '/img/contents/' + this.seo.img },
  //       ]
  //     }
  //   }
  // }
</script>