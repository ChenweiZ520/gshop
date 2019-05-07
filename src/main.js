import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Header from './components/Header/Header'

Vue.config.productionTip = false

Vue.component('Header',Header)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
