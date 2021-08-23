import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import store from './store'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(BootstrapVue)

Vue.use(VueLodash, {
  name: 'custom',
  lodash: lodash
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
}); 