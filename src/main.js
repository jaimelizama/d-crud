import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

import firebase from 'firebase'
import { firebaseConfig } from '../firebase-config'

firebase.initializeApp(firebaseConfig)

import VModal from 'vue-js-modal'

Vue.use(VModal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
