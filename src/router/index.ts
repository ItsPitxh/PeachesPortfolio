import { createRouter, createWebHistory } from 'vue-router'
import Greeting from '@/components/Greeting.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Greeting
    },

  ]
})

export default router
