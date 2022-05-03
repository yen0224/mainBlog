import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
//Vue.prototype.$http = axios;
Vue.createApp(App).use(router).mount('#app')
App.use(VueAxios, axios)
