<template>
  <section>
    <h1><i class="el-icon-back" @click="back"> 返回</i>系统消息</h1>
    <ul class="message-lists">
      <li v-for="item in MessageLists">
        <span>
          <img src="../../assets/logo.png" alt="LOGO">
          <span>{{ item.name }}<br>{{ item.message }}</span>
        </span>
        <span>请求添加你为好友</span>
        <span><el-button size="mini" type="primary" round @click="test">同意</el-button></span>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    MessageLists() {
      return this.$store.state.SystemNotification
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    test() {
      this.$store.commit('increment')
    }
  }
}
</script>
<style scoped>
section {
  background-color: #f9fbfd;
}
h1 {
  text-align: center;
  height: 50px;
  background-color: #202225;
  color: #ffffff;
  line-height: 50px;
  font-weight: normal;
}
h1 > i {
  float: left;
  height: 50px;
  line-height: 50px;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;
}
.message-lists {
  padding: 10px 20px;
  list-style-type: none;
}
.message-lists img {
  width: 80px;
  height: 80px;
  vertical-align: top;
}
.message-lists li {
  border-bottom: 1px solid #00a1ff;
  display: flex;
  justify-content: space-between;
}
.message-lists span {
  display: block;
  display: inline-block;
  height: 100%;
}
</style>


