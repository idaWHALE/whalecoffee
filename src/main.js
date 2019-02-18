import Vue from 'vue'
import Beufy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Beufy, {
  materialDesignIcons: false,
  defaultIconPack: 'fa'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
