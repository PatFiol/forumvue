import PageHome from '@/components/PageHome'
import ThreadShow from '@/components/ThreadShow'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread/:id',
    name: 'ThreadShow',
    component: ThreadShow,
    props: true
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})