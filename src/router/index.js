import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Login",
        component: Login,
    },
    {
        path: "/client",
        name: "client",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "passengers" */ "../views/Passengers.vue"),
    },
    {
        path: "/create",
        name: "Create",
        component: () =>
            import ( /* webpackChunkName: "passengers" */ "../views/Create.vue"),
    },
    {
        path: "/routedetail",
        name: "RouteDetail",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "routedetail" */ "../views/RouteDetail.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;