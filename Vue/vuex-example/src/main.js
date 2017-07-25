// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';

import App from './App';
import router from './router';

require('vue2-animate/dist/vue2-animate.min.css');

Vue.use(Vuex);

Vue.config.productionTip = false;


// Vuex
const store = new Vuex.Store({
  state: {
    text: 'Nice',
  },
  mutations: {
    changeText(state, str) {
      state.text = str;
    },
  },
  actions: {
    changeText(context) {
      context.commit('changeText', 'actions???');
    },
  },
  getters: {
    addText(state) {
      return state.text;
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // You have to place vuex instance here
  template: '<App/>',
  components: { App },
});
