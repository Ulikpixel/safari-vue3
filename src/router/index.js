import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import AccessoriesView from '../views/AccessoriesView'
import ShoesView from '../views/ShoesView'
import ClothesView from '../views/ClothesView'
import AuthView from '../views/AuthView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listing/accessories',
    name: 'accessories',
    component: AccessoriesView
  },
  {
    path: '/listing/shoes',
    name: 'shoes',
    component: ShoesView,
  },
  {
    path: '/listing/clothes',
    name: 'clothes',
    component: ClothesView,
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
