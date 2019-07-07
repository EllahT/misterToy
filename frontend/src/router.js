import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ToyAppPage from './views/ToyAppPage.vue';
import ToyDetails from './views/ToyDetails.vue';
import ToyEdit from './views/ToyEdit.vue';
import UserProfile from './views/UserProfile.vue';
import DashBoard from './views/DashBoard.vue';
import OurStores from './views/OurStores.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/profile',
      component: UserProfile
    },
    {
      path: '/dashboard',
      component: DashBoard
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

