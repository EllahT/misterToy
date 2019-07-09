import Vue from 'vue';
import Router from 'vue-router';
import AppHome from './views/AppHome.vue';
import ToyAppPage from './views/ToyAppPage.vue';
import ToyDetails from './views/ToyDetails.vue';
import ToyEdit from './views/ToyEdit.vue';
import EditUser from './views/EditUser.vue';
import UserDetails from './views/UserDetails.vue';
import AppStatistics from './views/AppStatistics.vue';
import OurStores from './views/OurStores.vue';
import UsersList from './views/UsersList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: AppHome
    },
    {
      path: '/user',
      component: UsersList
    },
    {
      path: '/user/:userId',
      component: UserDetails
    },
    {
      path: '/user/edit/:userId?',
      component: EditUser
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

