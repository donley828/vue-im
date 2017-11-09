<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>This is a simle WebIM with Vue and HUANXIN SDK</h2>
    <div class="btn-group">
      <router-link to="/Signin"><el-button type="primary">登录</el-button></router-link>
      <router-link to="/Signup"><el-button type="primary">注册</el-button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Vue-IM'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.btn-group {
  margin: 20px 0;
}
</style>
