import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import ListingView from '@/views/ListingView';
import ProfileView from '@/views/ProfileView';
import BasketView from '@/views/BasketView';

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/listing/:type',
    component: ListingView,
  },
  {
    path: '/profile',
    component: <ProfileView />,
  },
  {
    path: '/basket',
    component: <BasketView />
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
