import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Navbar from '@/components/Navbar.vue'
import About from '@/views/About.vue'
import contact from '@/views/contact.vue'
import Contact from '@/views/contact.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/navbar', component: Navbar},
    {path:'/about', component: About},
    {path: '/contact', component: Contact}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router