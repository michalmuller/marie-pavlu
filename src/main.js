import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import './registerServiceWorker';
import vueSmoothScroll from 'vue-smooth-scroll';

Vue.config.productionTip = false;
Vue.use(vueSmoothScroll);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
