import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate from 'vee-validate';
import './filters';

Vue.config.productionTip = false;

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
