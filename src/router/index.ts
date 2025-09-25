import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router' // 把 RouteRecordRaw 当作类型导入
// 定义路由表，推荐写类型 RouteRecordRaw
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue') // 懒加载
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // HTML5 history 模式
    routes
})

export default router
