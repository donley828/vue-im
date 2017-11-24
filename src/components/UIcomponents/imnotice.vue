<template>
  <section class="im-notice">
    <div>
      <el-input class="my-input" prefix-icon="el-icon-search" size="medium" v-model="NoticeSearch" placeholder="请输入"></el-input>
    </div>
    <hr>
    <div class="list-group">
      <ul>
        <li>
          <div class="notice-list-header" @click="handlePanel('notice')">新消息<i :class="{'el-icon-arrow-up':currentPanel == 'notice','el-icon-arrow-down':currentPanel != 'notice'}"></i></div>
          <el-collapse-transition>
            <ul v-show="currentPanel == 'notice'">
              <li @click="handleRoute('notice')"><div class="notice-list"><img src="../../assets/noticeIcon.png" alt="Notice Icon">系统信息</div></li>
            </ul>
          </el-collapse-transition>
        </li>
        <li>
          <div class="notice-list-header" @click="handlePanel('group')">群组<i :class="{'el-icon-arrow-up':currentPanel == 'group','el-icon-arrow-down':currentPanel != 'group'}"></i></div>
          <el-collapse-transition>
            <ul v-show="currentPanel == 'group'">
              <li><div class="notice-list"><img src="../../assets/noticeIcon.png" alt="Notice Icon">新通知</div></li>
            </ul>
          </el-collapse-transition>
        </li>
        <li>
          <div class="notice-list-header" @click="handlePanel('contacts')">联系人<i :class="{'el-icon-arrow-up':currentPanel == 'contacts','el-icon-arrow-down':currentPanel != 'contacts'}"></i></div>
          <el-collapse-transition>
            <ul v-show="currentPanel == 'contacts'">
              <li><div class="notice-list"><img src="../../assets/noticeIcon.png" alt="Notice Icon">新通知</div></li>
            </ul>
          </el-collapse-transition>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      NoticeSearch: '',
      currentPanel: 'notice'
    }
  },
  computed: {
    isActive() {}
  },
  methods: {
    handlePanel(panel) {
      this.currentPanel = panel
    },
    handleRoute(url) {
      const username = this.$route.params.username
      this.$router.push({ path: `/index/${username}/${url}` })
    }
  }
}
</script>
<style scoped>
.im-notice {
  height: 100%;
}
.im-notice > div:first-child {
  padding-left: 10px;
  padding-right: 10px;
}
.my-input {
  margin-top: 10px;
}
hr {
  width: 100%;
  height: 2px;
  background-color: #202225;
  margin-top: 10px;
  border: 0;
}
.list-group {
  margin-top: 5px;
}
.list-group ul {
  list-style-type: none;
}
.notice-list-header {
  height: 35px;
  background-color: rgba(79, 84, 92, 0.6);
  line-height: 35px;
  color: #ffffff;
  padding: 0 10px;
}
.notice-list-header i {
  float: right;
  line-height: 35px;
}
.notice-list {
  display: table-cell;
  font-size: 18px;
  padding: 13px 10px;
  cursor: pointer;
  color: #202225;
}
.notice-list img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 20px;
}
.notice-list a {
  text-decoration: none;
  color: #202225;
}
</style>


