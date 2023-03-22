import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import AuthView from '@/views/AuthView'
import ListingView from '@/views/ListingView';

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/auth',
    component: AuthView,
  },
  {
    path: '/listing/:type',
    component: ListingView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
