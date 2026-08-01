<!-- SEO / document-head manager (ported off Nuxt's <Head> + useHead). -->
<template><span style="display:none" /></template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { t } from '../content.js'

const ORIGIN = 'https://apietryga.github.io'
const route = useRoute()

let seo = { name: 'apietryga', desc: '', category: [], img: '' }

const setPage = () => {
  if (route.name == 'projects') {
    return seo = {
      name: 'Projects',
      desc: 'Watch my experience!',
      category: ['programming', 'web development', 'inventing'],
      img: 'wellton_visualisation.webp',
    }
  }
  if (route.name == 'projects-name') {
    const found = t('projects').find(project => project.url == route.params.name[0])
    if (found) return seo = found
    return
  }
  if (t(route.name)) {
    if (t(route.name).title) return seo.name = t(route.name).title
    if (t(route.name)?.name) return seo.name = t(route.name).name
  }
}

const setMeta = () => {
  seo.meta = [
    { name: 'google-site-verification', content: '8ipK6aTDBqxsTimOuexoAapkaGpct8pl3NNw7HLw2vA' },
    { name: 'description', content: seo.desc },
    { name: 'keywords', content: seo.category?.join(', ') },
    { name: 'og:title', content: seo.name },
    { name: 'og:description', content: seo.desc },
    { name: 'og:image', content: ORIGIN + '/img/contents/' + seo.img },
    { name: 'twitter:title', content: seo.name },
    { name: 'twitter:description', content: seo.desc },
    { name: 'twitter:image', content: ORIGIN + '/img/contents/' + seo.img },
  ]
}

const applyHead = () => {
  document.title = seo.name || 'apietryga'
  for (const { name, content } of seo.meta) {
    if (content == null) continue
    let el = document.head.querySelector(`meta[data-seo="${name}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute('name', name)
      el.setAttribute('data-seo', name)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }
}

setPage()
setMeta()
onMounted(applyHead)
</script>
