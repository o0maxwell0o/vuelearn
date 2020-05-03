import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// 导入刚才编写的组件
import appIndex from '@/components/appIndex'
import Login from '@/components/Login'

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/index',
        name: 'appIndex',
        component: appIndex
    }
];

const router = new VueRouter({
    routes
});

export default router;
