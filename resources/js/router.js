import {
    createWebHistory,
    createRouter
} from "vue-router";
import home from './Components/home.vue';
import login from './Components/auth/login.vue';
import register from './Components/auth/register.vue';
import forget from './Components/auth/forget.vue';
import logout from './Components/auth/logout.vue';

// Emp
import AddEmp from './Components/Employees/create.vue';
import AllEmp from './Components/Employees/index.vue';

// Sup
import AddSup from './Components/Suppliers/create.vue';
import AllSup from './Components/Suppliers/index.vue';

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

    // Emp
    {
        path: '/add-emp',
        name: 'AddEmp',
        component: AddEmp,
    },
    {
        path: '/all-emp',
        name: 'AllEmp',
        component: AllEmp,
    },

    // Sup
    {
        path: '/add-sup',
        name: 'AddSup',
        component: AddSup,
    },
    {
        path: '/all-sup',
        name: 'AllSup',
        component: AllSup,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
