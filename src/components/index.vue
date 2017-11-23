<template>
  <div class="container">
    <side-bar class="side-bar" @thisTab="showThisTab"></side-bar>
    <section class="content">
      <div class="tab-view">
        <im-chat :is="currentTab"></im-chat>
      </div>  
    </section>
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
    handleClick(tab, event) {
      console.log(tab, event)
    },
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
.side-bar,
.content {
  float: left;
  height: 100%;
}
.tab-view {
  width: 290px;
  height: 100%;
  background-color: #2F3136;
}
</style>


