import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseLayout from "@/components/layouts/BaseLayout"
import store from "./store"

Vue.config.productionTip = false

Vue.component('base-layout', BaseLayout)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
