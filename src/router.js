import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ToyAppPage from './views/ToyAppPage.vue';
import ToyDetails from './views/ToyDetails.vue';
import ToyEdit from './views/ToyEdit.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/toy',
      component: ToyAppPage
    },
    {
      path: '/toy/:toyId',
      component: ToyDetails
    },
    {
      path: '/edit/:toyId?',
      component: ToyEdit
    },
  ],
});

