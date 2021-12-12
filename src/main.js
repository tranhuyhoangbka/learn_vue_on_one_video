import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

import StoreConfig from './store'
const store = new Vuex.Store(StoreConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
