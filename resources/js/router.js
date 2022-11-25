import {
    createWebHistory,
    createRouter
} from "vue-router";
import home from './Components/home.vue';
import login from './Components/auth/login.vue';
import register from './Components/auth/register.vue';
import forget from './Components/auth/forget.vue';
import logout from './Components/auth/logout.vue';

const routes = [{
        path: '/',
        name: 'Login',
        component: login,
    },
    {
        path: '/register',
        name: 'Register',
        component: register,
    },
    {
        path: '/forget',
        name: 'forget',
        component: forget,
    },
    {
        path: '/home',
        name: 'home',
        component: home,
    },
    {
        path: '/logout',
        name: 'logout',
        component: logout,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
