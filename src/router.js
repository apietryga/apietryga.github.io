import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Contact from './pages/Contact.vue'
import Cv from './pages/Cv.vue'
import ProjectList from './pages/projects/List.vue'
import ProjectDetail from './pages/projects/Detail.vue'
import NotFound from './pages/NotFound.vue'

// Route names are kept identical to the old Nuxt names ('index', 'projects',
// 'projects-name', 'contact', 'cv') because seo.vue keys off them.
const routes = [
  { path: '/', name: 'index', component: Home },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/cv', name: 'cv', component: Cv },
  { path: '/projects', name: 'projects', component: ProjectList },
  // `:name+` yields an array param, matching the old catch-all `params.name[0]`.
  { path: '/projects/:name+', name: 'projects-name', component: ProjectDetail },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
]

export default createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
