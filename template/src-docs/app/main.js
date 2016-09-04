require('src-docs/styles/main.scss')

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from 'src-docs/app/config/router'

import Root from 'src-docs/app/components/Root'

Vue.use(VueRouter)

router.start(Root, '#root')
