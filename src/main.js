import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routerMap from './routerMap'
Vue.use(VueRouter)
var router = new VueRouter({hashbang: false})
router.map(routerMap)

router.start(App, 'app')
