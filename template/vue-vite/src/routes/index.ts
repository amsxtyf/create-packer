import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home'

const routes: RouteRecordRaw[] = [{ path: '/', component: Home }]

export default createRouter({
    history: createWebHashHistory(),
    routes
})
