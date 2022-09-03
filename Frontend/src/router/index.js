import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import About from '/src/components/About.vue'
import SendRequest from '/src/components/SendRequest.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/request',
        name: 'Request',
        component: SendRequest,
    },
]

console.log('Base URL:-', import.meta.env.VITE_BASE_URL)
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
