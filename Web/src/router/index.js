import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import ContactView from '../views/Contact.vue'
import EventView from '../views/Event.vue'
import ShopView from '../views/Shop.vue'
import Checkout from '../views/Checkout.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/event',
      name: 'event',
      component: EventView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
  ]
})

export default router
