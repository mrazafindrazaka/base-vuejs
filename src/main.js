import Vue from 'vue';
import App from './App.vue';

import router from './config/router';
import './config/init';

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
