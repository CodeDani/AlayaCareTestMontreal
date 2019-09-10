import Vue from 'vue'
import CreditCard from './creditcard.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(CreditCard),
}).$mount('#app')
