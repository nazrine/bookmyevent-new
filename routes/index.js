import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Navbar from '@/components/Navbar.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/navbar', component: Navbar}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router