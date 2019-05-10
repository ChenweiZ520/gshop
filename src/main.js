import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import Header from './components/Header/Header'
import './validate'
import './mock/mockServer'
import CartControl from '@/components/CartControl/CartControl'

Vue.config.productionTip = false

Vue.component('Header',Header)
Vue.component(Button.name, Button)
Vue.component('CartControl',CartControl)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
