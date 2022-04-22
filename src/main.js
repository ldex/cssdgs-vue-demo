import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// JavaScript runtime error
window.onerror = function(msg, src, linenum, colnum, error) {
  console.log('[JavaScript Error Handler]: ' + msg + '- ' + error);
  router.push({ name: 'error'});
}

// Vue related errors
Vue.config.errorHandler = function (err, vm, info) {
  console.log('[Vue Error Handler]: Error in ' + info + ': ' + err);
  router.push({ name: 'error'});
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
