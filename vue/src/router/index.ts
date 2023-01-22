// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectView from '../views/ProjectView.vue'
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
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/search',
      name: 'search',
      component: ProjectsView,
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
