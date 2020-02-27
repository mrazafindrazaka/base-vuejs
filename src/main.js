import Vue from 'vue';
import App from './App.vue';

import router from './config/router';
import { store } from "./store/store";
import './config/init';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
