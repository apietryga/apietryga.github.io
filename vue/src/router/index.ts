// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/homeView.vue'
import ProjectsView from '../views/projectsView.vue'
import ProjectView from '../views/projectView.vue'
import e404 from '../views/404.vue'
import data from '../stores/data'

const projects = data => {
  const projects = []
  for( const project of data.projects ){
    projects.push({
      path: '/projects/' + project.url,
      name: project.name.toLowerCase(),
      component: ProjectView,
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
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    ...projects(data),
    {
      path: '/:pathMatch(.*)*',
      component: e404,
    },
  ],
})

export default router
