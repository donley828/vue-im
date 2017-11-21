<template>
  <section>
    <aside>
      <el-input
      prefix-icon="el-icon-search"
      v-model="searchFriend">
      </el-input>
      <ul class="friend-list">
        <li v-for="(item,index) in members" :class="{active:item.isActive}" @mouseover="changeActive(index)" @mouseleave="item.isActive=false">
          <img :src="item.portraitUri" alt="头像"@mouseover="changeActive(index)" @mouseleave="item.isActive=false">
          <span@mouseover="changeActive(index)" @mouseleave="item.isActive=false">{{item.name}}</span>
        </li>
      </ul>
    </aside>
    <section></section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: 'left',
      searchFriend: '',
      members: [
        {
          name: '东磊',
          portraitUri:
            'https://avatars1.githubusercontent.com/u/19424162?s=400&u=298843c1bade0f1b8fbfeb4222d60c9e769db4b6&v=4',
          isActive: false
        },
        {
          name: '东磊',
          portraitUri:
            'https://avatars1.githubusercontent.com/u/19424162?s=400&u=298843c1bade0f1b8fbfeb4222d60c9e769db4b6&v=4',
          isActive: false
        },
        {
          name: '东磊',
          portraitUri:
            'https://avatars1.githubusercontent.com/u/19424162?s=400&u=298843c1bade0f1b8fbfeb4222d60c9e769db4b6&v=4',
          isActive: false
        }
      ]
    }
  },
  methods: {
    changeActive(index) {
      this.members[index].isActive = !this.members[index].isActive
    }
  }
}
</script>
<style scoped>
aside {
  width: 20%;
  padding: 10px 0;
}
.el-input {
  margin-bottom: 10px;
}
.friend-list img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  vertical-align: middle;
}
.friend-list li {
  display: flex;
  align-items: center;
  justify-content: space-around;
  user-select: none;
  cursor: pointer;
  margin-bottom: 10px;
}
.friend-list li.active {
  background-color: #f8f8f8;
}
</style>


