import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import './registerServiceWorker';
import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  store,
  router: new VueRouter({ routes }),
  render: h => h(App)
}).$mount('#app');
