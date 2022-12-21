// @ts-nocheck
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/base.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

console.log({routes: router.getRoutes()})

const components = import.meta.glob('./components/*.vue', { eager : true })
Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')
  app.component(componentName, definition.default)
})

app.mount('#app')
