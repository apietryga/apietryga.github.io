<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta 
      v-for="{name, content} of meta" :key="name"
      :name="name"
      :content="content"
    />
  </Head>
</template>

<script>
  const ORIGIN="https://apietryga.github.io"
  export default {
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
            { name: "keywords", content: page.lang[this.$appData.language].category.join(", ") },
            { name: "og:title", content: page.name },
            { name: "og:description", content: page.lang[this.$appData.language].desc },
            { name: "og:image", content: ORIGIN + 'img/contents/' + page.img },
          ]
        }
        return seo
      }
    }
  }
</script>