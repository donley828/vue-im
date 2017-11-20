// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$RongIMLib = window.RongIMLib
Vue.prototype.$RongIMClient = window.RongIMClient
Vue.prototype.$AppKey = 'cpj2xarlc1ofn'
window.RongIMClient.setConnectionStatusListener({
  onChanged(status) {
    switch (status) {
      case window.RongIMLib.ConnectionStatus.CONNECTED:
        console.log('链接成功')
        break
      case window.RongIMLib.ConnectionStatus.CONNECTING:
        console.log('正在链接')
        break
      case window.RongIMLib.ConnectionStatus.DISCONNECTED:
        console.log('断开连接')
        break
      case window.RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
        console.log('其他设备登录')
        break
      case window.RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
        console.log('域名不正确')
        break
      case window.RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
        console.log('网络不可用')
        break
    }
  }
})
window.RongIMClient.setOnReceiveMessageListener({
  onReceived(message) {
    switch (message.messageType) {
      case window.RongIMClient.MessageType.TextMessage:
        // message.content.content => 消息内容
        break
      case window.RongIMClient.MessageType.VoiceMessage:
        // 对声音进行预加载
        // message.content.content 格式为 AMR 格式的 base64 码
        break
      case window.RongIMClient.MessageType.ImageMessage:
        // message.content.content => 图片缩略图 base64。
        // message.content.imageUri => 原图 URL。
        break
      case window.RongIMClient.MessageType.DiscussionNotificationMessage:
        // message.content.extension => 讨论组中的人员。
        break
      case window.RongIMClient.MessageType.LocationMessage:
        // message.content.latiude => 纬度。
        // message.content.longitude => 经度。
        // message.content.content => 位置图片 base64。
        break
      case window.RongIMClient.MessageType.RichContentMessage:
        // message.content.content => 文本消息内容。
        // message.content.imageUri => 图片 base64。
        // message.content.url => 原图 URL。
        break
      case window.RongIMClient.MessageType.InformationNotificationMessage:
        // do something...
        break
      case window.RongIMClient.MessageType.ContactNotificationMessage:
        // do something...
        break
      case window.RongIMClient.MessageType.ProfileNotificationMessage:
        // do something...
        break
      case window.RongIMClient.MessageType.CommandNotificationMessage:
        // do something...
        break
      case window.RongIMClient.MessageType.CommandMessage:
        // do something...
        break
      case window.RongIMClient.MessageType.UnknownMessage:
        // do something...
        break
      default:
      // do something...
    }
  }
})
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted() {}
})
