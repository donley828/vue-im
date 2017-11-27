<template>
  <div class="container">
    <side-bar class="side-bar" @thisTab="showThisTab"></side-bar>
    <section class="content">
      <div class="tab-view">
        <im-chat :is="currentTab"></im-chat>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </section>
    <!-- <router-view class="main-panel"></router-view> -->
  </div>
</template>
<script>
import SideBar from './UIcomponents/sidebar'
import ImUser from './UIcomponents/imuser'
import ImChat from './UIcomponents/imchat'
import ImNotice from './UIcomponents/imnotice'
export default {
  data() {
    return {
      currentTab: 'ImChat'
    }
  },
  methods: {
    showThisTab(data) {
      this.currentTab = data
    }
  },
  computed: {},
  components: {
    SideBar,
    ImUser,
    ImChat,
    ImNotice
  }
}
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  background-image: none;
  background-color: #ffffff;
}
.side-bar {
  float: left;
}
.content {
  margin-left: 90px;
  height: 100%;
}
.main {
  margin-left: 290px;
}
.tab-view {
  float: left;
  width: 290px;
  height: 100%;
  background-color: #e6e5e5;
}
</style>


