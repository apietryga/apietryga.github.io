// @ts-nocheck
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import data from './stores/data'

import './assets/main.css'

const app = createApp(App)

// app.config.globalProperties.foo = 'bar';
// app.config.globalProperties.data = data;

app.use(createPinia())
// app.use(store)
app.use(router)

const components = import.meta.glob('./components/*.vue', { eager : true })
Object.entries(components).forEach(([path, definition]) => {
  const componentName = path.split('/').pop().replace(/\.\w+$/, '')
  app.component(componentName, definition.default)
})

app.mount('#app')
