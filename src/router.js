import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Reports from './views/Reports.vue'
import Occurrences from './views/Occurrences.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/reports',
      name: 'reports',
      component: Reports 
    },

    {
      path: '/occurrences',
      name: 'occurrences',
      component: Occurrences 
    },
  ]
})
