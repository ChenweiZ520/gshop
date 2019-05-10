import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import Header from './components/Header/Header'
import './validate'
import './mock/mockServer'
import Star from '@/components/Star/Star'
import CartControl from '@/components/CartControl/CartControl'
import Split from '@/components/Split/Split'

Vue.config.productionTip = false

Vue.component('Star',Star)
Vue.component('Header',Header)
Vue.component(Button.name, Button)
Vue.component('CartControl',CartControl)
Vue.component('Split',Split)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
