import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import ListingView from '@/views/ListingView';
import ProfileView from '@/views/ProfileView';
import BasketView from '@/views/BasketView';
import OrderView from '@/views/OrderView';

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
  },
  {
    path: '/order',
    component: <OrderView />
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
