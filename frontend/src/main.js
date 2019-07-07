import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate from 'vee-validate';
import './filters';
import * as VueGoogleMaps from 'vue2-google-maps';
import './scss/main.scss';

Vue.config.productionTip = false;

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);
Vue.use(VeeValidate);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAQz_Zc9Ys9pFeNAYxOhagonVUGOyg_zlg',
    libraries: 'places'
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
