import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.min.css';

import Vue from 'vue';
import VueRouter from "vue-router";
import VueSweetalert2 from 'vue-sweetalert2';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueRouter);
Vue.use(VueSweetalert2);
Vue.use(VueAxios, axios);
