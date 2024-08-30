import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/excursions',
    name: 'Excursions',
    component: loadPage('ExcursionsPage')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: loadPage('ProjectsPage')
  },
  {
    path: '/projects/:slug',
    name: 'ProjectDetails',
    component: loadPage('ProjectDetailsPage')
  },
  {
    path: '/getInvolved',
    name: 'GetInvolved',
    component: loadPage('GetInvolvedPage')
  },
  {
    path: '/partners',
    name: 'Partners',
    component: loadPage('PartnersPage')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: loadPage('BlogPage'),
  },
  {
    path: '/getinvolved',
    name: 'GetInvolved',
    component: loadPage('GetInvolvedPage'),
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
