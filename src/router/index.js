import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Friends from '../views/Friends.vue'
import DirectMessage from "../views/DirectMessage.vue";
import GuildChannel from "../views/GuildChannel.vue"

Vue.use(VueRouter)

const routes = [
    {
        path: '/Login',
        name: 'Login',
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
    },
    {
        path: '/channel/@bot',
        name: 'Friends',
        component: Friends,
    },
    {
        path: '/channel/@bot/:id',
        name: 'DM',
        component: DirectMessage,
    },
    {
        path: '/channel/guild/:id',
        name: 'GuildChannel',
        component: GuildChannel,
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
