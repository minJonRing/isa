// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex/store"
import 'we-vue/lib/style.css'
import { Picker } from "we-vue"

Vue.config.productionTip = false
Vue.use(Picker)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
