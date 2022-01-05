import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

store.state.wichList = JSON.parse(localStorage.getItem('wichListIds'))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
