import { createApp } from 'vue'
import VueGtag from 'vue-gtag-next'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router.js'
import content from './content.js'

import './assets/base.css'
import './assets/animations.css'

const app = createApp(App)

app.use(router)
app.use(content)
app.use(VueGtag, { property: { id: 'G-GNVSMRLKQ3' } })

// Auto-register every component under src/components using the same names the
// templates already use (Nuxt convention: nav/header.vue -> NavHeader, etc.).
const modules = import.meta.glob('./components/**/*.vue', { eager: true })
for (const path in modules) {
  const name = path
    .replace('./components/', '')
    .replace(/\.vue$/, '')
    .split('/')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
  app.component(name, modules[path].default)
}

app.mount('#app')

AOS.init({ duration: 300 })
