import Vue from 'vue';
import Router from 'vue-router';
import AppHome from './views/AppHome.vue';
import ToyAppPage from './views/ToyAppPage.vue';
import ToyDetails from './views/ToyDetails.vue';
import ToyEdit from './views/ToyEdit.vue';
import UserProfile from './views/UserProfile.vue';
import AppStatistics from './views/AppStatistics.vue';
import OurStores from './views/OurStores.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: AppHome
    },
    {
      path: '/profile',
      component: UserProfile
    },
    {
      path: '/statistics',
      component: AppStatistics
    },
    {
      path: '/stores',
      component: OurStores
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

