import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'

fastClick.attach(document.body);

import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
