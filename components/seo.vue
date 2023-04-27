<template>
  <Head>
    <Title>{{ title }}</Title>
    <!-- <Title>{{ $c.seo.title }}</Title> -->
    <Meta 
      v-for="{name, content} of meta" :key="name"
      :name="name"
      :content="content"
    />
    <Meta name="google-site-verification" content="8ipK6aTDBqxsTimOuexoAapkaGpct8pl3NNw7HLw2vA" />
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <!-- <Link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300&display=swap" rel="stylesheet" /> -->
    <!-- <Link href="https://fonts.googleapis.com/css2?family=Anonymous+Pro&family=Nunito&display=swap" rel="stylesheet" /> -->
    <!-- <Link href="https://fonts.googleapis.com/css2?family=Nunito&family=Ubuntu+Mono&display=swap" rel="stylesheet" /> -->
    <Link href="https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&display=swap" rel="stylesheet" />


  </Head>
</template>

<script>
  const ORIGIN="https://apietryga.github.io"
  export default{
    data(){
      return this.fillSeoFields()
    },
    methods: {
      fillSeoFields(){
        const seo = { // default
          title: "apietryga",
          meta: [
            { name: "description", content: "Web Developer Portfolio" },
          ],
        }
        let page = this.$appData[this.$route.name]
        if(this.$route.name == 'projects-name'){
          page = this.$appData.projects.find( project => project.url == this.$route.params.name[0])
        }
        if(this.$route.name == 'projects'){
          page = {
            name: 'Projects',
            lang: {
              'en': { 
                desc: 'Watch my experience!',
                category: ['programming', 'web development', 'inventing'],
              },
              'pl': { 
                desc: 'Zobacz moje doświadczenie',
                category: ['programming', 'web development', 'inventing'],
              },
            },
            img: 'wellton_visualisation.webp',
          }
        }
        if(page){
          seo.title = page.name
          seo.meta = [
            { name: "description", content: page.lang[this.$appData.language].desc },
            { name: "keywords", content: page.lang[this.$appData.language].category?.join(", ") },

            { name: "og:title", content: page.name },
            { name: "og:description", content: page.lang[this.$appData.language].desc },
            { name: "og:image", content: ORIGIN + '/img/contents/' + page.img },

            { name: "twitter:title", content: page.name },
            { name: "twitter:description", content: page.lang[this.$appData.language].desc },
            { name: "twitter:image", content: ORIGIN + '/img/contents/' + page.img },
          ]
        }
        return seo
      }
    }
  }
</script>