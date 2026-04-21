import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./views/HomeView.vue') },
  { path: '/projects', component: () => import('./views/ProjectsView.vue') },
  { path: '/projects/:url', component: () => import('./views/ProjectView.vue') },
  { path: '/contact', component: () => import('./views/ContactView.vue') },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } },
})
