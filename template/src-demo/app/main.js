require('src-demo/styles/main.scss')

import Vue from 'vue'
import VueRouter from 'vue-router'

import router from 'src-demo/app/config/router'

import Root from 'src-demo/app/components/Root'

Vue.use(VueRouter)

router.start(Root, '#root')
