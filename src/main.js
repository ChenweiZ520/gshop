import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App'
import router from './router'
import store from './store'
import Header from './components/Header/Header'
import './validate'
import './mock/mockServer'

Vue.config.productionTip = false

Vue.component('Header',Header)
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
