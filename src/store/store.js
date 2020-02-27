import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        test: ''
    },
    mutations: {
        change(state, test) {
            state.test = test;
        }
    },
    getters: {
        test: state => state.test
    }
});
