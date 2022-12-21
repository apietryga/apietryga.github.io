// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import homeView from '../views/homeView.vue'
import projectsView from '../views/projectsView.vue'
import projectView from '../views/projectView.vue'
import e404 from '../views/404.vue'
import data from '../stores/data'

const projects = data => {
  const projects = []
  for( const project of data.projects ){
    projects.push({
      path: '/projects/' + project.url,
      name: project.name.toLowerCase(),
      component: projectView,
    })
  }
  return projects
}


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: projectsView,
    },
    ...projects(data),
    {
      path: '/:pathMatch(.*)*',
      component: e404,
    },
  ],
})

export default router
