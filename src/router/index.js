import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginView
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
