<template>
  <div class="Profile">
    <el-button type="primary" @click="proBtn = !proBtn" v-show="proBtn">个人资料</el-button>
    <section class="main-panel" v-show="!proBtn">
      <div class="main-panel-header">
        <h3>{{ $route.params.username }}</h3>
        <i class="el-icon-close" @click="proBtn = !proBtn" v-show="!proBtn"></i>
        <h4>在深邃的编码世界里...</h4>
        <input></input>
      </div>
      <div class="main-panel-list">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane name="friendList">
            <span slot="label"><i class="fa fa-user"></i></span>
            好友列表
          </el-tab-pane>
          <el-tab-pane name="groupList">
            <span slot="label"><i class="fa fa-users"></i></span>
            我的群组
          </el-tab-pane>
          <el-tab-pane name="latelyList">
            <span slot="label"><i class="fa fa-commenting"></i></span>
            最近联系
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="main-panel-footer">
        <span><i class="el-icon-search"></i></span>
        <span><i class="fa fa-bell-o"></i></span>
        <span><i class="fa fa-gears"></i></span>
        <span><a href="https://github.com/donley828/vue-im" target="_blank"><i class="fa fa-thumbs-o-up"></i></a></span>
        <span><i class="el-icon-question"></i></span>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      proBtn: false,
      activeName: 'friendList'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style scoped>
.Profile {
  position: fixed;
  right: 10px;
  height: 100%;
  display: flex;
  align-items: center;
}

.main-panel {
  width: 260px;
  height: 520px;
  box-shadow: 1px 1px 50px rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  /* border: 1px solid #d9d9d9; */
  border-color: rgba(0, 0, 0, 0.05);
  background-color: #f6f6f6;
  position: relative;
}
.main-panel-header {
  padding: 5px;
  overflow: auto;
  background-color: #dfe1e3;
}
.main-panel-header > h3,
h4 {
  float: left;
  font-weight: normal;
}
.main-panel-header > h4 {
  margin-top: 10px;
  margin-left: 10px;
}
.main-panel-header > i {
  float: right;
  cursor: pointer;
}
.main-panel-header > input {
  width: 100%;
  border: 0;
  height: 20px;
  margin: 10px 0 0 0;
}
.main-panel-list {
  padding: 5px;
  padding-left: 12px;
}
.main-panel-list i {
  font-size: 30px;
  padding: 0 10px;
}
.main-panel-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.main-panel-footer i {
  font-size: 22px;
  padding: 5px 10px;
  cursor: pointer;
}
.main-panel-footer i:hover {
  color: #409eff;
}
</style>


