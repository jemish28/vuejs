import Movie from "./components/Movie.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue"
import Login from "./components/Login/Login.vue"
import Register from "./components/Register/Register.vue"
import VueRouter from "vue-router";

let routes = [{
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: "/movies",
        component: Movie,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/movies/:id',
        component: Detail,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/signup',
        component: Register
    }
]

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router