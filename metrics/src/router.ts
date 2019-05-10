import Vue from 'vue';
import Router from 'vue-router';
import Metrics from './views/Metrics.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'metrics',
      component: Metrics,
    },
  ],
});
