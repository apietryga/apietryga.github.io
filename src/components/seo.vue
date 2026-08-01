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

  setPage()
  setMeta()

</script>