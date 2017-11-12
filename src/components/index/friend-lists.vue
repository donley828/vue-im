<template>
  <ul>
    <li v-for="item in friendGroup">
      <i :class="downOrright"></i>
      <span>{{ item.groupName }}</span>
      <ul :class="{active: isActive}">
        <li v-for="item2 in item.friends">
          <span>{{ item2.name }}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
      friendGroup: [
        {
          groupName: '大学同学',
          friends: [
            {
              name: '谢'
            }
          ]
        }
      ]
    }
  },
  computed: {
    downOrright() {
      return {}
    }
  }
}
</script>
<style scoped>

</style>


