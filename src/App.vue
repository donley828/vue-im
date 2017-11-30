<template>
  <el-container>
    <router-view></router-view>
  </el-container>
</template>

<script>
export default {
  name: 'app',
  created() {
    let that = this
    this.$RongIMClient.setConnectionStatusListener({
      onChanged(status) {
        switch (status) {
          case that.$RongIMLib.ConnectionStatus.CONNECTED:
            console.log('链接成功')
            break
          case that.$RongIMLib.ConnectionStatus.CONNECTING:
            console.log('正在链接')
            break
          case that.$RongIMLib.ConnectionStatus.DISCONNECTED:
            console.log('断开连接')
            break
          case that.$RongIMLib.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT:
            console.log('其他设备登录')
            break
          case that.$RongIMLib.ConnectionStatus.DOMAIN_INCORRECT:
            console.log('域名不正确')
            break
          case that.$RongIMLib.ConnectionStatus.NETWORK_UNAVAILABLE:
            console.log('网络不可用')
            break
        }
      }
    })
    this.$RongIMClient.setOnReceiveMessageListener({
      onReceived(message) {
        switch (message.messageType) {
          case that.$RongIMClient.MessageType.TextMessage:
            // message.content.content => 消息内容
            console.log(message)
            break
          case that.$RongIMClient.MessageType.VoiceMessage:
            // 对声音进行预加载
            // message.content.content 格式为 AMR 格式的 base64 码
            console.log(message)
            break
          case that.$RongIMClient.MessageType.ImageMessage:
            // message.content.content => 图片缩略图 base64。
            // message.content.imageUri => 原图 URL。
            console.log(message)
            break
          case that.$RongIMClient.MessageType.DiscussionNotificationMessage:
            // message.content.extension => 讨论组中的人员。
            console.log(message)
            break
          case that.$RongIMClient.MessageType.LocationMessage:
            // message.content.latiude => 纬度。
            // message.content.longitude => 经度。
            // message.content.content => 位置图片 base64。
            console.log(message)
            break
          case that.$RongIMClient.MessageType.RichContentMessage:
            // message.content.content => 文本消息内容。
            // message.content.imageUri => 图片 base64。
            // message.content.url => 原图 URL。
            console.log(message)
            break
          case that.$RongIMClient.MessageType.InformationNotificationMessage:
            // do something...
            console.log(message)
            break
          case that.$RongIMClient.MessageType.ContactNotificationMessage:
            // do something...
            console.log(message)
            break
          case that.$RongIMClient.MessageType.ProfileNotificationMessage:
            // do something...
            console.log(message)
            break
          case that.$RongIMClient.MessageType.CommandNotificationMessage:
            // do something...
            console.log(message)
            break
          case that.$RongIMClient.MessageType.CommandMessage:
            // do something...
            console.log(message)
            break
          case that.$RongIMClient.MessageType.UnknownMessage:
            // do something...
            console.log(message)
            break
          default:
            // do something...
            console.log(message)
        }
      }
    })
  }
}
</script>

<style>
body,
html {
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
.el-container {
  height: 100%;
  background-image: url('./assets/14284041271_314bca5a9a_o-e1502649826956.jpg');
  background-repeat: round;
  align-items: center;
  justify-content: center;
}
.el-main {
  margin: 0 auto;
}
</style>
