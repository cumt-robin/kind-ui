import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import("@/views/home.vue"),
            meta: {
                name: '首页'
            }
        },
        {
            path: '/widgets',
            component: () => import("@/views/widgets/index.vue"),
            meta: {
                name: '组件'
            },
            children: [
                {
                    path: '',
                    redirect: '/layout'
                },
                {
                    path: '/layout',
                    component: () => import("@/views/widgets/layout.vue"),
                    meta: { name: '布局' }
                }
            ]
        }
    ]
})

export default router;