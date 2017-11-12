// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import websdk from 'easemob-websdk'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)
let WebIM = (window.WebIM = websdk)
Vue.prototype.$WebIM = WebIM
const imConn = new WebIM.connection({
  isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
  https:
    typeof WebIM.config.https === 'boolean'
      ? WebIM.config.https
      : location.protocol === 'https:',
  url: WebIM.config.xmppURL,
  heartBeatWait: WebIM.config.heartBeatWait,
  autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
  autoReconnectInterval: WebIM.config.autoReconnectInterval,
  apiUrl: WebIM.config.apiURL,
  isAutoLogin: true
})
Vue.prototype.$imConn = imConn
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted() {
    let _this = this
    this.$imConn.listen({
      onOpened: function(message) {
        console.log(message)
      },
      onClosed: function(message) {},
      onTextMessage: function(message) {},
      onEmojiMessage: function(message) {},
      onPictureMessage: function(message) {},
      onCmdMessage: function(message) {},
      onAudioMessage: function(message) {},
      onLocationMessage: function(message) {},
      onFileMessage: function(message) {},
      onVideoMessage: function(message) {
        var node = document.getElementById('privateVideo')
        var option = {
          url: message.url,
          headers: {
            Accept: 'audio/mp4'
          },
          onFileDownloadComplete: function(response) {
            var objectURL = WebIM.utils.parseDownloadResponse.call(
              imConn,
              response
            )
            node.src = objectURL
          },
          onFileDownloadError: function() {
            console.log('File down load error.')
          }
        }
        WebIM.utils.download.call(imConn, option)
      },
      onPresence: function(message) {},
      onRoster: function(message) {},
      onInviteMessage: function(message) {},
      onOnline: function() {},
      onOffline: function() {},
      onError: function(message) {
        let objStr = JSON.stringify(message)
        let arr = objStr.split('\\')
        _this.$message({
          message: arr[3],
          type: 'warning'
        })
      },
      onBlacklistUpdate: function(list) {},
      onReceivedMessage: function(message) {},
      onDeliveredMessage: function(message) {},
      onReadMessage: function(message) {},
      onCreateGroup: function(message) {},
      onMutedMessage: function(message) {}
    })
  }
})
