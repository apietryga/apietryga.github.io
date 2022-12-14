// @ts-nocheck
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/base.css'

import { htmlize } from 'vue-htmlize'

htmlize.config = [ 'favicon.ico', 'img' ]

console.log( htmlize )

// htmlize.htmlizeRouter( router )

// console.log({ router })
// console.log( router.getRoutes() )

const app = createApp(App)

app.use(createPinia())
app.use(router)

const components = import.meta.glob('./components/*.vue', { eager : true })
Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')
  app.component(componentName, definition.default)
})

app.mount('#app')
