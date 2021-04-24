import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'


const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/vuex',
        name: 'Vuex',
        component: () => import('@/views/HelloWorld.vue')
    },
    {
        path: '/axios',
        name: 'Axios',
        component: () => import('@/views/HelloWorld.vue') // 懒加载组件
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
