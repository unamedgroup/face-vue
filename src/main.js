import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'
import './util/mock'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

Vue.config.productionTip = false
Vue.prototype.$http=axios
Vue.prototype.$ajax=axios

Vue.use(Vuetify);

Vue.use(DaySpanVuetify, {
    methods: {
        getDefaultEventColor: () => '#1976d2'
    }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
