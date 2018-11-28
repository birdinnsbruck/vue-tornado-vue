// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// 打开页面，连接服务器
var socket = new WebSocket('ws://192.168.122.128:8080')
socket.onmessage = function (evt) {
  var user = evt.data
  console.log(user)
}
