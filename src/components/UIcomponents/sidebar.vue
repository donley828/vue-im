<template>
  <aside>
    <ul class="nav-side">
      <li><i class="fa fa-user-o" @click="toggleTab('imuser')"></i></li>
      <li><i class="fa fa-comment-o" @click="toggleTab('imchat')"></i></li>
      <li><i class="fa fa-users" @click="toggleTab('imnotice')"></i></li>
      <li><i class="fa fa-align-justify"></i></li>
    </ul>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      currentTab: 'chat'
    }
  },
  components: {
    ImUser,
    ImChat,
    ImNotice
  },
  methods: {
    toggleTab(tab) {
      this.currentTab = tab
    }
  }
}
</script>
<style scoped>
aside {
  height: 100%;
  width: 90px;
  background-color: #202225;
}
.nav-side li {
  height: 90px;
  line-height: 90px;
  cursor: pointer;
}
.nav-side li:last-child {
  width: 90px;
  position: absolute;
  bottom: 0;
}
.nav-side i {
  color: #ffffff;
  font-size: 30px;
}
.nav-side li:hover {
  background-color: rgba(79, 84, 92, 0.6);
}
</style>


