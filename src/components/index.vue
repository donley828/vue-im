<template>
  <el-container>
    <el-tabs :tab-position="tabPosition" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="个人资料" name="first">
        <span slot="label"><i class="fa fa-vcard"></i></span>
        <my-profile></my-profile>
      </el-tab-pane>
      <el-tab-pane label="好友列表" name="second">
        <span slot="label"><i class="fa fa-user"></i></span>
        <my-chat></my-chat>
      </el-tab-pane>
      <el-tab-pane label="群组" name="third">
        <span slot="label"><i class="fa fa-users"></i></span>
        <my-group></my-group>
      </el-tab-pane>
      <el-tab-pane label="添加好友" name="fourth">
        <span slot="label"><i class="fa fa-user-plus"></i></span>
        <my-add></my-add>
      </el-tab-pane>
    </el-tabs>
  </el-container>
</template>
<script>
import MyProfile from './page/profile'
import MyAdd from './page/add'
import MyChat from './page/chat'
import MyGroup from './page/group'
export default {
  data() {
    return {
      tabPosition: 'left',
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  },
  computed: {},
  components: {
    MyProfile,
    MyAdd,
    MyChat,
    MyGroup
  }
}
</script>
<style scoped>
.el-container {
  height: 500px;
  border: 1px solid #eee;
  flex-grow: 0.4;
  flex-basis: 500px;
  background-image: none;
  background-color: #ffffff;
}
.el-tabs {
  height: 100%;
  width: 100%;
}
.el-tabs i {
  font-size: 20px;
  padding: 20px 0;
}
</style>


