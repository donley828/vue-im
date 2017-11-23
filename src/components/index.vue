<template>
  <div class="container">
    <side-bar></side-bar>
  </div>
</template>
<script>
import SideBar from './UIcomponents/sidebar'
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
    SideBar
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
</style>


