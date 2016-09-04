import Vue from 'vue'
import VueRouter from 'vue-router'

import {routes} from 'src-docs/app/config/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true, // enable in development
  history: false, // disable in development
  linkActiveClass: 'is-active',
  transitionOnLoad: true
})

router.map(routes)

export default router
