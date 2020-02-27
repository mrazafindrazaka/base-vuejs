import VueRouter from "vue-router";

import Home from "../components/Home";
import Test from "../components/Test";

const routes = [
    {path: '/', name: 'home', component: Home},
    {path: '/test', name: 'test', component: Test}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
