import Vue from 'vue';
import Router from 'vue-router';
import App from '@/pages/AppPage/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    },
  ],
});
