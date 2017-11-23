<template>
  <el-container>
    <router-view></router-view>
  </el-container>
</template>

<script>
export default {
  name: 'app'
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
