import Vue from 'vue';
import { firestorePlugin } from 'vuefire';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import '@/utils/firebaseConfig';

Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
