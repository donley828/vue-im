<template>
  <aside>
    <ul class="nav-side">
      <li :class="{ 'this': activeTab == 'ImUser' }" @click="toggleTab('ImUser', $event)"><i class="fa fa-user-o"></i></li>
      <li :class="{ 'this': activeTab == 'ImChat' }" @click="toggleTab('ImChat', $event)"><i class="fa fa-comment-o"></i></li>
      <li :class="{ 'this': activeTab == 'ImNotice' }" @click="toggleTab('ImNotice', $event)"><i class="fa fa-users"></i></li>
      <li :class="{ 'this': activeTab == 'add' }" @click="addUser('adduser')"><i class="fa fa-align-justify"></i></li>
    </ul>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      currentTab: 'ImChat',
      activeTab: 'ImChat'
    }
  },
  methods: {
    toggleTab(tab, event) {
      if (event.currentTarget) {
        this.currentTab = tab
        this.activeTab = tab
        this.$emit('thisTab', this.currentTab)
      } else {
        return false
      }
    },
    addUser(url) {
      const username = this.$route.params.username
      this.$router.push({ path: `/index/${username}/${url}` })
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
  transition: all 0.3s;
  text-align: center;
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
.nav-side li.this {
  background-color: rgba(79, 84, 92, 0.6);
}
</style>


