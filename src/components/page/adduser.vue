<template>
  <section>
    <h1><i class="el-icon-back" @click="back">返回</i>添加好友</h1>
  </section>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
<style scoped>
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
  padding-left: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>


