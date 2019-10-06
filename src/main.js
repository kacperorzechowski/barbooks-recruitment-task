import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import './assets/sass/index.scss'
import addValidators from './validators'

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
addValidators()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
